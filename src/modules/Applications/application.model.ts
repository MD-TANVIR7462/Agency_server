import { model, Schema, Types } from "mongoose";
import { TApplication } from "./application.interface";

const applicationSchema = new Schema<TApplication>(
  {
    positionId: {
      type: Types.ObjectId,
      ref: "Position",
      required: [true, "Position ID is required."],
    },
    fullName: {
      type: String,
      required: [true, "Full name is required."],
      trim: true,
      minlength: [3, "Full name must be at least 3 characters long."],
      maxlength: [100, "Full name cannot exceed 100 characters."],
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address."],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required."],
      trim: true,
    },
    linkedIn: {
      type: String,
      trim: true,
    },
    portfolio: {
      type: String,
      trim: true,
    },
    resumeUrl: {
      type: String,
      required: [true, "Resume URL is required."],
      trim: true,
      match: [
        /^(https?:\/\/)?([\w\d-]+\.)+[\w-]+(\/[^\s]*)?$/,
        "Please provide a valid resume URL.",
      ],
    },
    isPending: {
      type: Boolean,
      default: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    isSelected: {
      type: Boolean,
      default: false,
    },
    isRejected: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const ApplicationModel = model<TApplication>("Application", applicationSchema);
