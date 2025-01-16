import { RequestHandler } from "express";
import { TestimonialServices } from "./testimonial.services";
import { validateTestimonial } from "./testimonial.validation";
import { emptyResponse, notUpdated } from "../../utils/Respons";

const getTestimonial: RequestHandler = async (req, res, next) => {
  try {
    const data = await TestimonialServices.getTestimonial();
    if (data.length <= 0) {
      emptyResponse(res, data);
      return;
    }
    res.status(200).json({
      success: true,
      message: "Testimonials retrieve successfully.",
      dataLength: data.length,
      data,
    });
  } catch (err) {
    next(err);
  }
};

const getATestimonial: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await TestimonialServices.getATestimonial(id);
    if (!data) {
      notUpdated(res, id, data);
      return;
    }
    res.status(200).json({
      success: true,
      message: "Testimonial retrieve successfully.",
      data,
    });
  } catch (err) {
    next(err);
  }
};

const createTestimonial: RequestHandler = async (req, res, next) => {
  try {
    const validateData = validateTestimonial.parse(req.body);
    const data = await TestimonialServices.createTestimonial(validateData);
    res.status(201).json({
      success: true,
      message: "Testimonial created successfully",
      data,
    });
  } catch (err) {
    next(err);
  }
};
const updateATestimonial: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await TestimonialServices.updateATestimonial(id, req.body);
    if (!data) {
      notUpdated(res, id, data);
      return;
    }
    res.status(200).json({
      success: true,
      message: "Testimonial updated successfully",
      data,
    });
  } catch (err) {
    next(err);
  }
};
const deleteATestimonial: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;

    const data = await TestimonialServices.deleteATestimonial(id);
    if (!data) {
      notUpdated(res, id, data);
      return;
    }
    res.status(200).json({
      success: true,
      message: "Testimonial deleted successfully",
      data,
    });
  } catch (err) {
    next(err);
  }
};

export const TestimonialController = {
  getTestimonial,
  getATestimonial,
  createTestimonial,
  updateATestimonial,
  deleteATestimonial,
};
