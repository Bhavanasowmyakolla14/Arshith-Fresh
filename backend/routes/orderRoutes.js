const express = require('express');
const router = express.Router();
const {
  getOrders,
  getOrderById,
  createOrder,
  updateOrderStatus
} = require('../controllers/orderController');

// GET /api/orders
router.get('/', getOrders);

// POST /api/orders
router.post('/', createOrder);

// GET /api/orders/:id
router.get('/:id', getOrderById);

// PUT /api/orders/:id/status
router.put('/:id/status', updateOrderStatus);

module.exports = router;
