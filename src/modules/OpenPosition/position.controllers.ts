import { RequestHandler } from "express";

import { emptyResponse, notUpdated } from "../../utils/Respons";
import {
  validatePosition,
  validateUpdatePosition,
} from "./position.validation";
import { PositionServices } from "./position.services";

const getPositions: RequestHandler = async (req, res, next) => {
  try {
    const data = await PositionServices.getPositions();
    if (data.length <= 0) {
      emptyResponse(res, data);
      return;
    }
    res.status(200).json({
      success: true,
      message: "Positions retrieved successfully.",
      dataLength: data.length,
      data,
    });
  } catch (err) {
    next(err);
  }
};

const getAPosition: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await PositionServices.getAPosition(id);
    if (!data) {
      notUpdated(res, id, data);
      return;
    }
    res.status(200).json({
      success: true,
      message: "Position retrieved successfully.",
      data,
    });
  } catch (err) {
    next(err);
  }
};

const createPosition: RequestHandler = async (req, res, next) => {
  try {
    const validateData = validatePosition.parse(req.body);
    const data = await PositionServices.createPosition(validateData);
    res.status(201).json({
      success: true,
      message: "Position created successfully.",
      data,
    });
  } catch (err) {
    next(err);
  }
};

const updateAPosition: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateData = validateUpdatePosition.parse(req.body);
    const data = await PositionServices.updateAPosition(id, updateData);
    if (!data) {
      notUpdated(res, id, data);
      return;
    }
    res.status(200).json({
      success: true,
      message: "Position updated successfully.",
      data,
    });
  } catch (err) {
    next(err);
  }
};

const deleteAPosition: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;

    const data = await PositionServices.deleteAPosition(id);
    if (!data) {
      notUpdated(res, id, data);
      return;
    }
    res.status(200).json({
      success: true,
      message: "Position deleted successfully.",
      data,
    });
  } catch (err) {
    next(err);
  }
};

export const PositionController = {
  getPositions,
  getAPosition,
  createPosition,
  updateAPosition,
  deleteAPosition,
};
