import { JwtPayload } from "jsonwebtoken";
import { RegistrationModel } from "../Registration/auth.model";
import bcrypt from "bcrypt";
import { envConfig } from "../../../utils/config";

export const changePasswordSercice = async (data: {
  oldPassword: string;
  newPassword: string;
  currentUser: JwtPayload;
}) => {
  const isUserExist = await RegistrationModel.findOne({ email: data.currentUser.email });

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

  const isPasswordMatch = await bcrypt.compare(data?.oldPassword, isUserExist?.password);
  if (!isPasswordMatch) {
    throw new Error("Wrong Password !");
  }
  if (data.oldPassword === data.newPassword) {
    throw new Error("Your new password must be different from your previous one.");
  }
  const newHaspass = await bcrypt.hash(data.newPassword, Number(envConfig.bcryptRound));

  const result = await RegistrationModel.findOneAndUpdate(
    { email: data.currentUser.email, role: data.currentUser.role },
    {
      password: newHaspass,
      needPasswordChange: false,
      passwordChangeAt:new Date()
    }
  ).select("-password --v");
  return result;
};
