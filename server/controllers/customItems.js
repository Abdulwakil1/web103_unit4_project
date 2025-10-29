// server/controllers/customItems.js
import { pool } from "../config/database.js";

// Get all custom items
const getCustomItems = async (req, res) => {
  try {
    const results = await pool.query(`
      SELECT *
      FROM custom_items
      ORDER BY id ASC
    `);
    res.status(200).json(results.rows);
  } catch (error) {
    console.error("Error fetching custom items:", error);
    res.status(500).json({ error: error.message });
  }
};

// Get single custom item by ID
const getCustomItemById = async (req, res) => {
  const { id } = req.params;
  try {
    const results = await pool.query(
      "SELECT * FROM custom_items WHERE id = $1",
      [id]
    );

    if (results.rows.length === 0) {
      return res.status(404).json({ error: "Custom item not found" });
    }

    res.status(200).json(results.rows[0]);
  } catch (error) {
    console.error("Error fetching custom item by ID:", error);
    res.status(500).json({ error: error.message });
  }
};

// Create a new custom item
const createCustomItem = async (req, res) => {
  try {
    const {
      name,
      feature_category,
      selected_option,
      price,
      total_price,
      image,
      description,
      submitted_by,
    } = req.body;

    if (!name || !feature_category || !selected_option || !price) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const results = await pool.query(
      `INSERT INTO custom_items 
        (name, feature_category, selected_option, price, total_price, image, description, submitted_by)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
       RETURNING *`,
      [
        name,
        feature_category,
        selected_option,
        price,
        total_price,
        image,
        description,
        submitted_by,
      ]
    );

    res.status(201).json(results.rows[0]);
  } catch (error) {
    console.error("Error creating custom item:", error);
    res.status(500).json({ error: error.message });
  }
};

// Update an existing custom item
const updateCustomItem = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const {
      name,
      feature_category,
      selected_option,
      price,
      total_price,
      image,
      description,
      submitted_by,
    } = req.body;

    if (!id || isNaN(id))
      return res.status(400).json({ error: "Invalid custom item ID" });

    const results = await pool.query(
      `UPDATE custom_items
       SET name=$1, feature_category=$2, selected_option=$3, price=$4, total_price=$5, image=$6, description=$7, submitted_by=$8
       WHERE id=$9
       RETURNING *`,
      [
        name,
        feature_category,
        selected_option,
        price,
        total_price,
        image,
        description,
        submitted_by,
        id,
      ]
    );

    if (results.rows.length === 0)
      return res.status(404).json({ error: "Custom item not found" });

    res.status(200).json(results.rows[0]);
  } catch (error) {
    console.error("Error updating custom item:", error);
    res.status(500).json({ error: error.message });
  }
};

// Delete a custom item
const deleteCustomItem = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);

    const results = await pool.query(
      "DELETE FROM custom_items WHERE id=$1 RETURNING *",
      [id]
    );

    if (results.rows.length === 0)
      return res.status(404).json({ error: "Custom item not found" });

    res
      .status(200)
      .json({
        message: "Custom item deleted successfully",
        deletedItem: results.rows[0],
      });
  } catch (error) {
    console.error("Error deleting custom item:", error);
    res.status(500).json({ error: error.message });
  }
};

export default {
  getCustomItems,
  getCustomItemById,
  createCustomItem,
  updateCustomItem,
  deleteCustomItem,
};
