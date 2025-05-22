import { TPosition } from "./position.interface";
import { PositionModel } from "./position.model";

const getPositions = async (queryData: any) => {
  const query: Record<string, any> = {
    isDeleted: false,
  };
  if (queryData.isActive) {
    query.isActive = queryData.isActive;
  }
  const result = await PositionModel.find(query)
    .select("-isDeleted -__v")
    .populate("applications")
    .sort({ createdAt: -1 });
  return result;
};

const getAPosition = async (id: string, queryData?: any) => {
  const query: Record<string, any> = {
    _id: id,
    isDeleted: false,
  };
  if (queryData.isActive) {
    query.isActive = queryData.isActive;
  }
  const result = await PositionModel.findOne(query)

    .select("-__v -isDeleted")
    .populate("applications");
  return result;
};

const createPosition = async (data: TPosition) => {
  const result = await PositionModel.create(data);
  return result;
};

const updateAPosition = async (id: string, data: Partial<TPosition>, session?: unknown) => {
  const result = await PositionModel.findByIdAndUpdate(id, { $set: data }, { new: true });
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
