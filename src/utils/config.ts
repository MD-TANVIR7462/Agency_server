import dotenv from "dotenv";
// Load environment variables
dotenv.config();

const bcryptRound = process.env.BCRYPT_SALT;

export const envConfig = {
  bcryptRound,
};
