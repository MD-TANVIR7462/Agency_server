import { TContact } from "./contact.interface";
import { ContactModel } from "./contact.model";

const getContact = async () => {
  const result = await ContactModel.find({
    isDeleted: false,
    isActive: true,
  }).select("-__v -isDeleted");
  return result;
};

const createContact = async (data: TContact) => {
  const validate = await ContactModel.find();
  if (validate.length > 0) {
    return null;
  }
  const result = await ContactModel.create(data);
  return result;
};

const updateAContact = async (id: string, data: Partial<TContact>) => {
  const result = await ContactModel.findByIdAndUpdate(
    id,
    { $set: data },
    { new: true }
  );
  return result;
};

export const ContactServices = {
  getContact,
  createContact,
  updateAContact,
};
