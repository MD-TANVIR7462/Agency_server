import { TBanner } from "./banner.interface";
import { BannerModel } from "./banner.model";

const createBanner = async (data: TBanner) => {
  const result = await BannerModel.create(data);
  return result;
};

const getBanner = async () => {
  const result = await BannerModel.find({}).select("-updatedAt -createdAt -__v ");
  return result;
};

const updateBanner = async (id: string, data: Partial<TBanner>) => {
  const result = await BannerModel.findByIdAndUpdate(
    id,
    { $set: data },
    { new: true }
  );


  return result;
};

export const BannerServices = {
  createBanner,
  getBanner,
  updateBanner,
};
