import { RequestHandler } from "express";

import { registrationValidationSchema } from "./auth.validation";
import { AuthServices } from "./auth.services";
import { emptyResponse, notUpdated } from "../../../utils/Respons";

const registerUser: RequestHandler = async (req, res, next) => {
  try {
    const validatedData = registrationValidationSchema.parse(req.body);
    const data = await AuthServices.registerUser(validatedData);
    res.status(201).json({
      success: true,
      message: "User registered successfully.",
      data,
    });
  } catch (err) {
    next(err);
  }
};

const getAllUsers: RequestHandler = async (req, res, next) => {
  try {
    const data = await AuthServices.getAllUsers();
    if (data.length === 0) {
      emptyResponse(res, data);
      return;
    }
    res.status(200).json({
      success: true,
      message: "All users retrieved successfully.",
      dataLength: data.length,
      data,
    });
  } catch (err) {
    next(err);
  }
};

const getUserById: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await AuthServices.getUserById(id);
    if (!data) {
      emptyResponse(res, data);
      return;
    }
    res.status(200).json({
      success: true,
      message: "User retrieved successfully.",
      data,
    });
  } catch (err) {
    next(err);
  }
};

const updateUser: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const validatedData = registrationValidationSchema.partial().parse(req.body);
    const data = await AuthServices.updateUser(id, validatedData);
    if (!data) {
      notUpdated(res, id, data);
      return;
    }
    res.status(200).json({
      success: true,
      message: "User updated successfully.",
      data,
    });
  } catch (err) {
    next(err);
  }
};

const deleteUser: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await AuthServices.deleteUser(id);
    if (!data) {
      notUpdated(res, id, data);
      return;
    }
    res.status(200).json({
      success: true,
      message: "User deleted successfully.",
      data,
    });
  } catch (err) {
    next(err);
  }
};

export const AuthController = {
  registerUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
