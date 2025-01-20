import { z } from "zod";

export const validateContact = z
  .object({
    email: z.string().email("Invalid email format."),
    phone: z
      .string(),
    address: z
      .string()
      .min(5, "Address must be at least 5 characters.")
      .max(100, "Address must be at most 100 characters."),
    isActive: z.boolean().optional().default(true),
    isDeleted: z.boolean().optional().default(false),
  })
  .strict();

export const validateUpdateContact = validateContact.partial();
