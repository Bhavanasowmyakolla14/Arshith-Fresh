const API_URL = 'http://localhost:5000/api/products';

async function testProductAPI() {
  console.log('Testing Product API...');
  let createdProductId;

  try {
    // 1. Create a Product
    console.log('\n--- 1. Create Product ---');
    const newProduct = {
      title: 'Premium Organic Bananas',
      description: 'A bunch of fresh organic bananas.',
      brand: 'Arshith Fresh',
      sku: 'BANANA-ORG-001',
      type: 'Produce',
      tags: ['organic', 'fruit', 'fresh'],
      price: 2.99,
      initialStock: 100
    };
    
    const createRes = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct)
    });
    const createData = await createRes.json();
    if (!createRes.ok) throw new Error(JSON.stringify(createData));
    
    console.log('Success:', createData);
    createdProductId = createData.product._id;

    // 2. Get All Products
    console.log('\n--- 2. Get All Products ---');
    const getAllRes = await fetch(API_URL);
    const getAllData = await getAllRes.json();
    console.log(`Found ${getAllData.length} products.`);

    // 3. Get Single Product by ID
    console.log(`\n--- 3. Get Product By ID (${createdProductId}) ---`);
    const getSingleRes = await fetch(`${API_URL}/${createdProductId}`);
    const getSingleData = await getSingleRes.json();
    console.log('Success:', getSingleData.title);

    // 4. Update Product
    console.log(`\n--- 4. Update Product ---`);
    const updateRes = await fetch(`${API_URL}/${createdProductId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'Super Premium Organic Bananas' })
    });
    const updateData = await updateRes.json();
    console.log('Success, new title:', updateData.title);

    // 5. Delete Product
    console.log(`\n--- 5. Delete Product (Skipped) ---`);
    // const deleteRes = await fetch(`${API_URL}/${createdProductId}`, {
    //   method: 'DELETE'
    // });
    // const deleteData = await deleteRes.json();
    // console.log('Success:', deleteData);

  } catch (error) {
    console.error('Error during testing:', error.message);
  }
}

testProductAPI();
