import { Schema, model } from "mongoose";
import { TResistration } from "./auth.interface";
import bcrypt from "bcrypt";
import { envConfig } from "../../../utils/config";

const registrationSchema = new Schema<TResistration>(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
      trim: true,
      maxlength: [100, "Name cannot exceed 100 characters."],
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address."],
    },
    password: {
      type: String,
      required: [true, "Password is required."],
      minlength: [6, "Password must be at least 6 characters long."],
      maxlength: [20, "Password can not be more then 20 charecters"],

    },
    role: {
      type: String,
      required: [true, "Role is required."],
      enum: ["admin", "superadmin"],
    },
    location: {
      type: String,
      trim: true,
      maxlength: [200, "Location cannot exceed 200 characters."],
      default: null,
    },
    phone: {
      type: String,
      trim: true,
      match: [/^\d{10,15}$/, "Please provide a valid phone number."],
      default: null,
    },
    img: {
      type: String,
      required: [true, "Image URL is required."],
      trim: true,
      validate: {
        validator: (value: string) => {
          try {
            new URL(value); // Valid URL check
            return true;
          } catch {
            return false;
          }
        },
        message: "Please provide a valid image URL.",
      },
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
    needPasswordChange: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  { timestamps: true }
);

//pre hook for hash the password......
registrationSchema.pre("save", async function (next) {
  const user = this;
  user.password = await bcrypt.hash(user.password, Number(envConfig.bcryptRound));
  next();
});

//post hook for skip the password field for the frontend
registrationSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

export const RegistrationModel = model<TResistration>("user", registrationSchema);
