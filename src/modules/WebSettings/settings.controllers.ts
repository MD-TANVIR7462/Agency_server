import { RequestHandler } from "express";
import { alreadyExist, emptyResponse, notUpdated } from "../../utils/Respons";
import { SettingsServices } from "./settings.services";
import {
  validateSettings,
  validateUpdateSettings,
} from "./settings.validation";

const getSettings: RequestHandler = async (req, res, next) => {
  try {
    const data = await SettingsServices.getSettings();
    if (data.length <= 0) {
      emptyResponse(res, data);
      return;
    }
    res.status(200).json({
      success: true,
      message: "Settings's retrieved successfully.",
      dataLength: data.length,
      data,
    });
  } catch (err) {
    next(err);
  }
};

const createSettings: RequestHandler = async (req, res, next) => {
  try {
    const validateData = validateSettings.parse(req.body);
    const data = await SettingsServices.createSettings(validateData);
    if(!data){
      alreadyExist(res,data,)
      return
    }
    res.status(201).json({
      success: true,
      message: "Settings created successfully.",
      data,
    });
  } catch (err) {
    next(err);
  }
};

const updateASettings: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const validateData = validateUpdateSettings.parse(req.body);
    const data = await SettingsServices.updateASettings(id, validateData);
    if (!data) {
      notUpdated(res, id, data);
      return;
    }
    res.status(200).json({
      success: true,
      message: "Settings updated successfully.",
      data,
    });
  } catch (err) {
    next(err);
  }
};

export const SettingsController = {
  getSettings,
  createSettings,
  updateASettings,
};
