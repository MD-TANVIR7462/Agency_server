import { z } from "zod";

// Zod Validation Schema for Testimonial
export const validateTestimonial = z
  .object({
    content: z
      .string()
      .min(2, "Content must be at least 20 characters long.")
      .max(160, "Content cannot exceed 160 characters."),

    author: z
      .string()
      .min(2, "Author name must be at least 7 characters long.")
      .max(27, "Author name cannot exceed 27 characters."),

    role: z
      .string()
      .min(2, "Role must be at least 5 characters long.")
      .max(35, "Role cannot exceed 35 characters.")
      .optional(),

    image: z.string().url("Image URL must be a valid URL."),

    isActive: z.boolean().optional().default(false), // Default is false if not provided

    isDeleted: z.boolean().optional().default(false), // Default is false if not provided
  })
  .strict();

export const validateUpdateTestimonial = validateTestimonial.partial();
