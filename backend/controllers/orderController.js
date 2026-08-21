const Order = require('../models/Order');
const OrderItem = require('../models/OrderItem');
const Inventory = require('../models/Inventory');

// @desc    Get all orders
// @route   GET /api/orders
// @access  Private/Admin
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({})
      .populate('customerId', 'firstName lastName email')
      .sort({ createdAt: -1 });
    
    res.json({
      success: true,
      count: orders.length,
      data: orders
    });
  } catch (error) {
    console.error('Get orders error:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

// @desc    Get single order with items
// @route   GET /api/orders/:id
// @access  Private/Admin
const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('customerId')
      .populate('shippingAddressId')
      .populate('billingAddressId');

    if (!order) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }

    const orderItems = await OrderItem.find({ orderId: order._id })
      .populate('productId', 'title image')
      .populate('variantId', 'title sku');

    res.json({
      success: true,
      data: {
        ...order._doc,
        items: orderItems
      }
    });
  } catch (error) {
    console.error('Get order error:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

// @desc    Create new order
// @route   POST /api/orders
// @access  Public/Private
const createOrder = async (req, res) => {
  try {
    const {
      customerId,
      orderItems,
      shippingAddressId,
      billingAddressId,
      paymentMethod,
      tax,
      shippingCharge,
      discount
    } = req.body;

    if (!orderItems || orderItems.length === 0) {
      return res.status(400).json({ success: false, message: 'No order items provided' });
    }

    // 1. Calculate totals
    let subtotal = 0;
    orderItems.forEach(item => {
      subtotal += item.price * item.quantity;
    });

    const total = subtotal + (tax || 0) + (shippingCharge || 0) - (discount || 0);
    const orderNumber = 'AF' + Math.floor(100000 + Math.random() * 900000); // e.g. AF123456

    // 2. Create Order
    const order = new Order({
      orderNumber,
      customerId,
      subtotal,
      tax: tax || 0,
      shippingCharge: shippingCharge || 0,
      discount: discount || 0,
      total,
      shippingAddressId,
      billingAddressId,
      status: 'pending',
      paymentStatus: 'pending',
      fulfillmentStatus: 'unfulfilled'
    });

    const createdOrder = await order.save();

    // 3. Create Order Items & Decrement Inventory
    const createdItems = [];
    for (const item of orderItems) {
      const orderItem = new OrderItem({
        orderId: createdOrder._id,
        productId: item.productId,
        variantId: item.variantId,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
        total: item.price * item.quantity
      });
      const savedItem = await orderItem.save();
      createdItems.push(savedItem);

      // Decrement inventory
      if (item.variantId) {
        await Inventory.findOneAndUpdate(
          { variantId: item.variantId },
          { $inc: { availableQuantity: -item.quantity } }
        );
      }
    }

    res.status(201).json({
      success: true,
      data: {
        order: createdOrder,
        items: createdItems
      }
    });
  } catch (error) {
    console.error('Create order error:', error);
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};

// @desc    Update order status
// @route   PUT /api/orders/:id/status
// @access  Private/Admin
const updateOrderStatus = async (req, res) => {
  try {
    const { status, paymentStatus, fulfillmentStatus } = req.body;
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }

    if (status) order.status = status;
    if (paymentStatus) order.paymentStatus = paymentStatus;
    if (fulfillmentStatus) order.fulfillmentStatus = fulfillmentStatus;

    const updatedOrder = await order.save();

    res.json({
      success: true,
      data: updatedOrder
    });
  } catch (error) {
    console.error('Update order status error:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

module.exports = {
  getOrders,
  getOrderById,
  createOrder,
  updateOrderStatus
};
