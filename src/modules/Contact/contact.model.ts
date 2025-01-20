import { model, Schema } from "mongoose";
import { TContact } from "./contact.interface";
const ContactSchema = new Schema<TContact>({
  email: {
    type: String,
    required: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 100,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
},{timestamps:true});

export const ContactModel = model<TContact>("Contact", ContactSchema);
