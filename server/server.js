import express from "express";
import path from "path";
import favicon from "serve-favicon";
import dotenv from "dotenv";

// Import the router from your routes file
import customItemsRouter from "./routes/customItems.js";

dotenv.config();

const PORT = process.env.PORT || 3006;

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Favicon and static files
if (process.env.NODE_ENV === "development") {
  app.use(favicon(path.resolve("../", "client", "public", "lightning.png")));
} else if (process.env.NODE_ENV === "production") {
  app.use(favicon(path.resolve("public", "lightning.png")));
  app.use(express.static("public"));
}

// ✅ Simple test route
app.get("/", (req, res) => {
  res.send("🚀 Server is up and running!");
});

// ✅ Connect API routes
app.use("/api/custom-items", customItemsRouter); // <-- all routes prefixed with /api/custom-items

// Handle frontend routing in production
if (process.env.NODE_ENV === "production") {
  app.get("/*", (_, res) => res.sendFile(path.resolve("public", "index.html")));
}

app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});
