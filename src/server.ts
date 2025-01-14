import { Server } from "http";
import app from "./app";
import dotenv from "dotenv";
import mongoose from "mongoose";


// Load environment variables
dotenv.config();

const port = process.env.PORT || 3000; // Default to 3000 if PORT is not set
const dbUrl = process.env.DB_URL;

if (!dbUrl) {
  console.error("Error: DB_URL is not defined in environment variables.");
  process.exit(1); 
}

async function main() {
  try {
    // Connect to MongoDB
    await mongoose.connect(dbUrl as string);
    console.log("Connected to MongoDB successfully.");

    // Start the server
    const server: Server = app.listen(port, () => {
      console.log(`App listening on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Error during initialization:", error);
    process.exit(1); // Exit the process with a failure code
  }
}

main();
