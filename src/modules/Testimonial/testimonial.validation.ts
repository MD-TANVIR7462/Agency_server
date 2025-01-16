import { z } from "zod";

// Zod Validation Schema for Testimonial
export const validateTestimonial = z.object({
  content: z
    .string()
    .min(20, "Content must be at least 20 characters long.")
    .max(160, "Content cannot exceed 160 characters."),
  
  author: z
    .string()
    .min(7, "Author name must be at least 7 characters long.")
    .max(25, "Author name cannot exceed 25 characters."),
  
  role: z
    .string()
    .min(5, "Role must be at least 5 characters long.")
    .max(20, "Role cannot exceed 20 characters.")
    .optional(),
  
  image: z
    .string()
    .url("Image URL must be a valid URL."),
  
  isActive: z.boolean().optional().default(false), // Default is false if not provided
  
  isDeleted: z.boolean().optional().default(false), // Default is false if not provided
});

export const validateUpdateTestimonial = validateTestimonial.partial();
