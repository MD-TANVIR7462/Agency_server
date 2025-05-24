import { TSettings } from "./settings.interface";
import { SettingsModel } from "./settings.model";

const getSettings = async () => {
  const result = await SettingsModel.find().select("-__v");
  return result;
};

const createSettings = async (data: TSettings) => {
  const validate = await SettingsModel.find();
  if (validate.length > 0) {
    return null;
  }
  const result = await SettingsModel.create(data);
  return result;
};

const updateASettings = async (id: string, data: Partial<TSettings>) => {
  const result = await SettingsModel.findByIdAndUpdate(
    id,
    { $set: data },
    { new: true }
  );
  return result;
};

export const SettingsServices = {
  getSettings,
  createSettings,
  updateASettings,
};
