import { Response } from "express";

export const emptyResponse = (res: Response, data: any) => {
 return res.status(200).json({
    success: false,
    message: "No data found in the database.",
    data,
  });
};
