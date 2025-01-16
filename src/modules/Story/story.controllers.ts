import { RequestHandler } from "express";
import { StoryServices } from "./story.services";
import { emptyResponse, notUpdated } from "../../utils/Respons";
import { validateStory, validateUpdateStory } from "./story.validation";

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

const createStory: RequestHandler = async (req, res, next) => {
  try {
    const validateData = validateStory.parse(req.body);
    const data = await StoryServices.createStory(validateData);
    res.status(200).json({
      success: true,
      message: "Story created successfully",
      data,
    });
  } catch (err) {
    next(err);
  }
};

const updateStory: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const validateData = validateUpdateStory.parse(req.body);
    const data = await StoryServices.updateStory(id, validateData);
    if (!data) {
      notUpdated(res, id, data);
    }
    res.status(200).json({
      success: true,
      message: "Story created successfully",
      data,
    });
  } catch (err) {
    next(err);
  }
};

export const StoryControllers = {
  getStory,
  createStory,
  updateStory,
};
