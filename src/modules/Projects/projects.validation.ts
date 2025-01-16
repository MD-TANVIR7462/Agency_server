import { z } from "zod";

// Zod Validation Schema for Project
export const validateProject = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters long.")
    .max(100, "Title cannot exceed 100 characters."),
  
  category: z
    .string()
    .min(3, "Category must be at least 3 characters long.")
    .max(50, "Category cannot exceed 50 characters."),
  
  image: z
    .string()
    .url("Image must be a valid URL."),
  
  link: z
    .string()
    .url("Link must be a valid URL."),
  
  isActive: z.boolean().optional().default(true), 
  
  isDeleted: z.boolean().optional().default(false), // Default is false if not provided
});

// Zod Partial Validation for Updates
export const validateUpdateProject = validateProject.partial();
