import { TApplication } from "./application.interface";
import { ApplicationModel } from "./application.model";

const getApplications = async () => {
  const query: Record<string, any> = {
    isDeleted: false,
  };
  const result = await ApplicationModel.find(query).select("-isDeleted -__v");
  return result;
};

const getAnApplication = async (id: string) => {
  const result = await ApplicationModel.findOne({
    _id: id,
    isDeleted: false,
  }).select("-__v -isDeleted");
  return result;
};

const createApplication = async (data: TApplication) => {
  console.log(data);
  const result = await ApplicationModel.create(data);
  return result;
};

const selectApplication = async (id: string) => {
  const result = await ApplicationModel.findByIdAndUpdate(id, {
    $set: { isSelected: true,isPending:false,isRejected:false},
  });
};

const deleteAnApplication = async (id: string) => {
  const result = await ApplicationModel.findByIdAndDelete(id);
  return result;
};

export const ApplicationServices = {
  getApplications,
  getAnApplication,
  createApplication,
  deleteAnApplication,
};
