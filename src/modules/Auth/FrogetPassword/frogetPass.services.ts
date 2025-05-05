import { envConfig } from "../../../utils/config";
import { RegistrationModel } from "../Registration/auth.model";
import jwt from "jsonwebtoken";

export const frogetPassService = async (id: string) => {
    console.log(id,"Services")
  const isUserExist = await RegistrationModel.findOne({ _id: id });

  if (!isUserExist) {
    throw new Error("User not found !");
  }

  const userActice = isUserExist.isActive;
  if (!userActice) {
    throw new Error("User Exist But current user status is Blocked ");
  }
  const jwt_Secret = envConfig.accessSecret;
  const userData = {
    email: isUserExist.email,
    role: isUserExist.role,
  };
  const accessToken = jwt.sign(userData, jwt_Secret as string, { expiresIn: "10m" });
  const resetUILink = `${envConfig.websiteLink}?id=${id}&token=${accessToken}`;
  return resetUILink;
};
