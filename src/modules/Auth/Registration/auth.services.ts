import { envConfig } from "../../../utils/config";
import { jwtVerify } from "../../../utils/jwtVerify";
import { TResistration } from "./auth.interface";
import { RegistrationModel } from "./auth.model";

const registerUser = async (data: TResistration) => {
  return await RegistrationModel.create(data);
};

const getAllUsers = async () => {
  return await RegistrationModel.find().select("-password -__v").sort({ createdAt: -1 });
};

// const getUserById = async (id: string) => {
//   return await RegistrationModel.findById(id).select("-password -__v");
// };

const updateUser = async (id: string, data: Partial<TResistration>) => {
  return await RegistrationModel.findByIdAndUpdate(id, { $set: data }, { new: true }).select("-password -__v");
};

const deleteUser = async (id: string) => {
  return await RegistrationModel.findByIdAndDelete(id);
};
const getMe = async (token: string) => {
  const decoded = jwtVerify(token, envConfig.accessSecret as string);

  const { email, role } = decoded;

  return await RegistrationModel.find({ email, role }).select("-password -__v");
};

export const AuthServices = {
  registerUser,
  getAllUsers,
  // getUserById,
  updateUser,
  deleteUser,
  getMe,
};
