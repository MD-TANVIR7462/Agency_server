import { Schema, model } from "mongoose";
import { TTeam } from "./team.interface";

const teamSchema = new Schema<TTeam>(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
      trim: true,
      minlength: [3, "Name must be at least 3 characters long."],
      maxlength: [50, "Name cannot exceed 50 characters."],
    },
    role: {
      type: String,
      required: [true, "Role is required."],
      trim: true,
      minlength: [3, "Role must be at least 3 characters long."],
      maxlength: [30, "Role cannot exceed 30 characters."],
    },
    team: {
      type: [String],
      required: [true, "Team is required."],
      validate: {
        validator: (arr: string[]) => arr.length > 0,
        message: "Team array must have at least one member.",
      },
    },
    image: {
      type: String,
      required: [true, "Image URL is required."],
      trim: true,
    },
    bio: {
      type: String,
      required: [true, "Bio is required."],
      trim: true,
      minlength: [10, "Bio must be at least 10 characters long."],
      maxlength: [300, "Bio cannot exceed 300 characters."],
    },
    social: {
      linkedin: {
        type: String,
        required: false,
        trim: true,
        default: "",
        match: [
          /^https?:\/\/(www\.)?linkedin\.com\/.+$/,
          "Invalid LinkedIn URL.",
        ],
      },
      twitter: {
        type: String,
        required: false,
        trim: true,
        default: "",
        match: [/^https?:\/\/(www\.)?x\.com\/.+$/, "Invalid Twitter URL."],
      },
      facebook: {
        type: String,
        required: false,
        trim: true,
        default: "",
        match: [
          /^https?:\/\/(www\.)?facebook\.com\/.+$/,
          "Invalid Facebook URL.",
        ],
      },
      github: {
        type: String,
        required: false,
        trim: true,
        default: "",
        match: [/^https?:\/\/(www\.)?github\.com\/.+$/, "Invalid GitHub URL."],
      },
    },
    skills: {
      type: [String],
      required: [true, "Skills are required."],
      validate: {
        validator: (arr: string[]) => arr.length > 0,
        message: "Skills array must have at least one skill.",
      },
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

export const TeamModel = model("Team", teamSchema);
