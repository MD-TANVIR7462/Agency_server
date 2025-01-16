import { RequestHandler } from "express";
import { StoryServices } from "./story.services";
import { emptyResponse } from "../../utils/emptyRespons";

const getStory: RequestHandler = async (req, res, next) => {
  try {
    const data = await StoryServices.getStory();
    if (data.length <= 0) {
      emptyResponse(res, data);
      return;
    }
    res.status(200).json({
      success: true,
      message: "Story retrieve successfully",
      data,
    });
  } catch (err) {
    next(err);
  }
};
const creteStory: RequestHandler = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};
const updateStory: RequestHandler = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

export const StoryControllers = {
  getStory,
  creteStory,
  updateStory,
};
