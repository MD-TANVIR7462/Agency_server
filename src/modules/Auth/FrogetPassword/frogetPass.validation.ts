import { z } from "zod";

export const frogetPasswordValidation = z
  .object({
    id: z.string({
      required_error: "User Id is required",
    }),
  })
  .strict();