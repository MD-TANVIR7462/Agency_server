import { TService } from "./service.interface";
import ServiceModel from "./service.model";

const getServices = async () => {
  const result = await ServiceModel.find({ isActive: true, isDeleted: false });
  return result;
};
const getAService = async (id: string) => {
  const result = await ServiceModel.findById(id);
  return result;
};
const createService = async (data: TService) => {
  const result = await ServiceModel.create(data);
  return result;
};
const updateAService = async (id: string, data: Partial<TService>) => {
  const result = await ServiceModel.findByIdAndUpdate(
    id,
    { $set: data },
    { new: true }
  );
  return result;
};
const deleteAService = async (id: string, status: boolean) => {
  const result = await ServiceModel.findByIdAndUpdate(
    id,
    { $set: { isDeleted: status } },
    { new: true }
  );
  return result;
};

export const ServiceServices = {
  getServices,
  getAService,
  createService,
  updateAService,
  deleteAService,
};
