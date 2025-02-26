import { RequestHandler } from "express";
import { BannerServices } from "./banner.service";
import { validateBanner, validateBannerUpdate } from "./banner.validation";

const createBanner: RequestHandler = async (req, res, next) => {
  try {
    const bannerData = validateBanner.parse(req.body);
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
  console.log("banner", req.user);
  try {
    const data = await BannerServices.getBanner();

    if (!data || data?.length <= 0) {
      res.status(200).json({
        success: false,
        message: "No data found in the database.",
        data,
      });
      return;
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
    const updateData = validateBannerUpdate.parse(req.body);
    const data = await BannerServices.updateBanner(id, updateData);
    if (!data) {
      res.status(400).json({
        success: false,
        message: `Banner not updated, make sure the id:${id} is correct. `,
        data,
      });
    }
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
