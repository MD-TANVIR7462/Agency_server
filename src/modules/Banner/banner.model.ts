import { Schema, model } from "mongoose";
import { TBanner } from "./banner.interface";

const bannerSchema = new Schema<TBanner>(
  {
    title1: {
      type: String,
      required: [true, "Title 1 is required."],
      trim: true,
      maxlength: [17, "Title 1 cannot exceed 100 characters."],
    },
    title2: {
      type: String,
      required: [true, "Title 2 is required."],
      trim: true,
      maxlength: [16, "Title 2 cannot exceed 100 characters."],
    },
    subtext: {
      type: String,
      required: [true, "Subtext is required."],
      trim: true,
      maxlength: [180, "Subtext cannot exceed 250 characters."],
    },
    isActive: {
      type: Boolean,
      required: false,
      default: true,
    },
    activeBanner: {
      type: Number,
      required: false,
      default: 1,
    },
    img_url: {
      type: String,
      required: [true, "Image URL is required."],
      trim: true,
      validate: {
        validator: (value: string) => {
          try {
            new URL(value); // This ensures it's a valid URL
            return true;
          } catch {
            return false;
          }
        },
        message: "Please provide a valid URL.",
      },
    },
  },
  { timestamps: true }
);

export const BannerModel = model<TBanner>("Banner", bannerSchema);
