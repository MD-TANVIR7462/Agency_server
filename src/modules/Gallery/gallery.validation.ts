import { z } from "zod";

export const validateGallery = z.object({
  caption: z
    .string()
    .min(10, "Caption must be at least 10 characters")
    .max(60, "Caption Cannot exceed 60 characters"),
  url: z.string().url("Link must be a valid URL"),
  isActive: z.boolean().default(true).optional(),
  isDeleted: z.boolean().default(false).optional(),
}).strict();
export const validateUpdateGallery = validateGallery.partial();
