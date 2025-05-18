import { TTeam } from "./team.interface";
import { TeamModel } from "./team.model";

const getTeam = async (queryData: any) => {
  const query: Record<string, any> = {
    isDeleted: false,
  };
  if (queryData.isActive === "true") {
    query.isActive = true;
  }

  const result = await TeamModel.find(query).select("-__v");
  return result;
};
const getATeam = async (id: string) => {
  const result = await TeamModel.findOne({
    _id: id,
    isActive: true,
    isDeleted: false,
  }).select("-__v");
  return result;
};
const createTeam = async (data: TTeam) => {
  const result = await TeamModel.create(data);
  return result;
};
const updateATeam = async (id: string, data: Partial<TTeam>) => {
  const result = await TeamModel.findByIdAndUpdate(id, { $set: data }, { new: true });
  return result;
};
const deleteATeam = async (id: string) => {
  const result = await TeamModel.findByIdAndUpdate(id, { $set: { isDeleted: true, isActive: false } }, { new: true });
  return result;
};

export const TeamServices = {
  getTeam,
  getATeam,
  createTeam,
  updateATeam,
  deleteATeam,
};
