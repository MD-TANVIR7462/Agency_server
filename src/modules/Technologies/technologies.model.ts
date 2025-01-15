import { Schema, model } from "mongoose";
import { TTechnologies } from "./technologies.interface";

const technologySchema = new Schema<TTechnologies>(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
      trim: true,
      minlength: [1, "Name cannot be empty."],
      maxlength: [30, "Name cannot exceed 30 characters."],
    },
    tech: {
      type: [String],
      required: [true, "Technologies are required."],
      validate: {
        validator: (value: string[]) => value.length > 0,
        message: "At least one technology is required.",
      },
    },
    gradient: {
      type: String,
      required: [true, "Gradient is required."],
      trim: true,
      minlength: [1, "Gradient cannot be empty."],
      maxlength: [30, "Gradient cannot exceed 30 characters."],
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

export const TechnologyModel = model<TTechnologies>("Technology", technologySchema);

