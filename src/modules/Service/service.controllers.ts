import { RequestHandler } from "express";
import { ServiceServices } from "./service.services";
import { validateService, validateUpdateService } from "./service.validation";
import { emptyResponse, notUpdated } from "../../utils/Respons";

const getServices: RequestHandler = async (req, res, next) => {
  try {
    const data = await ServiceServices.getServices();
    if (data.length <= 0) {
      emptyResponse(res, data);
      return;
    }
    res.status(200).json({
      success: true,
      message: "Services retrieve successfully.",
      dataLength: data.length,
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
      notUpdated(res, id, data);
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

    const data = await ServiceServices.deleteAService(
      id,
    );
    if (!data) {
      notUpdated(res, id, data);
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
