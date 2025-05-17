import { TTechnologies } from "./technologies.interface";
import { TechnologyModel } from "./technologies.model";

const getTechnology = async (queryData: any) => {
  const query: Record<string, any> = {
    isDeleted: false,
  };
  if (queryData.isActive === "true") {
    query.isActive = true;
  }
  const result = await TechnologyModel.find(query).select("-__v");
  return result;
};
const getATechnology = async (id: string) => {
  const result = await TechnologyModel.findOne({
    _id: id,
    isActive: true,
    isDeleted: false,
  }).select("-__v");
  return result;
};
const createTechnology = async (data: TTechnologies) => {
  const result = await TechnologyModel.create(data);
  return result;
};
const updateATechnology = async (id: string, data: Partial<TTechnologies>) => {
  const result = await TechnologyModel.findByIdAndUpdate(id, { $set: data }, { new: true });
  return result;
};
const deleteATechnology = async (id: string) => {
  const result = await TechnologyModel.findByIdAndUpdate(
    id,
    { $set: { isDeleted: true, isActive: false } },
    { new: true }
  );
  return result;
};

export const TechnologyServices = {
  getTechnology,
  getATechnology,
  createTechnology,
  updateATechnology,
  deleteATechnology,
};
