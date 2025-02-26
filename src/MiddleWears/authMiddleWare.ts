import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { envConfig } from "../utils/config";
export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
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
    jwt.verify(accessToken, envConfig.jwtSecret as string, function (err, decoded) {
      if (err) {
        res.status(401).json({
          success: false,
          message: "You Are Unauthorized User",
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
