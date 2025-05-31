import { RequestHandler } from "express";
import { loginValidation, refreshTokenValidation } from "./login.validation";
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

const getRefreshToken: RequestHandler = async (req, res, next) => {
  try {
    const { refreshToken } = req.cookies;
    const token = refreshTokenValidation.parse(refreshToken);

    const result = await loginServices.refreshToken(token as any);
    res.status(200).send({
      success: true,
      message: "Access Token Created successfully.",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const loginController = {
  loginUuser,
  getRefreshToken,
};
