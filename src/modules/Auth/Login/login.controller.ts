import { RequestHandler } from "express";
import { loginValidation } from "./login.validation";
import { loginServices } from "./login.services";

const loginUuser: RequestHandler = async (req, res, next) => {
  try {
    const validateLoginData = loginValidation.parse(req.body);
    const loginSuccess = await loginServices.loginUuser(validateLoginData);
    res.status(200).send({
      success: true,
      message: "User login successfully.",
      data: loginSuccess,
    });
  } catch (err) {
    next(err);
  }
};

export const loginController = {
  loginUuser,
};
