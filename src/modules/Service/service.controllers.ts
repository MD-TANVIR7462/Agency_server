import { RequestHandler } from "express";
import { ServiceServices } from "./service.services";
import { validateService, validateUpdateService } from "./service.validation";

const getServices: RequestHandler = async (req, res, next) => {
  try {
    const data = await ServiceServices.getServices();
    if (data.length <= 0) {
      res.status(200).json({
        success: false,
        message: "No data found in the database.",
        data,
      });
      return;
    }
    res.status(200).json({
      success: true,
      message: "Services retrieve successfully.",
      data,
    });
  } catch (err) {
    next(err);
  }
};

const getAService: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await ServiceServices.getAService(id);
    if (!data) {
      res.status(200).json({
        success: false,
        message: `service not found, make sure the id:${id} is correct. `,
        data,
      });
      return;
    }
    res.status(200).json({
      success: true,
      message: "Service retrieve successfully.",
      data,
    });
  } catch (err) {
    next(err);
  }
};

const createService: RequestHandler = async (req, res, next) => {
  try {
    const validateData = validateService.parse(req.body);
    const data = await ServiceServices.createService(validateData);
    res.status(201).json({
      success: true,
      message: "Service created successfully",
      data,
    });
  } catch (err) {
    next(err);
  }
};
const updateAService: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const validateData = validateUpdateService.parse(req.body);
    const data = await ServiceServices.updateAService(id, validateData);
    if (!data) {
      res.status(400).json({
        success: false,
        message: `service not updated, make sure the id:${id} is correct. `,
        data,
      });
    }
    res.status(200).json({
      success: true,
      message: "service updated successfully",
      data,
    });
  } catch (err) {
    next(err);
  }
};
const deleteAService: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;

    const data = await ServiceServices.deleteAService(id, req.body.isDeleted as boolean);
    if (!data) {
      res.status(400).json({
        success: false,
        message: `service not deleted, make sure the id:${id} is correct. `,
        data,
      });
    }
    res.status(200).json({
      success: true,
      message: "service updated successfully",
      data,
    });
  } catch (err) {
    next(err);
  }
};

export const ServiceController = {
  getServices,
  getAService,
  createService,
  updateAService,
  deleteAService,
};
