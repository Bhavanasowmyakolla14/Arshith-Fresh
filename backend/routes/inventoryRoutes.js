const express = require('express');
const router = express.Router();
const {
  getInventory,
  updateInventory
} = require('../controllers/inventoryController');

// GET /api/inventory
router.get('/', getInventory);

// PUT /api/inventory/:id
router.put('/:id', updateInventory);

module.exports = router;
