import { envConfig } from "../../../utils/config";
import { RegistrationModel } from "../Registration/auth.model";
import { TLogin } from "./login.interface";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const loginUuser = async (data: TLogin) => {
  const isUserExist = await RegistrationModel.findOne({ email: data.email });

  if (!isUserExist) {
    throw new Error("User not found with this email");
  }

  const userActice = isUserExist.isActive;
  if (!userActice) {
    throw new Error("User Exist But current user status is Blocked ");
  }

  const isPasswordMatch = await bcrypt.compare(data?.password, isUserExist?.password);
  if (!isPasswordMatch) {
    throw new Error("Wrong Password !");
  }
  //create token and sent to the client...
  const userData = {
    email: isUserExist.email,
    role: isUserExist.role,
  };
  const jwt_Secret = envConfig.accessSecret;
  const accessToken = jwt.sign(userData, jwt_Secret as string, { expiresIn: "1d" });
  const refreshToken = jwt.sign(userData, envConfig.refreSecret as string, { expiresIn: "365d" });
  const result = {
    accessToken,
    refreshToken,
    needPasswordChange: isUserExist.needPasswordChange,
  };
  return result;
};

export const loginServices = {
  loginUuser,
};
