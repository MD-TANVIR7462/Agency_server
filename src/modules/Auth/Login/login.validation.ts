import { z } from "zod";

export const loginValidation = z
  .object({
    email: z.string({
      required_error: "For Login You must provide a valid Email",
    }),
    password: z.string({
      required_error: "For Login You must provide a valid Password",
    }),
  })
  .strict();
export const refreshTokenValidation = z.string({
  required_error: "Refresh Token is Required !",
});
