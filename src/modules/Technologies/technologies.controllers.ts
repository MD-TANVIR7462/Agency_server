import { RequestHandler } from "express";
import { TechnologyServices } from "./technologies.services";
import { validateTechnology, validateUpdateTechnology } from "./technologies.validation";
import { emptyResponse, notUpdated } from "../../utils/Respons";

const getTechnology: RequestHandler = async (req, res, next) => {
  const queryData = req.query;
  try {
    const data = await TechnologyServices.getTechnology(queryData);
    if (data.length <= 0) {
      emptyResponse(res, data);
      return;
    }
    res.status(200).json({
      success: true,
      message: "Technologies retrieve successfully.",
      dataLength: data.length,
      data,
    });
  } catch (err) {
    next(err);
  }
};

const getATechnology: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await TechnologyServices.getATechnology(id);
    if (!data) {
      notUpdated(res, id, data);
      return;
    }
    res.status(200).json({
      success: true,
      message: "Technology retrieve successfully.",
      data,
    });
  } catch (err) {
    next(err);
  }
};

const createTechnology: RequestHandler = async (req, res, next) => {
  try {
    const validateData = validateTechnology.parse(req.body);
    const data = await TechnologyServices.createTechnology(validateData);
    res.status(201).json({
      success: true,
      message: "Technology created successfully",
      data,
    });
  } catch (err) {
    next(err);
  }
};
const updateATechnology: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const validateData = validateUpdateTechnology.parse(req.body);
    const data = await TechnologyServices.updateATechnology(id, validateData);
    if (!data) {
      notUpdated(res, id, data);
      return;
    }
    res.status(200).json({
      success: true,
      message: "Technology updated successfully",
      data,
    });
  } catch (err) {
    next(err);
  }
};
const deleteATechnology: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;

    const data = await TechnologyServices.deleteATechnology(id);
    if (!data) {
      notUpdated(res, id, data);
      return;
    }
    res.status(200).json({
      success: true,
      message: "Technology deleted successfully",
      data,
    });
  } catch (err) {
    next(err);
  }
};

export const TechnologyController = {
  getTechnology,
  getATechnology,
  createTechnology,
  updateATechnology,
  deleteATechnology,
};
