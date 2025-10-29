// server/routes/customItems.js
import express from "express";
import CustomItemsController from "../controllers/customItems.js";

const router = express.Router();

// Test route (for checking if routes are working)
router.get("/test", (req, res) => {
  res.json({ message: "✅ CustomItems route working properly!" });
});

// Get all custom items
router.get("/", CustomItemsController.getCustomItems);

// Get one custom item by ID
router.get("/:id", CustomItemsController.getCustomItemById);

// Create a new custom item
router.post("/", CustomItemsController.createCustomItem);

// Update a custom item by ID
router.patch("/:id", CustomItemsController.updateCustomItem);

// Delete a custom item by ID
router.delete("/:id", CustomItemsController.deleteCustomItem);

export default router;
