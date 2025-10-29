import "../config/dotenv.js"; // Load environment variables first
import { pool } from "./database.js";
import customItemsData from "../data/customItems.js"; // import demo data

// Create the CustomItems table
const createCustomItemsTable = async () => {
  try {
    const createTableQuery = `
      DROP TABLE IF EXISTS custom_items;

      CREATE TABLE IF NOT EXISTS custom_items (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,               -- e.g., Car model name or Custom Item name
        feature_category VARCHAR(255) NOT NULL,   -- e.g., "exterior", "wheels", etc.
        selected_option VARCHAR(255) NOT NULL,    -- e.g., "red", "18-inch", etc.
        price DECIMAL(10,2) NOT NULL,             -- price of that selected feature
        total_price DECIMAL(10,2),                -- computed total price (optional)
        image VARCHAR(255),                       -- optional: store image URL or icon
        description TEXT,                         -- optional: short description or notes
        submitted_by VARCHAR(255),                -- optional: who customized it
        submitted_on TIMESTAMP DEFAULT NOW()      -- auto timestamp
      );
    `;

    await pool.query(createTableQuery);
    console.log("✅ CustomItems table created successfully.");
  } catch (err) {
    console.error("❌ Error creating CustomItems table:", err);
    throw err;
  }
};

// Optionally seed with demo data if you like
const seedCustomItemsTable = async () => {
  try {
    await createCustomItemsTable();

    for (const item of customItemsData) {
      const insertQuery = `
        INSERT INTO custom_items 
          (name, feature_category, selected_option, price, total_price, image, description, submitted_by)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8);
      `;

      const values = [
        item.name,
        item.feature_category,
        item.selected_option,
        item.price,
        item.total_price,
        item.image,
        item.description,
        item.submitted_by,
      ];

      await pool.query(insertQuery, values);
      console.log(`✅ ${item.name} added successfully.`);
    }

    console.log("🎉 CustomItems table seeded successfully!");
  } catch (err) {
    console.error("❌ Seeding failed:", err);
  } finally {
    pool.end();
  }
};

// Run the seeding function
seedCustomItemsTable();
