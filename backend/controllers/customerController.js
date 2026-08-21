const Customer = require('../models/Customer');
const Order = require('../models/Order');

// @desc    Get all customers with their order stats
// @route   GET /api/customers
// @access  Private/Admin
const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find({}).populate('userId', 'email');
    
    // Calculate stats for each customer
    const customersWithStats = await Promise.all(customers.map(async (customer) => {
      const orders = await Order.find({ customerId: customer._id });
      
      const ordersCount = orders.length;
      const totalSpent = orders.reduce((sum, order) => sum + (order.total || 0), 0);
      
      return {
        ...customer._doc,
        ordersCount,
        totalSpent
      };
    }));

    res.json({
      success: true,
      count: customersWithStats.length,
      data: customersWithStats
    });
  } catch (error) {
    console.error('Get customers error:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

module.exports = {
  getCustomers
};
