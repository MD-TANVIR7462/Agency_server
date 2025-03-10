import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { envConfig } from "../utils/config";
import { TUserRole } from "../Constant";
import { RegistrationModel } from "../modules/Auth/Registration/auth.model";
export const authMiddleware = (...requiredRoles: TUserRole[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    try {
      const accessToken = req.headers.authorization;
      if (!accessToken) {
        res.status(401).json({
          success: false,
          message: "You Are Unauthorized User",
        });
        return;
      }
      //check if the token is valid
      jwt.verify(accessToken, envConfig.jwtSecret as string, async function (err, decoded) {
        if (err) {
          res.status(401).json({
            success: false,
            message: "You Are Unauthorized User",
          });
          return;
        }
        const isUserExist = await RegistrationModel.findOne({ email: (decoded as JwtPayload).email });

        if (!isUserExist) {
          res.status(401).json({
            success: false,
            message: "Access denied! User not found with this email .",
          });
          return;
        }

        const userActice = isUserExist.isActive;

        if (!userActice) {
          res.status(401).json({
            success: false,
            message: "Access denied! This account exists but currently inactive.",
          });
          return;
        }

        //role matching
        if (requiredRoles && !requiredRoles.includes((decoded as JwtPayload)?.role)) {
          res.status(401).json({
            success: false,
            message: "Insufficient permissions to access this route.",
          });
          return;
        }
        req.user = decoded as JwtPayload;
        next();
      });
    } catch (error) {
      next(error);
    }
  };
};
