import { RequestHandler } from "express";
import { emptyResponse, notUpdated } from "../../utils/Respons";
import { validateFaq, validateUpdateFaq } from "./gallery.validation";
import { FaqServices } from "./gallery.servieces";

const getFaq: RequestHandler = async (req, res, next) => {
  try {
    const data = await FaqServices.getFaqs();
    if (data.length <= 0) {
      emptyResponse(res, data);
      return;
    }
    res.status(200).json({
      success: true,
      message: "Faq's retrieved successfully.",
      dataLength: data.length,
      data,
    });
  } catch (err) {
    next(err);
  }
};

const getAFaq: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await FaqServices.getAFaq(id);
    if (!data) {
      notUpdated(res, id, data);
      return;
    }
    res.status(200).json({
      success: true,
      message: "Faq retrieved successfully.",
      data,
    });
  } catch (err) {
    next(err);
  }
};

const createFaq: RequestHandler = async (req, res, next) => {
  try {
    const validateData = validateFaq.parse(req.body);
    const data = await FaqServices.createFaq(validateData);
    res.status(201).json({
      success: true,
      message: "Faq created successfully.",
      data,
    });
  } catch (err) {
    next(err);
  }
};

const updateAFaq: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const validateData = validateUpdateFaq.parse(req.body);
    const data = await FaqServices.updateAFaq(id, validateData);
    if (!data) {
      notUpdated(res, id, data);
      return;
    }
    res.status(200).json({
      success: true,
      message: "Faq updated successfully.",
      data,
    });
  } catch (err) {
    next(err);
  }
};

const deleteAFaq: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await FaqServices.deleteAFaq(id);
    if (!data) {
      notUpdated(res, id, data);
      return;
    }
    res.status(200).json({
      success: true,
      message: "Faq deleted successfully.",
      data,
    });
  } catch (err) {
    next(err);
  }
};

export const FaqController = {
  getFaq,
  getAFaq,
  createFaq,
  updateAFaq,
  deleteAFaq,
};
