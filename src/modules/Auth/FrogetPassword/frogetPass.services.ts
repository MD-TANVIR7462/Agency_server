import { envConfig } from "../../../utils/config";
import { sendEmail } from "../../../utils/sendEmail";
import { RegistrationModel } from "../Registration/auth.model";
import jwt, { JwtPayload } from "jsonwebtoken";
import bcrypt from "bcrypt";

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
  const to = isUserExist.email;
  // const to = "tanvir.dev3@gmail.com";
  const username = isUserExist.name;
  const id = isUserExist._id;

  const resetToken = jwt.sign(userData, jwt_Secret as string, { expiresIn: "10m" });
  const resetUILink = `${envConfig.websiteLink}?id=${id}&token=${resetToken}`;

  sendEmail(to, username, resetUILink);

  return resetUILink;
};

export const resetPassService = async (data: { id: string; newPass: string }, token: string) => {
  const isUserExist = await RegistrationModel.findOne({ _id: data?.id });

  if (!isUserExist) {
    throw new Error("User not found !");
  }

  const userActice = isUserExist.isActive;
  if (!userActice) {
    throw new Error("User Exist But current user status is Blocked ");
  }
  const decoded = jwt.verify(token, envConfig.accessSecret as string) as JwtPayload;

  const gmailCheck = decoded.email === isUserExist.email;

  if (!gmailCheck) {
    throw new Error("You are providing wrong information!");
  }
  const newHaspass = await bcrypt.hash(data.newPass, Number(envConfig.bcryptRound));

  await RegistrationModel.findOneAndUpdate(
    { email: decoded.email, role: decoded.role },
    {
      password: newHaspass,
      needPasswordChange: false,
      passwordChangeAt: new Date(),
    }
  );
};
