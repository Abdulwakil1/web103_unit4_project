// config/database.js
// ------------------
// This file sets up a connection pool to the Postgres database.
// It uses environment variables for credentials and configuration,
// and exports the pool for use in server routes.

import pg from "pg";
import dotenv from "dotenv";

// Load environment variables from .env
dotenv.config();

// Configuration object for Postgres connection
// - user, password, host, port, database: pulled from environment variables
// - ssl.rejectUnauthorized: required for some cloud providers (e.g., Render)
const config = {
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
  ssl: {
    rejectUnauthorized: false,
  },
};

// Create a connection pool
// A pool allows efficient reuse of database connections
export const pool = new pg.Pool(config);

// Optional: Log a message when a new client is acquired
pool.on("connect", () => {
  console.log("Connected to Postgres database");
});

// Optional: Log errors from the pool
pool.on("error", (err) => {
  console.error("Unexpected error on Postgres client", err);
  process.exit(-1);
});
