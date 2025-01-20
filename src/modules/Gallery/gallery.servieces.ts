import { TFaq } from "./gallery.interface";
import { FaqModel } from "./gallery.model";

const getFaqs = async () => {
  const result = await FaqModel.find({
    isDeleted: false,
    isActive: true,
  }).select("-__v -isDeleted");
  return result;
};

const getAFaq = async (id: string) => {
  const result = await FaqModel.findOne({
    _id: id,
    isDeleted: false,
    isActive: true,
  }).select("-__v -isDeleted");
  return result;
};

const createFaq = async (data: TFaq) => {
  const result = await FaqModel.create(data);
  return result;
};

const updateAFaq = async (id: string, data: Partial<TFaq>) => {
  const result = await FaqModel.findByIdAndUpdate(
    id,
    { $set: data },
    { new: true }
  );
  return result;
};

const deleteAFaq = async (id: string) => {
  const result = await FaqModel.findByIdAndUpdate(
    id,
    { $set: { isDeleted: true, isActive: false } },
    { new: true }
  );
  return result;
};

export const FaqServices = {
  getFaqs,
  getAFaq,
  createFaq,
  updateAFaq,
  deleteAFaq,
};
