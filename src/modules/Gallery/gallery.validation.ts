import { z } from "zod";

export const validateFaq = z
  .object({
    answer: z
      .string()
      .min(10, "Question must be at least 10 characters long")
      .max(160, "Question cannot exceed 120 characters."),
    question: z
      .string()
      .min(10, "Answer must be al least 10 characters long")
      .max(250, "Answer cannot exceed 250 characters."),
    isActive: z.boolean().optional().default(true),
    isDeleted: z.boolean().optional().default(false),
  })
  .strict();

export const validateUpdateFaq = validateFaq.partial();
