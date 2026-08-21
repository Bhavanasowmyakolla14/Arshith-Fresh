const API_URL = 'http://localhost:5000/api';

async function testOrdersAPI() {
  console.log('Testing Orders API...');

  try {
    // 1. Fetch a product to get realistic product/variant IDs
    console.log('\n--- Fetching a product to use in the order ---');
    const prodRes = await fetch(`${API_URL}/products`);
    const products = await prodRes.json();
    
    if (products.length === 0) {
      console.log('No products found in DB. Please create a product first.');
      return;
    }

    const testProduct = products[0];
    
    // Fetch product details to get variants
    const prodDetailRes = await fetch(`${API_URL}/products/${testProduct._id}`);
    const productDetail = await prodDetailRes.json();
    const testVariant = productDetail.variants && productDetail.variants.length > 0 ? productDetail.variants[0] : null;

    console.log(`Using Product: ${testProduct.title}`);

    // 2. Create Order
    console.log('\n--- 1. Create Order ---');
    const newOrder = {
      orderItems: [
        {
          productId: testProduct._id,
          variantId: testVariant ? testVariant._id : null,
          title: testProduct.title,
          price: 2.99,
          quantity: 2
        }
      ],
      shippingCharge: 5.00,
      tax: 0.60
    };

    const createRes = await fetch(`${API_URL}/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newOrder)
    });
    const createData = await createRes.json();
    if (!createRes.ok) throw new Error(JSON.stringify(createData));
    
    console.log('Success! Order created:', createData.data.order.orderNumber);
    const createdOrderId = createData.data.order._id;

    // 3. Get All Orders
    console.log('\n--- 2. Get All Orders ---');
    const getAllRes = await fetch(`${API_URL}/orders`);
    const getAllData = await getAllRes.json();
    console.log(`Found ${getAllData.count} orders.`);

    // 4. Get Single Order
    console.log(`\n--- 3. Get Order By ID (${createdOrderId}) ---`);
    const getSingleRes = await fetch(`${API_URL}/orders/${createdOrderId}`);
    const getSingleData = await getSingleRes.json();
    console.log('Success! Items in order:', getSingleData.data.items.length);

    // 5. Update Order Status
    console.log(`\n--- 4. Update Order Status ---`);
    const updateRes = await fetch(`${API_URL}/orders/${createdOrderId}/status`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'shipped', paymentStatus: 'paid' })
    });
    const updateData = await updateRes.json();
    console.log(`Success! New Status: ${updateData.data.status}, Payment: ${updateData.data.paymentStatus}`);

  } catch (error) {
    console.error('Error during testing:', error.message);
  }
}

testOrdersAPI();
