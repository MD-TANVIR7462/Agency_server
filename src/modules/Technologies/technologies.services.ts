import { TTechnologies } from "./technologies.interface";
import { TechnologyModel } from "./technologies.model";

const getTechnology = async () => {
  const result = await TechnologyModel.find({
    isActive: true,
    isDeleted: false,
  });
  return result;
};
const getATechnology = async (id: string) => {
  const result = await TechnologyModel.findById(id);
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
const deleteATechnology = async (id: string, status: boolean) => {
  const result = await TechnologyModel.findByIdAndUpdate(
    id,
    { $set: { isDeleted: status } },
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
