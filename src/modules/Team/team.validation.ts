import { z } from "zod";

export const validateTeam = z
  .object({
    name: z
      .string()
      .min(3, "Name must be at least 3 characters long.")
      .max(50, "Name cannot exceed 50 characters."),
    role: z
      .string()
      .min(3, "Role must be at least 3 characters long.")
      .max(30, "Role cannot exceed 30 characters."),
    team: z
      .array(
        z.string().min(1, "Team member name must be at least 1 character.")
      )
      .min(1, "Team array must have at least one member."),
    image: z.string().url("Image must be a valid URL."),
    bio: z
      .string()
      .min(10, "Bio must be at least 10 characters long.")
      .max(300, "Bio cannot exceed 300 characters."),
    social: z
      .object({
        linkedin: z
          .string()
          .refine(value => value === "" || /^https?:\/\/(www\.)?linkedin\.com\/.+$/, {
            message: "Invalid LinkedIn URL or empty string."
          })
          .optional()
          .default(""),
        twitter: z
          .string()
          .refine(value => value === "" || /^https?:\/\/(www\.)?twitter\.com\/.+$/, {
            message: "Invalid Twitter URL or empty string."
          })
          .optional()
          .default(""),
        facebook: z
          .string()
          .refine(value => value === "" || /^https?:\/\/(www\.)?facebook\.com\/.+$/, {
            message: "Invalid Facebook URL or empty string."
          })
          .optional()
          .default(""),
        github: z
          .string()
          .refine(value => value === "" || /^https?:\/\/(www\.)?github\.com\/.+$/, {
            message: "Invalid GitHub URL or empty string."
          })
          .optional()
          .default(""),
      })
      .optional(),
    skills: z
      .array(z.string().min(1, "Skill name must be at least 1 character."))
      .min(1, "Skills array must have at least one skill."),
    isActive: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
  })
  .strict();

export const validateUpdateTeam = validateTeam.partial();
