import { z } from "zod";

export const validateSettings = z
  .object({
    companyName: z
      .string()
      .min(2, "Company name must be at least 2 characters.")
      .max(25, "Company name must be at most 25 characters."),
    tagline: z
      .string()
      .min(5, "Tagline must be at least 5 characters.")
      .max(150, "Tagline must be at most 150 characters."),
    facebook: z
      .string()
      .refine(value => value === "" || /^https?:\/\/(www\.)?facebook\.com\/[A-Za-z0-9._-]+$/.test(value), {
        message: "Facebook must be a valid URL or an empty string."
      })
      .optional(),
    twitter: z
      .string()
      .refine(value => value === "" || /^https?:\/\/(www\.)?x\.com\/.+$/.test(value), {
        message: "Twitter must be a valid URL or an empty string."
      })
      .optional(),
    linkedin: z
      .string()
      .refine(value => value === "" || /^https?:\/\/(www\.)?linkedin\.com\/company\/[A-Za-z0-9._-]+$/.test(value), {
        message: "LinkedIn must be a valid URL or an empty string."
      })
      .optional(),
    instagram: z
      .string()
      .refine(value => value === "" || /^https?:\/\/(www\.)?instagram\.com\/[A-Za-z0-9._-]+$/.test(value), {
        message: "Instagram must be a valid URL or an empty string."
      })
      .optional(),
  })
  .strict();

export const validateUpdateSettings = validateSettings.partial();
