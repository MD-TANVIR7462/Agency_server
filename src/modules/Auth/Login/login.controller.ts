import { RequestHandler } from "express";
import { loginValidation } from "./login.validation";
import { loginServices } from "./login.services";
import { envConfig } from "../../../utils/config";

const loginUuser: RequestHandler = async (req, res, next) => {
  try {
    const validateLoginData = loginValidation.parse(req.body);
    const loginSuccess = await loginServices.loginUuser(validateLoginData);
    const { refreshToken, accessToken, needPasswordChange }: any = loginSuccess;

    res.cookie("refreshToken", refreshToken, {
      secure: envConfig.productionType === "production",
      httpOnly: true,
    });
    res.status(200).send({
      success: true,
      message: "User login successfully.",
      data: { accessToken, needPasswordChange },
    });
  } catch (err) {
    next(err);
  }
};

export const loginController = {
  loginUuser,
};
