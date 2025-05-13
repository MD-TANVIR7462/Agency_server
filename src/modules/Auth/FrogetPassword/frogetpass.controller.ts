import { RequestHandler } from "express";
import { frogetPasswordValidation, resetPasswordValidation } from "./frogetPass.validation";
import { frogetPassService, resetPassService } from "./frogetPass.services";

export const frogetPasswordController: RequestHandler = async (req, res, next) => {
  try {
    const userEmail = {
      email: req.body.email,
    };
    const validteID = frogetPasswordValidation.parse(userEmail);
    const result = await frogetPassService(validteID.email);
    res.status(200).send({
      success: true,
      message: "Please check your mail to Reset your Password!",
      // result, //!testing purpus uncomment it.....
    });
  } catch (err) {
    next(err);
  }
};
export const resetPasswordController: RequestHandler = async (req, res, next) => {
  try {
    const { id, newPass } = req.body;
    const token = req.headers?.authorization;
    const validtePassword = resetPasswordValidation.parse({ id, newPass });
    await resetPassService(validtePassword, token as string);
    res.status(200).send({
      success: true,
      message: "Password reset! Please log in with your new password.",
    });
  } catch (err) {
    next(err);
  }
};
