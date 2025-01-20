import { model, Schema } from "mongoose";
import { TGallery } from "./gallery.interface";

const gallerySchema = new Schema<TGallery>({
  url: {
    type: String,
    required: [true, "Image URL required"],
    validate: {
      validator: (value: string) =>
        /^https?:\/\/[^\s$.?#].[^\s]*$/i.test(value),
      message: "Image must be a valid URL.",
    },
  },
  caption: {
    type: String,
    required: [true, "Caption required"],
    trim: true,
    minlength: [10, "Caption must be at least 10 characters"],
    maxlength: [60, "Caption Cannot exceed 60 characters"],
  },
  isActive: {
    type: Boolean,
    required: false,
    default: true,
  },
  isDeleted: {
    type: Boolean,
    required: false,
    default: false,
  },
},{timestamps:true});

export const GalleryModel = model<TGallery>("Gallery", gallerySchema);
