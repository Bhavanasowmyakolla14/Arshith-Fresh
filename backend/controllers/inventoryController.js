const Inventory = require('../models/Inventory');
const ProductVariant = require('../models/ProductVariant');

// @desc    Get all inventory tracking items with product details
// @route   GET /api/inventory
// @access  Private/Admin
const getInventory = async (req, res) => {
  try {
    const inventories = await Inventory.find({})
      .populate({
        path: 'variantId',
        select: 'title sku price productId',
        populate: {
          path: 'productId',
          select: 'title image type'
        }
      });
    
    res.json({
      success: true,
      count: inventories.length,
      data: inventories
    });
  } catch (error) {
    console.error('Get inventory error:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

// @desc    Update inventory stock levels
// @route   PUT /api/inventory/:id
// @access  Private/Admin
const updateInventory = async (req, res) => {
  try {
    const { availableQuantity, quantity, reservedQuantity } = req.body;
    const inventory = await Inventory.findById(req.params.id);

    if (!inventory) {
      return res.status(404).json({ success: false, message: 'Inventory item not found' });
    }

    if (availableQuantity !== undefined) inventory.availableQuantity = availableQuantity;
    if (quantity !== undefined) inventory.quantity = quantity;
    if (reservedQuantity !== undefined) inventory.reservedQuantity = reservedQuantity;

    const updatedInventory = await inventory.save();

    res.json({
      success: true,
      data: updatedInventory
    });
  } catch (error) {
    console.error('Update inventory error:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

module.exports = {
  getInventory,
  updateInventory
};
