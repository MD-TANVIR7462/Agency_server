import { Schema, model } from "mongoose";
import { TService } from "./service.interface";

const serviceSchema = new Schema<TService>(
  {
    title: {
      type: String,
      required: [true, "Title is required."],
      trim: true,
      minlength: [1, "Title cannot be empty."],
      maxlength: [25, "Title cannot exceed 25 characters."],
    },
    icon: {
      type: String,
      required: false,
      trim: true,
    },
    shortDes: {
      type: String,
      required: [true, "Short description is required."],
      trim: true,
      minlength: [1, "Short description cannot be empty."],
      maxlength: [150, "Short description cannot exceed 150 characters."],
    },
    fullDescription: {
      type: String,
      required: [true, "Full description is required."],
      trim: true,
      minlength: [1, "Full description cannot be empty."],
      maxlength: [260, "Full description cannot exceed 250 characters."],
    },
    features: {
      type: [String],
      required: [true, "Features are required."],
      minlength: [1, "At least one feature is required."],
    },
    technologies: {
      type: [String],
      required: [true, "Technologies are required."],
      minlength: [1, "At least one technology is required."],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Create the model
const ServiceModel = model<TService>("Service", serviceSchema);

export default ServiceModel;
