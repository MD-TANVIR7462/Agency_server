import { Schema, model } from "mongoose";

const storySchema = new Schema(
  {
    stats: {
      years: {
        type: String,
        required: [true, "Years are required."],
        trim: true,
        minlength: [1, "Years must have at least 1 character."],
        maxlength: [4, "Years cannot exceed 4 characters."],
      },
      projects: {
        type: String,
        required: [true, "Projects are required."],
        trim: true,
        minlength: [1, "Years must have at least 1 character."],
        maxlength: [4, "Years cannot exceed 4 characters."],
      },
      teamSize: {
        type: String,
        required: [true, "Team size is required."],
        trim: true,
        minlength: [1, "Years must have at least 1 character."],
        maxlength: [4, "Years cannot exceed 4 characters."],
      },
      satisfaction: {
        type: String,
        required: [true, "Satisfaction percentage is required."],
        trim: true,
        minlength: [1, "Years must have at least 1 character."],
        maxlength: [4, "Years cannot exceed 4 characters."],
      },
    },
    story: {
      title: {
        type: String,
        required: [true, "Story title is required."],
        trim: true,
        minlength: [7, "Title must have at least 7 character."],
        maxlength: [18, "Title cannot exceed 18 characters."],
      },
      content: {
        type: String,
        required: [true, "Story content is required."],
        trim: true,
        minlength: [90, "Title must have at least 90 character."],
        maxlength: [280, "Content cannot exceed 280 characters."],
      },
    },
    mission: {
      title: {
        type: String,
        required: [true, "Mission title is required."],
        trim: true,
        minlength: [7, "Title must have at least 7 character."],
        maxlength: [18, "Title cannot exceed 18 characters."],
      },
      content: {
        type: String,
        required: [true, "Mission content is required."],
        trim: true,
        minlength: [90, "Title must have at least 90 character."],
        maxlength: [280, "Content cannot exceed 280 characters."],
      },
    },
    vision: {
      title: {
        type: String,
        required: [true, "Vision title is required."],
        trim: true,
        minlength: [7, "Title must have at least 7 character."],
        maxlength: [18, "Title cannot exceed 18 characters."],
      },
      content: {
        type: String,
        required: [true, "Vision content is required."],
        trim: true,
        minlength: [90, "Years must have at least 90 character."],
        maxlength: [280, "Content cannot exceed 280 characters."],
      },
    },
  },
  { timestamps: true }
);

export const StoryModel = model("Story", storySchema);
