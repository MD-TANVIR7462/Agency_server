import { NextFunction, Request, RequestHandler, Response } from "express";

type globalError = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => void;

const globalError: globalError = (error, req, res, next) => {
  const statusCode = error.status || 500;
  const message = error.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
    error,
  });
};

export default globalError;
