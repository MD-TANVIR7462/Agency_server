import { TGallery } from "./gallery.interface";
import { GalleryModel } from "./gallery.model";

const getGallery = async () => {
  const result = await GalleryModel.find({
    isDeleted: false,
    isActive: true,
  }).select("-__v -isDeleted");
  return result;
};

const getAGallery = async (id: string) => {
  const result = await GalleryModel.findOne({
    _id: id,
    isDeleted: false,
    isActive: true,
  }).select("-__v -isDeleted");
  return result;
};

const createGallery = async (data: TGallery) => {
  const result = await GalleryModel.create(data);
  return result;
};

const updateAGallery = async (id: string, data: Partial<TGallery>) => {
  const result = await GalleryModel.findByIdAndUpdate(
    id,
    { $set: data },
    { new: true }
  );
  return result;
};

const deleteAGallery = async (id: string) => {
  const result = await GalleryModel.findByIdAndUpdate(
    id,
    { $set: { isActive: false, isDeleted: true } },
    { new: true }
  );
  return result;
};

export const GalleryServices = {
  getGallery,
  getAGallery,
  createGallery,
  updateAGallery,
  deleteAGallery,
};
