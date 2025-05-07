import { RequestHandler } from "express";
import { passwordValidation } from "./changepass.validaton";
import { changePasswordSercice } from "./changepass.services";

export const changePassword: RequestHandler = async (req, res, next) => {
  try {
    const data = passwordValidation.parse(req.body);
    const currentUser = req.user;
    const userData = { currentUser, ...data };
    const result = await changePasswordSercice(userData);
    if (!result) {
      res.status(400).json({
        success: false,
        message: "Error!",
        data: null,
      });
    }
    res.status(200).json({
      success: true,
      message: "Password Updated successfully.",
      data: data,
    });
  } catch (err) {
    next(err);
  }
};
