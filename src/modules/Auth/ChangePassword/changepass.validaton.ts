import { z } from "zod";

export const passwordValidation = z
  .object({
    oldPassword: z.string({
      required_error: "Old Password is required",
    }),
    newPassword: z.string({
      required_error: "New Password is required",
    }),
  })
  .strict();
