import { TTechnologies } from "./technologies.interface";
import { TechnologyModel } from "./technologies.model";

const getTechnology = async () => {
  const result = await TechnologyModel.find({
    isActive: true,
    isDeleted: false,
  }).select("-__v");
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
  const result = await TechnologyModel.findByIdAndUpdate(
    id,
    { $set: data },
    { new: true }
  );
  return result;
};
const deleteATechnology = async (id: string) => {
  const result = await TechnologyModel.findByIdAndUpdate(
    id,
    { $set: { isDeleted: true } },
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
