import { z } from "zod";

export const frogetPasswordValidation = z
  .object({
    email: z.string({
      required_error: "User email is required",
    }),
  })
  .strict();