import { RequestHandler } from "express";
import { TeamServices } from "./team.services";
import { emptyResponse, notUpdated } from "../../utils/Respons";
import { validateTeam, validateUpdateTeam } from "./team.validation";

const getTeam: RequestHandler = async (req, res, next) => {
  try {
    const data = await TeamServices.getTeam();
    if (data.length <= 0) {
      emptyResponse(res, data);
      return;
    }
    res.status(200).json({
      success: true,
      message: "Team details retrieve successfully.",
      dataLength: data.length,
      data,
    });
  } catch (err) {
    next(err);
  }
};

const getATeam: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await TeamServices.getATeam(id);
    if (!data) {
      emptyResponse(res, data);
      return;
    }
    res.status(200).json({
      success: true,
      message: "Member retrieve successfully.",
      data,
    });
  } catch (err) {
    next(err);
  }
};

const createTeam: RequestHandler = async (req, res, next) => {
  try {
    const validateData = validateTeam.parse(req.body);
    const data = await TeamServices.createTeam(validateData);
    res.status(201).json({
      success: true,
      message: "Member created successfully",
      data,
    });
  } catch (err) {
    next(err);
  }
};
const updateATeam: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const validateData = validateUpdateTeam.parse(req.body);
    const data = await TeamServices.updateATeam(id, validateData);
    if (!data) {
      res.status(400).json({
        success: false,
        message: `Member not updated, make sure the id:${id} is correct. `,
        data,
      });
    }
    res.status(200).json({
      success: true,
      message: "Member updated successfully",
      data,
    });
  } catch (err) {
    next(err);
  }
};
const deleteATeam: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;

    const data = await TeamServices.deleteATeam(
      id,

    );
    if (!data) {
      notUpdated(res, id, data);
    }
    res.status(200).json({
      success: true,
      message: "Member deleted successfully",
      data,
    });
  } catch (err) {
    next(err);
  }
};

export const TeamController = {
  getTeam,
  getATeam,
  createTeam,
  updateATeam,
  deleteATeam,
};
