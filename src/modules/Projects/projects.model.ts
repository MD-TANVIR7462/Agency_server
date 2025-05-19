import { Schema, model } from "mongoose";
import { TProject } from "./projects.interface";

const projectSchema = new Schema<TProject>(
  {
    title: {
      type: String,
      trim: true,
      required: [true, "Title is required."],
      minlength: [3, "Title must be at least 3 characters long."],
      maxlength: [100, "Title cannot exceed 100 characters."],
    },
    description: {
      type: String,
      trim: true,
      required: [true, "description is required."],
      minlength: [15, "description must be at least 15 characters long."],
      maxlength: [220, "description cannot exceed 220 characters."],
    },
    category: {
      type: String,
      required: [true, "Category is required."],
      minlength: [3, "Category must be at least 3 characters long."],
      maxlength: [50, "Category cannot exceed 50 characters."],
    },
    image: {
      type: String,
      required: [true, "Image URL is required."],
      validate: {
        validator: (value: string) =>
          /^https?:\/\/[^\s$.?#].[^\s]*$/i.test(value),
        message: "Image must be a valid URL.",
      },
    },
    link: {
      type: String,
      required: [true, "Project link is required."],
      validate: {
        validator: (value: string) =>
          /^https?:\/\/[^\s$.?#].[^\s]*$/i.test(value),
        message: "Link must be a valid URL.",
      },
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Export Mongoose Model
export const ProjectModel = model<TProject>("Project", projectSchema);
