import { model, Schema } from "mongoose";
import { TSettings } from "./settings.interface";

const SettingsSchema = new Schema<TSettings>({
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
    match: /^https?:\/\/(www\.)?facebook\.com\/[A-Za-z0-9._-]+$/,
    required: false,
    default: "",
  },
  twitter: {
    type: String,
    match: [/^https?:\/\/(www\.)?x\.com\/.+$/, "Invalid Twitter URL."],
    required: false,
    default: "",
  },
  linkedin: {
    type: String,
    match: /^https?:\/\/(www\.)?linkedin\.com\/company\/[A-Za-z0-9._-]+$/,
    required: false,
    default: "",
  },
  instagram: {
    type: String,
    match: /^https?:\/\/(www\.)?instagram\.com\/[A-Za-z0-9._-]+$/,
    required: false,
    default: "",
  },
},{timestamps:true});

export const SettingsModel = model<TSettings>("Settings", SettingsSchema);
