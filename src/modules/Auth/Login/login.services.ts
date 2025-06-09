import { isPasswordChange } from "../../../utils";
import { envConfig } from "../../../utils/config";
import { RegistrationModel } from "../Registration/auth.model";
import { TLogin } from "./login.interface";
import bcrypt from "bcrypt";
import jwt, { JwtPayload } from "jsonwebtoken";

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
  const accessToken = jwt.sign(userData, jwt_Secret as string, { expiresIn: "3d" });
  const refreshToken = jwt.sign(userData, envConfig.refreSecret as string, { expiresIn: "365d" });
  const result = {
    accessToken,
    refreshToken,
    needPasswordChange: isUserExist.needPasswordChange,
  };
  return result;
};

const refreshToken = async (token: string) => {
  try {
    // Use Promise to wrap jwt.verify
    const decoded = await new Promise<JwtPayload>((resolve, reject) => {
      jwt.verify(token, envConfig.refreSecret as string, (err, decoded) => {
        if (err) {
          reject(new Error("You Are Unauthorized User"));
        } else {
          resolve(decoded as JwtPayload);
        }
      });
    });

    // Check if user exists in the database
    const isUserExist = await RegistrationModel.findOne({ email: decoded.email });
    if (!isUserExist) {
      throw new Error("Access denied! User not found with this email");
    }

    // Check if the user's account is active
    if (!isUserExist.isActive) {
      throw new Error("Access denied! This account exists but is currently inactive.");
    }

    // Check if the password has changed after the token was issued
    if (isUserExist.passwordChangeAt) {
      const result = isPasswordChange(isUserExist.passwordChangeAt, decoded.iat as number);
      if (result) {
        throw new Error("You are providing an old Password!");
      }
    }

    // Generate a new access token
    const userData = {
      email: isUserExist.email,
      role: isUserExist.role,
    };
    const accessToken = jwt.sign(userData, envConfig.refreSecret as string, { expiresIn: "3d" });

    return { accessToken }; // Return the new access token
  } catch (error) {
    throw new Error("Internal Server Error!");
  }
};

export const loginServices = {
  loginUuser,
  refreshToken,
};
