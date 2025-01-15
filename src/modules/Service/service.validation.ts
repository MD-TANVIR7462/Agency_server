import { z } from "zod";

// Validation schema for creating a service
export const validateService = z
  .object({
    title: z
      .string()
      .min(1, "Title cannot be empty.")
      .max(25, "Title cannot exceed 25 characters."),
    shortDes: z
      .string()
      .min(1, "Short description cannot be empty.")
      .max(150, "Short description cannot exceed 150 characters."),
    fullDes: z
      .string()
      .min(1, "Full description cannot be empty.")
      .max(260, "Full description cannot exceed 260 characters."),
    features: z.array(z.string()).min(1, "At least one feature is required."),
    technologies: z
      .array(z.string())
      .min(1, "At least one technology is required."),
    isActive: z.boolean().optional().default(true),
    isDeleted: z.boolean().optional().default(false),
  })
  .strict();

// Validation schema for updating a service (partial)
export const validateUpdateService = z
  .object({
    title: z
      .string()
      .min(1, "Title cannot be empty.")
      .max(25, "Title cannot exceed 25 characters.")
      .optional(),
    shortDes: z
      .string()
      .min(1, "Short description cannot be empty.")
      .max(150, "Short description cannot exceed 150 characters.")
      .optional(),
    fullDes: z
      .string()
      .min(1, "Full description cannot be empty.")
      .max(260, "Full description cannot exceed 260 characters.")
      .optional(),
    features: z
      .array(z.string())
      .min(1, "At least one feature is required.")
      .optional(),
    technologies: z
      .array(z.string())
      .min(1, "At least one technology is required.")
      .optional(),
    isActive: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
  })
  .strict();
