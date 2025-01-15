import { RequestHandler } from "express";
import { BannerServices } from "./banner.service";

const createBanner: RequestHandler = async (req, res, next) => {
  try {
    const bannerData = req.body;
    const data = await BannerServices.createBanner(bannerData);
    res.status(201).json({
      success: true,
      message: "Banner created successfully",
      data,
    });
  } catch (err) {
    next(err);
  }
};

const getBanner: RequestHandler = async (req, res, next) => {
  try {
    const data = await BannerServices.getBanner();

    if (!data || data?.length <= 0) {
      res.status(404).json({
        success: false,
        message: "No data found in the database.",
        data,
      });
    }

    res.status(200).json({
      success: true,
      message: "Banner retrieve successfully",
      data,
    });
  } catch (err) {
    next(err);
  }
};

const updateBanner: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const data = await BannerServices.updateBanner(id, updateData);
    res.status(200).json({
      success: true,
      message: "Banner updated successfully",
      data,
    });
  } catch (err) {
    next(err);
  }
};

export const BannerController = {
  createBanner,
  getBanner,
  updateBanner,
};
