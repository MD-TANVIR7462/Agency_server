import { RequestHandler } from "express";
import { emptyResponse, notUpdated } from "../../utils/Respons";
import { GalleryServices } from "./gallery.services";
import { validateGallery, validateUpdateGallery } from "./gallery.validation";

const getGallery: RequestHandler = async (req, res, next) => {
  const query = req.query
  try {
    const data = await GalleryServices.getGallery(query as any);
    if (data.length <= 0) {
      emptyResponse(res, data);
      return;
    }
    res.status(200).json({
      success: true,
      message: "Gallery's retrieved successfully.",
      dataLength: data.length,
      data,
    });
  } catch (err) {
    next(err);
  }
};

const getAGallery: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await GalleryServices.getAGallery(id);
    if (!data) {
      notUpdated(res, id, data);
      return;
    }
    res.status(200).json({
      success: true,
      message: "Gallery retrieved successfully.",
      data,
    });
  } catch (err) {
    next(err);
  }
};

const createGallery: RequestHandler = async (req, res, next) => {
  try {
    const validateData = validateGallery.parse(req.body);
    const data = await GalleryServices.createGallery(validateData);
    res.status(201).json({
      success: true,
      message: "Gallery created successfully.",
      data,
    });
  } catch (err) {
    next(err);
  }
};

const updateAGallery: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const validateData = validateUpdateGallery.parse(req.body);
    const data = await GalleryServices.updateAGallery(id, validateData);
    if (!data) {
      notUpdated(res, id, data);
      return;
    }
    res.status(200).json({
      success: true,
      message: "Gallery updated successfully.",
      data,
    });
  } catch (err) {
    next(err);
  }
};

const deleteAGallery: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await GalleryServices.deleteAGallery(id);
    if (!data) {
      notUpdated(res, id, data);
      return;
    }
    res.status(200).json({
      success: true,
      message: "Gallery deleted successfully.",
      data,
    });
  } catch (err) {
    next(err);
  }
};

export const GalleryController = {
  getGallery,
  getAGallery,
  createGallery,
  updateAGallery,
  deleteAGallery,
};
