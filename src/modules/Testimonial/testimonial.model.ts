import { Schema, model } from "mongoose";
import { TTestimonial } from "./testimonial.interface";


const testimonialSchema = new Schema<TTestimonial>(
  {
    content: {
      type: String,
      required: [true, "Content is required."],
      minlength: [20, "Content must be at least 20 characters long."],
      maxlength: [160, "Content cannot exceed 160 characters."],
    },
    author: {
      type: String,
      required: [true, "Author is required."],
      minlength: [7, "Author name must be at least 7 characters long."],
      maxlength: [27, "Name cannot exceed 27 characters."],
    },
    role: {
      type: String,
      required: false,
      minlength: [5, "Role must be at least 5 characters long."],
      maxlength: [35, "Role cannot exceed 35 characters."],
    },
    image: {
      type: String,
      required: [true, "Image URL is required."],
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const TestimonialModel = model("Testimonial", testimonialSchema);
