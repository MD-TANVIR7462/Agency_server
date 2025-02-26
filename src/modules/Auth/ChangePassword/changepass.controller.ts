import { RequestHandler } from "express";
import { passwordValidation } from "./changepass.validaton";
import { changePasswordSercice } from "./changepass.services";

export const changePassword: RequestHandler = async (req, res, next) => {
    const logedInuser = req.user
  const data = passwordValidation.parse(req.body);
  const result = await changePasswordSercice(data);

  console.log(logedInuser,data)

};
