import { RequestHandler } from "express";
import { BannerServices } from "./banner.service";

const createBanner: RequestHandler = async (req, res, next) => {
  try {
    const bannerData = req.body;
    const result = await BannerServices.createBanner(bannerData);
    res.status(201).json({
      success: true,
      message: "Banner created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const BannerController = {
  createBanner,
};
