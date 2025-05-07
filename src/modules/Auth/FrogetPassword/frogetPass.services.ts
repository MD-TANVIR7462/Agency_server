import { envConfig } from "../../../utils/config";
import { sendEmail } from "../../../utils/sendEmail";
import { RegistrationModel } from "../Registration/auth.model";
import jwt from "jsonwebtoken";

export const frogetPassService = async (email: string) => {
  const isUserExist = await RegistrationModel.findOne({ email: email });

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
  // const to= isUserExist.email
  const to = "tanvir.dev3@gmail.com";
  const username = isUserExist.name;
  const id = isUserExist._id;

  const resetToken = jwt.sign(userData, jwt_Secret as string, { expiresIn: "10m" });
  const resetUILink = `${envConfig.websiteLink}?id=${id}&token=${resetToken}`;

  sendEmail(to, username, resetUILink);

  return resetUILink;
};
