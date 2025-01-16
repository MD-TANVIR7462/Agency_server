import { TTestimonial } from "./testimonial.interface";
import { TestimonialModel } from "./testimonial.model";

const getTestimonial = async () => {
  const result = await TestimonialModel.find({
    isActive: true,
    isDeleted: false,
  }).select("-__v");
  return result;
};
const getATestimonial = async (id: string) => {
  const result = await TestimonialModel.findById(id).select("-__v");
  return result;
};
const createTestimonial = async (data: TTestimonial) => {
  const result = await TestimonialModel.create(data);
  return result;
};
const updateATestimonial = async (id: string, status: boolean) => {
  const result = await TestimonialModel.findByIdAndUpdate(
    id,
    { $set: { isActive: status } },
    { new: true }
  );
  return result;
};
const deleteATestimonial = async (id: string) => {
  const result = await TestimonialModel.findByIdAndUpdate(
    id,
    { $set: { isDeleted: true } },
    { new: true }
  );
  return result;
};

export const TestimonialServices = {
  getTestimonial,
  getATestimonial,
  createTestimonial,
  updateATestimonial,
  deleteATestimonial,
};
