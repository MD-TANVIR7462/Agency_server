import { TFaq } from "./faq.interface";
import { FaqModel } from "./faq.model";

const getFaqs = async (query : any ) => {
  const queryData: Record<string, any> = {
    isDeleted: false,
  };

  if (query.isActive) {
    queryData.isActive = query.isActive;
  }
  const result = await FaqModel.find(queryData).select("-__v -isDeleted");
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
  const result = await FaqModel.findByIdAndUpdate(id, { $set: data }, { new: true });
  return result;
};

const deleteAFaq = async (id: string) => {
  const result = await FaqModel.findByIdAndUpdate(id, { $set: { isDeleted: true, isActive: false } }, { new: true });
  return result;
};

export const FaqServices = {
  getFaqs,
  getAFaq,
  createFaq,
  updateAFaq,
  deleteAFaq,
};
