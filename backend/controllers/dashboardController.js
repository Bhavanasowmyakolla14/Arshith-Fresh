const Product = require('../models/product');
const Order = require('../models/Order');
const User = require('../models/user');
const Customer = require('../models/Customer');

// @desc    Get dashboard stats
// @route   GET /api/dashboard/stats
// @access  Public (for now)
const getDashboardStats = async (req, res) => {
  try {
    const productsCount = await Product.countDocuments();
    const ordersCount = await Order.countDocuments();
    
    // Total Sales
    const orders = await Order.find({ status: { $ne: 'Cancelled' } });
    const totalSales = orders.reduce((acc, curr) => acc + (curr.totalAmount || 0), 0);

    // Total Customers (Users with role user + any Customer entries)
    // Assuming simple User count for now
    const usersCount = await User.countDocuments({ role: 'user' });

    res.status(200).json({
      success: true,
      data: {
        productsCount,
        ordersCount,
        totalSales,
        customersCount: usersCount
      }
    });
  } catch (error) {
    console.error("Dashboard stats error:", error);
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};

module.exports = { getDashboardStats };
