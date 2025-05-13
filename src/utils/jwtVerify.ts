import jwt, { JwtPayload } from "jsonwebtoken";

export const jwtVerify = (token: string, secret: string) => {
  return jwt.verify(token, secret as string) as JwtPayload;
};
