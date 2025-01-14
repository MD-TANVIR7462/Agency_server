import { RequestHandler } from "express";

export const routeError: RequestHandler = (req, res) => {
  res.status(400).json({
    success: false,
    message: "Route Not Found!",
  });
};
