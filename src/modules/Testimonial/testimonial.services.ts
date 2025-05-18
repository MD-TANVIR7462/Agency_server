import { TTestimonial } from "./testimonial.interface";
import { TestimonialModel } from "./testimonial.model";

const getTestimonial = async (status?: string) => {
  const query: Record<string, any> = {
    isDeleted: false,
  };
  if (status !== undefined) {
    query.isActive = status;
  }
  const result = await TestimonialModel.find(query).select("-__v -isDeleted");
  return result;
};

const getATestimonial = async (id: string) => {
  const result = await TestimonialModel.findOne({
    _id: id,
    isActive: true,
    isDeleted: false,
  }).select("-__v -isDeleted");
  return result;
};
const createTestimonial = async (data: TTestimonial) => {
  const result = await TestimonialModel.create(data);
  return result;
};
const updateATestimonial = async (id: string, data: Partial<TTestimonial>) => {
  const result = await TestimonialModel.findByIdAndUpdate(id, { $set: data }, { new: true });
  return result;
};
const deleteATestimonial = async (id: string) => {
  const result = await TestimonialModel.findByIdAndUpdate(
    id,
    { $set: { isDeleted: true, isActive: false } },
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
