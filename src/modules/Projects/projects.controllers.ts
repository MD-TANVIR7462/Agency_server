import { RequestHandler } from "express";

import { validateProject } from "./projects.validation";
import { emptyResponse, notUpdated } from "../../utils/Respons";
import { ProjectServices } from "./projects.services";

const getProjects: RequestHandler = async (req, res, next) => {
  try {
    const data = await ProjectServices.getProjects();
    if (data.length <= 0) {
      emptyResponse(res, data);
      return;
    }
    res.status(200).json({
      success: true,
      message: "Projects retrieved successfully.",
      dataLength: data.length,
      data,
    });
  } catch (err) {
    next(err);
  }
};
const getWebProjects: RequestHandler = async (req, res, next) => {
  try {
    const data = await ProjectServices.getWebProjects();
    if (data.length <= 0) {
      emptyResponse(res, data);
      return;
    }
    res.status(200).json({
      success: true,
      message: "Projects retrieved successfully.",
      dataLength: data.length,
      data,
    });
  } catch (err) {
    next(err);
  }
};
const getAppProjects: RequestHandler = async (req, res, next) => {
  try {
    const data = await ProjectServices.getAppProjects();
    if (data.length <= 0) {
      emptyResponse(res, data);
      return;
    }
    res.status(200).json({
      success: true,
      message: "Projects retrieved successfully.",
      dataLength: data.length,
      data,
    });
  } catch (err) {
    next(err);
  }
};
const getGraphicsProjects: RequestHandler = async (req, res, next) => {
  try {
    const data = await ProjectServices.getGraphicsProjects();
    if (data.length <= 0) {
      emptyResponse(res, data);
      return;
    }
    res.status(200).json({
      success: true,
      message: "Projects retrieved successfully.",
      dataLength: data.length,
      data,
    });
  } catch (err) {
    next(err);
  }
};

const getAProject: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await ProjectServices.getAProject(id);
    if (!data) {
      notUpdated(res, id, data);
      return;
    }
    res.status(200).json({
      success: true,
      message: "Project retrieved successfully.",
      data,
    });
  } catch (err) {
    next(err);
  }
};

const createProject: RequestHandler = async (req, res, next) => {
  try {
    const validateData = validateProject.parse(req.body);
    const data = await ProjectServices.createProject(validateData);
    res.status(201).json({
      success: true,
      message: "Project created successfully.",
      data,
    });
  } catch (err) {
    next(err);
  }
};

const updateAProject: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await ProjectServices.updateAProject(id, req.body);
    if (!data) {
      notUpdated(res, id, data);
      return;
    }
    res.status(200).json({
      success: true,
      message: "Project updated successfully.",
      data,
    });
  } catch (err) {
    next(err);
  }
};

const deleteAProject: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;

    const data = await ProjectServices.deleteAProject(id);
    if (!data) {
      notUpdated(res, id, data);
      return;
    }
    res.status(200).json({
      success: true,
      message: "Project deleted successfully.",
      data,
    });
  } catch (err) {
    next(err);
  }
};

export const ProjectController = {
  getProjects,
  getWebProjects,
  getAppProjects,
  getGraphicsProjects,
  getAProject,
  createProject,
  updateAProject,
  deleteAProject,
};
