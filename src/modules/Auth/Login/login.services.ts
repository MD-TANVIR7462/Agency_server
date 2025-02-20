import { RegistrationModel } from "../Registration/auth.model";
import { TLogin } from "./login.interface";
import bcrypt from "bcrypt";

const loginUuser = async (data: TLogin) => {
  const isUserExist = await RegistrationModel.findOne({ email: data.email });

  if (!isUserExist) {
    throw new Error("User not found with this email");
  }

  const userActice = isUserExist.isActive;

  if (!userActice) {
    const data = {
      message: "User Exist But current user status is Blocked ",
    };
    return data;
  }

  const isPasswordMatch = await bcrypt.compare(data?.password, isUserExist?.password);
};

export const loginServices = {
  loginUuser,
};
