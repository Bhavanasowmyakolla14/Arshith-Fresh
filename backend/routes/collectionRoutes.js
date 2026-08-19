const express = require("express");

const router = express.Router();

const {
  getCollections,
  getCollectionById,
  createCollection,
  updateCollection,
  deleteCollection,
} = require("../controllers/collectionController");

// Get all collections
router.get("/", getCollections);

// Get one collection
router.get("/:id", getCollectionById);

// Create collection
router.post("/", createCollection);

// Update collection
router.put("/:id", updateCollection);

// Delete collection
router.delete("/:id", deleteCollection);

module.exports = router;