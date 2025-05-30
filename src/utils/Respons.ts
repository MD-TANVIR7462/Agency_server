import { Response } from "express";

export const emptyResponse = (res: Response, data: any) => {
  return res.status(400).json({
    success: false,
    message: "No data found, Database is Empty.",
    data,
  });
};

export const notUpdated = (res: Response, id: string, data: any) => {
  res.status(400).json({
    success: false,
    message: `Not found, make sure the id:${id} is correct. `,
    data,
  });
};

export const alreadyExist = (res: Response, data: any) => {
  res.status(401).json({
    success: false,
    message: `You Can't create another document`,
    data,
  });
};
