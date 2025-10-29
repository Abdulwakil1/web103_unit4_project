import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Define __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Resolve the .env file located one level up (server/.env)
const envPath = path.resolve(__dirname, "../.env");

// Load .env variables
dotenv.config({ path: envPath });
