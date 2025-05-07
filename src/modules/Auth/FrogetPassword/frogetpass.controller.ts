import { RequestHandler } from "express";
import { frogetPasswordValidation } from "./frogetPass.validation";
import { frogetPassService } from "./frogetPass.services";

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
      result,
    });
  } catch (err) {
    next(err);
  }
};
