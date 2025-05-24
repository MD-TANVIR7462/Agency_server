import { z } from "zod";

const optionalUrl = z
  .string()
  .refine(
    (value) =>
      value === "" ||
      (() => {
        try {
          new URL(value);
          return true;
        } catch {
          return false;
        }
      })(),
    {
      message: "Must be a valid URL or an empty string.",
    }
  )
  .optional();

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
    logo: optionalUrl,
    facebook: optionalUrl,
    twitter: optionalUrl,
    linkedin: optionalUrl,
    instagram: optionalUrl,
  })
  .strict();

export const validateUpdateSettings = validateSettings.partial();
