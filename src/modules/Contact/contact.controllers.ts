import { RequestHandler } from "express";
import { emptyResponse, notUpdated } from "../../utils/Respons";
import { ContactServices } from "./contact.services";
import { validateContact, validateUpdateContact } from "./contact.validation";


const getContact: RequestHandler = async (req, res, next) => {
  try {
    const data = await ContactServices.getContact();
    if (data.length <= 0) {
      emptyResponse(res, data);
      return;
    }
    res.status(200).json({
      success: true,
      message: "Contact's retrieved successfully.",
      dataLength: data.length,
      data,
    });
  } catch (err) {
    next(err);
  }
};


const createContact: RequestHandler = async (req, res, next) => {
  try {
    const validateData = validateContact.parse(req.body);
    const data = await ContactServices.createContact(validateData);
    res.status(201).json({
      success: true,
      message: "Contact created successfully.",
      data,
    });
  } catch (err) {
    next(err);
  }
};

const updateAContact: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const validateData = validateUpdateContact.parse(req.body);
    const data = await ContactServices.updateAContact(id, validateData);
    if (!data) {
      notUpdated(res, id, data);
      return;
    }
    res.status(200).json({
      success: true,
      message: "Contact updated successfully.",
      data,
    });
  } catch (err) {
    next(err);
  }
};


export const ContactController = {
  getContact,
  createContact,
  updateAContact,
};
