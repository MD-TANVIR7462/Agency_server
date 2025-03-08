import { JwtPayload } from "jsonwebtoken";
import { RegistrationModel } from "../Registration/auth.model";
import  bcrypt  from "bcrypt";

export const changePasswordSercice = async(data:  {
  oldPassword: string;
  newPassword: string;
  currentUser: JwtPayload;
}) => {
  console.log(data)
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
    const data = {
      message: "Wrong Password !",
    };
    return data;
  }
};
