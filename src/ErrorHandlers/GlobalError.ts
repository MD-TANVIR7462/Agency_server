import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

// Define the error type based on the provided signature
type globalError = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => void;

const globalError: globalError = (error, req, res, next) => {
  // Default error properties
  const statusCode = error.status || 500;
  let message = error.message || "Internal Server Error";

  // Handle Mongoose CastError (invalid ObjectId)
  if (error.name === "CastError") {
    message = `Invalid value for ${error.path}: ${error.value}`;
    return res.status(400).json({
      success: false,
      statusCode: 400,
      message,
    });
  }

  // Handle Mongoose Duplicate Key Error
  if (error.code === 11000) {
    const field = Object.keys(error.keyValue || {}).join(", ");
    message = `Duplicate value for field(s): ${field}`;
    return res.status(409).json({
      success: false,
      statusCode: 409,
      message,
    });
  }

  // Handle Mongoose ValidationError
  if (error.name === "ValidationError") {
    const validationErrors = Object.values(error.errors || {}).map(
      (err: any) => err.message
    );
    message = `Validation failed: ${validationErrors.join(", ")}`;
    return res.status(400).json({
      success: false,
      statusCode: 400,
      message,
    });
  }

  // Handle Zod Validation Errors
  if (error instanceof ZodError) {
    const validationErrors = error.errors.map(
      (err) => `${err.path.join(".")}: ${err.message}`
    );
    message = `Validation failed: ${validationErrors.join(", ")}`;
    return res.status(400).json({
      success: false,
      statusCode: 400,
      message,
      details: validationErrors, // Optional: include detailed errors for debugging
    });
  }

  // Handle any other generic errors
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
    error: process.env.NODE_ENV === "development" ? error : undefined, // Include error details in development
  });
};

export default globalError;
