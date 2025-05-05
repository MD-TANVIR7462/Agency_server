import { RequestHandler } from "express";
import { frogetPasswordValidation } from "./frogetPass.validation";
import { frogetPassService } from "./frogetPass.services";

export const frogetPasswordController: RequestHandler = async (req, res, next) => {
  try {
    const userID = {
      id: req.body.id,
    };
    const validteID = frogetPasswordValidation.parse(userID);
    const result = await frogetPassService(validteID.id);
    res.status(200).send({
      success: true,
      message: "Reset link  genarated successfully.",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
