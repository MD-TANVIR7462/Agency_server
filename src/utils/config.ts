import dotenv from "dotenv";
// Load environment variables
dotenv.config();

const bcryptRound = process.env.BCRYPT_SALT;
const jwtSecret = process.env.JWT_ACCESS_SECRET


export const envConfig = {
  bcryptRound,jwtSecret
};