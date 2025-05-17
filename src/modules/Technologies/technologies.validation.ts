import { z } from "zod";

export const validateTechnology = z
  .object({
    name: z.string().trim().min(1, "Name is required.").max(30, "Name cannot exceed 30 characters."),
    icon: z.string().optional(),
    tech: z
      .array(z.string().trim().min(1, "Technology name cannot be empty."))
      .min(1, "At least one technology is required."),
    gradient: z.string().trim().min(1, "Gradient is required.").max(30, "Gradient cannot exceed 30 characters."),
    isActive: z.boolean().optional().default(true),
    isDeleted: z.boolean().optional().default(false),
  })
  .strict();

export const validateUpdateTechnology = validateTechnology.partial();
