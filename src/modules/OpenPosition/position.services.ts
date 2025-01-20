import { TPosition } from "./position.interface";
import { PositionModel } from "./position.model";

const getPositions = async () => {
  const query: Record<string, any> = {
    isActive: true,
    isDeleted: false,
  };
  const result = await PositionModel.find(query).select("-isDeleted -__v");
  return result;
};

const getAPosition = async (id: string) => {
  const result = await PositionModel.findOne({
    _id: id,
    isActive: true,
    isDeleted: false,
  }).select("-__v -isDeleted");
  return result;
};

const createPosition = async (data: TPosition) => {
  const result = await PositionModel.create(data);
  return result;
};

const updateAPosition = async (id: string, data: Partial<TPosition>) => {
  const result = await PositionModel.findByIdAndUpdate(
    id,
    { $set: data },
    { new: true }
  );
  return result;
};

const deleteAPosition = async (id: string) => {
  const result = await PositionModel.findByIdAndDelete(id);
  return result;
};

export const PositionServices = {
  getPositions,
  getAPosition,
  createPosition,
  updateAPosition,
  deleteAPosition,
};
