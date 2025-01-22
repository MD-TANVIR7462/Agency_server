import { model, Schema } from "mongoose";
import { TPosition } from "./position.interface";

const PositionSchema = new Schema<TPosition>(
  {
    applications: {
      type: [Schema.Types.ObjectId],
      required: false,
      default: [],
      ref: "Application",
    },
    title: {
      type: String,
      required: [true, "Title is required."],
      trim: true,
      minlength: [3, "Title must be at least 3 characters long."],
      maxlength: [50, "Title cannot exceed 50 characters."],
    },
    department: {
      type: String,
      required: [true, "Department is required."],
      trim: true,
      minlength: [3, "Department must be at least 3 characters long."],
      maxlength: [30, "Department cannot exceed 30 characters."],
    },
    location: {
      type: String,
      required: [true, "Location is required."],
      trim: true,
      minlength: [3, "Location must be at least 3 characters long."],
      maxlength: [30, "Location cannot exceed 30 characters."],
    },
    type: {
      type: String,
      enum: {
        values: ["Full-time", "Part-time", "Contract", "Internship"],
        message: "{VALUE} is not a valid job type.",
      },
      required: [true, "Job type is required."],
    },
    tags: {
      type: [String],
      required: [true, "At least one tag is required."],
      validate: {
        validator: (v: string[]) => v.length > 0,
        message: "Tags cannot be an empty array.",
      },
    },
    description: {
      type: String,
      required: [true, "Description is required."],
      trim: true,
      minlength: [10, "Description must be at least 10 characters long."],
      maxlength: [250, "Description cannot exceed 250 characters."],
    },
    requirements: {
      type: [String],
      required: [true, "Requirements are required."],
      validate: {
        validator: (v: string[]) => v.length > 0,
        message: "Requirements cannot be an empty array.",
      },
    },
    responsibilities: {
      type: [String],
      required: [true, "Responsibilities are required."],
      validate: {
        validator: (v: string[]) => v.length > 0,
        message: "Responsibilities cannot be an empty array.",
      },
    },
    benefits: {
      type: [String],
      required: [true, "Benefits are required."],
      validate: {
        validator: (v: string[]) => v.length > 0,
        message: "Benefits cannot be an empty array.",
      },
    },
    salary: {
      type: String,
      required: false,
      trim: true,
      default: "Negotiable",
    },
    isActive: {
      type: Boolean,
      default: true,
      required: false,
    },
    isDeleted: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  { timestamps: true }
);

export const PositionModel = model<TPosition>("Position", PositionSchema);
