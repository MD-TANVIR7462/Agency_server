import { z } from "zod";

export const validateApplication = z.object({
  positionId: z
    .string()
    .regex(/^[0-9a-fA-F]{24}$/, "Position ID must be a valid ObjectId."),
  fullName: z
    .string()
    .min(3, "Full name must be at least 3 characters long.")
    .max(50, "Full name cannot exceed 50 characters.")
    .trim()
    .nonempty("Full name is required."),
  email: z
    .string()
    .email("Please provide a valid email address.")
    .trim()
    .nonempty("Email is required."),
  phone: z
    .string()
    .regex(/^(\+?[1-9]\d{1,14})?(\d{7,14})$/, "Please provide a valid phone number.")
    .trim()
    .nonempty("Phone number is required."),
  linkedIn: z.string().url("Please provide a valid LinkedIn URL.").optional(),
  portfolio: z.string().url("Please provide a valid portfolio URL.").optional(),
  resumeUrl: z
    .string()
    .url("Please provide a valid resume URL.")
    .trim()
    .nonempty("Resume URL is required."),
  isPending: z.boolean().optional().default(true),
  isDeleted: z.boolean().optional().default(false),
  isSelected: z.boolean().optional().default(false),
  isRejected: z.boolean().optional().default(false),
});

export const validateUpdateApplication = validateApplication.partial();
