import { z } from "zod";

export const validateStory = z
  .object({
    stats: z.object({
      years: z
        .string()
        .trim()
        .min(1, "Years must have at least 1 character.")
        .max(4, "Years cannot exceed 4 characters."),
      projects: z
        .string()
        .trim()
        .min(1, "Projects must have at least 1 character.")
        .max(4, "Projects cannot exceed 4 characters."),
      teamSize: z
        .string()
        .trim()
        .min(1, "Team size must have at least 1 character.")
        .max(4, "Team size cannot exceed 4 characters."),
      satisfaction: z
        .string()
        .trim()
        .min(1, "Satisfaction must have at least 1 character.")
        .max(4, "Satisfaction cannot exceed 4 characters."),
    }),
    story: z.object({
      title: z
        .string()
        .trim()
        .min(7, "Title must have at least 7 characters.")
        .max(18, "Title cannot exceed 18 characters."),
      content: z
        .string()
        .trim()
        .min(90, "Content must have at least 90 characters.")
        .max(280, "Content cannot exceed 280 characters."),
    }),
    mission: z.object({
      title: z
        .string()
        .trim()
        .min(7, "Title must have at least 7 characters.")
        .max(18, "Title cannot exceed 18 characters."),
      content: z
        .string()
        .trim()
        .min(90, "Content must have at least 90 characters.")
        .max(280, "Content cannot exceed 280 characters."),
    }),
    vision: z.object({
      title: z
        .string()
        .trim()
        .min(7, "Title must have at least 7 characters.")
        .max(18, "Title cannot exceed 18 characters."),
      content: z
        .string()
        .trim()
        .min(90, "Content must have at least 90 characters.")
        .max(280, "Content cannot exceed 280 characters."),
    }),
  })
  .strict();

export const validateUpdateStory = validateStory.partial();
