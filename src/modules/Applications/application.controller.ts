import { RequestHandler } from "express";

import { emptyResponse, notUpdated } from "../../utils/Respons";
import {
  validateApplication,
  validateUpdateApplication,
} from "./application.validation";
import { ApplicationServices } from "./application.services";

const getApplications: RequestHandler = async (req, res, next) => {
  try {
    const data = await ApplicationServices.getApplications();
    if (data.length <= 0) {
      emptyResponse(res, data);
      return;
    }
    res.status(200).json({
      success: true,
      message: "Applications retrieved successfully.",
      dataLength: data.length,
      data,
    });
  } catch (err) {
    next(err);
  }
};

const getAnApplication: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await ApplicationServices.getAnApplication(id);
    if (!data) {
      notUpdated(res, id, data);
      return;
    }
    res.status(200).json({
      success: true,
      message: "Application retrieved successfully.",
      data,
    });
  } catch (err) {
    next(err);
  }
};
const createApplication: RequestHandler = async (req, res, next) => {
  try {
    const validateData = validateApplication.parse(req.body);
    const data = await ApplicationServices.createApplication(validateData);
    res.status(201).json({
      success: true,
      message: "Application created successfully.",
      data,
    });
  } catch (err) {
    next(err);
  }
};

const selectApplication: RequestHandler = async (req, res, next) => {


  
};

const deleteAnApplication: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;

    const data = await ApplicationServices.deleteAnApplication(id);
    if (!data) {
      notUpdated(res, id, data);
      return;
    }
    res.status(200).json({
      success: true,
      message: "Application deleted successfully.",
      data,
    });
  } catch (err) {
    next(err);
  }
};

export const ApplicationController = {
  getApplications,
  getAnApplication,
  createApplication,
  deleteAnApplication,
};
