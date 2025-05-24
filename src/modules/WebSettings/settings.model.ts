import { model, Schema } from "mongoose";
import { TSettings } from "./settings.interface";

const isValidUrl = (value: string) => {
  if (!value) return true; // allow empty strings
  try {
    new URL(value);
    return true;
  } catch (_) {
    return false;
  }
};

const SettingsSchema = new Schema<TSettings>(
  {
    companyName: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 25,
    },
    tagline: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 150,
    },
    facebook: {
      type: String,
      validate: [isValidUrl, "Invalid URL format."],
      default: "",
    },
    logo: {
      type: String,
      validate: [isValidUrl, "Invalid URL format."],
      default: "",
    },
    twitter: {
      type: String,
      validate: [isValidUrl, "Invalid URL format."],
      default: "",
    },
    linkedin: {
      type: String,
      validate: [isValidUrl, "Invalid URL format."],
      default: "",
    },
    instagram: {
      type: String,
      validate: [isValidUrl, "Invalid URL format."],
      default: "",
    },
  },
  { timestamps: true }
);

export const SettingsModel = model<TSettings>("Settings", SettingsSchema);
