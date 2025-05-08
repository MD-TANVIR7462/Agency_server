import { z } from "zod";

export const frogetPasswordValidation = z
  .object({
    email: z.string({
      required_error: "User email is required",
    }),
  })
  .strict();

export const resetPasswordValidation = z
  .object({
    id: z.string({
      required_error: "User id is required",
    }),
    newPass: z.string({
      required_error: "New Password is required",
    }),
  })
  .strict();
