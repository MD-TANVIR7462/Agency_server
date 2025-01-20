import { model, Schema } from "mongoose";
import { TFaq } from "./faq.interface";

const faqSchema = new Schema<TFaq>(
  {
    question: {
      type: String,
      trim: true,
      required: [true, "Question is Required"],
      minlength: [10, "Question must be at least 10 characters long"],
      maxlength: [120, "Question cannot exceed 120 characters."],
    },
    answer: {
      type: String,
      trim: true,
      required: [true, "Answer is required"],
      minlength: [10, "Answer must be al least 15 characters long"],
      maxlength: [250, "Answer cannot exceed 250 characters."],
    },
    isActive: {
      type: Boolean,
      required: false,
      default:true
    },
    isDeleted: {
      type: Boolean,
      required: false,
      default:false
    },
  },
  { timestamps: true }
);

export const FaqModel = model<TFaq>("Faq", faqSchema);
