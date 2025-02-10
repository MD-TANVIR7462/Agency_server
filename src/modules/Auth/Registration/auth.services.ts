import { TResistration } from "./auth.interface";
import { RegistrationModel } from "./auth.model";

const registerUser = async (data: TResistration) => {
  return await RegistrationModel.create(data);
};

const getAllUsers = async () => {
  return await RegistrationModel.find().select("-password -__v");
};

const getUserById = async (id: string) => {
  return await RegistrationModel.findById(id).select("-password -__v");
};

const updateUser = async (id: string, data: Partial<TResistration>) => {
  return await RegistrationModel.findByIdAndUpdate(id, { $set: data }, { new: true }).select("-password -__v");
};

const deleteUser = async (id: string) => {
  return await RegistrationModel.findByIdAndDelete(id);
};

export const AuthServices = {
  registerUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
