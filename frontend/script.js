/* JavaScript Behaviors for Arshith Fresh Replica */

/// Full Local Product Database across all 7 categories
const PRODUCTS_DATA = {
    // ----------------------------------------------------
    // SPICES (Image 1 from User Request)
    // ----------------------------------------------------
    "cloves-lavanga-premium": {
        id: "cloves-lavanga-premium",
        title: "Cloves (lavanga) (Premium Quality)",
        brand: "ARSHITH FRESH INDIA PVT LTD",
        rating: 5.0,
        reviews: 34,
        originalPrice: 72.24,
        salePrice: 56.00,
        image: "https://arshithfresh.com/cdn/shop/collections/spice_200x200_crop_center.png?v=1746963495",
        hoverImage: "https://arshithfresh.com/cdn/shop/collections/spice_200x200_crop_center.png?v=1746963495",
        category: "Spices",
        categorySlug: "spices",
        weights: [{ label: "100g", multiplier: 1 }, { label: "250g", multiplier: 2.2 }],
        description: "Handpicked premium quality whole cloves (lavanga) with intense aroma and warm spice flavor. Essential for biryani, curries, and warm teas.",
        details: { "Ingredients": "100% Whole Cloves.", "Storage": "Airtight jar in a cool place.", "Shelf Life": "12 Months." }
    },
    "cardamom-elaichi-premium": {
        id: "cardamom-elaichi-premium",
        title: "Cardamom (Elaichi) (Premium Quality)",
        brand: "ARSHITH FRESH INDIA PVT LTD",
        rating: 5.0,
        reviews: 37,
        originalPrice: 221.76,
        salePrice: 176.00,
        image: "https://arshithfresh.com/cdn/shop/collections/spice_200x200_crop_center.png?v=1746963495",
        hoverImage: "https://arshithfresh.com/cdn/shop/collections/spice_200x200_crop_center.png?v=1746963495",
        category: "Spices",
        categorySlug: "spices",
        weights: [{ label: "50g", multiplier: 0.6 }, { label: "100g", multiplier: 1 }],
        description: "Plump 8mm green cardamom pods filled with essential oils and sweet perfume. Ideal for Indian sweets, chai, and rice preparations.",
        details: { "Ingredients": "100% Green Cardamom Pods.", "Storage": "Keep sealed away from moisture.", "Shelf Life": "12 Months." }
    },
    "cinnamon-kerala-style-premium": {
        id: "cinnamon-kerala-style-premium",
        title: "Cinnamon (Kerala style) (Premium Quality)",
        brand: "ARSHITH FRESH INDIA PVT LTD",
        rating: 5.0,
        reviews: 34,
        originalPrice: 47.88,
        salePrice: 38.00,
        image: "https://arshithfresh.com/cdn/shop/collections/spice_200x200_crop_center.png?v=1746963495",
        hoverImage: "https://arshithfresh.com/cdn/shop/collections/spice_200x200_crop_center.png?v=1746963495",
        category: "Spices",
        categorySlug: "spices",
        weights: [{ label: "100g", multiplier: 1 }, { label: "250g", multiplier: 2.2 }],
        description: "Pure aromatic Kerala cinnamon quills (Dalchini). Perfect balance of sweet and woody spice notes for curries and baking.",
        details: { "Ingredients": "100% Organic Cinnamon Bark.", "Storage": "Store dry.", "Shelf Life": "12 Months." }
    },
    "coriander-premium": {
        id: "coriander-premium",
        title: "Coriander (Premium Quality)",
        brand: "ARSHITH FRESH INDIA PVT LTD",
        rating: 5.0,
        reviews: 28,
        originalPrice: 26.80,
        salePrice: 19.00,
        image: "https://arshithfresh.com/cdn/shop/collections/spice_200x200_crop_center.png?v=1746963495",
        hoverImage: "https://arshithfresh.com/cdn/shop/collections/spice_200x200_crop_center.png?v=1746963495",
        category: "Spices",
        categorySlug: "spices",
        weights: [{ label: "100g", multiplier: 1 }, { label: "250g", multiplier: 2.2 }],
        description: "Farm-fresh whole coriander seeds (Dhaniyalu). Crispy, fragrant, and essential for homemade garam masala and spice powders.",
        details: { "Ingredients": "100% Whole Coriander Seeds.", "Storage": "Cool dry place.", "Shelf Life": "12 Months." }
    },
    "cumin-premium": {
        id: "cumin-premium",
        title: "Cumin (Premium Quality)",
        brand: "ARSHITH FRESH INDIA PVT LTD",
        rating: 5.0,
        reviews: 31,
        originalPrice: 58.10,
        salePrice: 43.00,
        image: "https://arshithfresh.com/cdn/shop/collections/spice_200x200_crop_center.png?v=1746963495",
        hoverImage: "https://arshithfresh.com/cdn/shop/collections/spice_200x200_crop_center.png?v=1746963495",
        category: "Spices",
        categorySlug: "spices",
        weights: [{ label: "100g", multiplier: 1 }, { label: "250g", multiplier: 2.2 }],
        description: "Aromatic Jeera seeds with earthy flavor and rich digestive properties. Perfect for tempering dal, rasam, and rice dishes.",
        details: { "Ingredients": "100% Cumin Seeds.", "Storage": "Airtight container.", "Shelf Life": "12 Months." }
    },
    "biryani-masala-mix": {
        id: "biryani-masala-mix",
        title: "Biryani Masala Mix (Premium Quality)",
        brand: "ARSHITH FRESH INDIA PVT LTD",
        rating: 5.0,
        reviews: 42,
        originalPrice: 99.00,
        salePrice: 86.00,
        image: "https://arshithfresh.com/cdn/shop/collections/spice_200x200_crop_center.png?v=1746963495",
        hoverImage: "https://arshithfresh.com/cdn/shop/collections/spice_200x200_crop_center.png?v=1746963495",
        category: "Spices",
        categorySlug: "spices",
        weights: [{ label: "100g", multiplier: 1 }, { label: "250g", multiplier: 2.2 }],
        description: "Exquisite royal whole spice blend featuring star anise, mace, shahi jeera, bay leaves, and cardamom for restaurant-style biryani aroma.",
        details: { "Ingredients": "Whole Spices Blend.", "Storage": "Keep tightly sealed.", "Shelf Life": "9 Months." }
    },
    "ajwain-premium": {
        id: "ajwain-premium",
        title: "Ajwain (Premium Quality)",
        brand: "ARSHITH FRESH INDIA PVT LTD",
        rating: 5.0,
        reviews: 33,
        originalPrice: 45.00,
        salePrice: 34.00,
        image: "https://arshithfresh.com/cdn/shop/collections/spice_200x200_crop_center.png?v=1746963495",
        hoverImage: "https://arshithfresh.com/cdn/shop/collections/spice_200x200_crop_center.png?v=1746963495",
        category: "Spices",
        categorySlug: "spices",
        weights: [{ label: "100g", multiplier: 1 }, { label: "250g", multiplier: 2.2 }],
        description: "Pungent carom seeds (Vamu) loaded with thymol for digestive health and delightful savory punch in puris and samosas.",
        details: { "Ingredients": "100% Organic Ajwain Seeds.", "Storage": "Airtight container.", "Shelf Life": "12 Months." }
    },
    "black-pepper-premium": {
        id: "black-pepper-premium",
        title: "Black Pepper (Premium Quality)",
        brand: "ARSHITH FRESH INDIA PVT LTD",
        rating: 5.0,
        reviews: 39,
        originalPrice: 85.00,
        salePrice: 66.00,
        image: "https://arshithfresh.com/cdn/shop/collections/spice_200x200_crop_center.png?v=1746963495",
        hoverImage: "https://arshithfresh.com/cdn/shop/collections/spice_200x200_crop_center.png?v=1746963495",
        category: "Spices",
        categorySlug: "spices",
        weights: [{ label: "100g", multiplier: 1 }, { label: "250g", multiplier: 2.2 }],
        description: "Bold black peppercorns (Miriyaalu) from Malabar coast. Rich in piperine and sharp pungent kick.",
        details: { "Ingredients": "100% Whole Black Peppercorns.", "Storage": "Cool dry place.", "Shelf Life": "12 Months." }
    },

    // ----------------------------------------------------
    // COOKING ESSENTIALS (Images 2 & 3 from User Request)
    // ----------------------------------------------------
    "besan-flour-soft-grinding": {
        id: "besan-flour-soft-grinding",
        title: "Besan Flour Soft Grinding (Premium Quality)",
        brand: "ARSHITH FRESH INDIA PVT LTD",
        rating: 5.0,
        reviews: 41,
        originalPrice: 119.26,
        salePrice: 89.00,
        image: "https://arshithfresh.com/cdn/shop/collections/groceries_200x200_crop_center.jpg?v=1746965740",
        hoverImage: "https://arshithfresh.com/cdn/shop/collections/groceries_200x200_crop_center.jpg?v=1746965740",
        category: "Cooking Essentials",
        categorySlug: "cooking-essentials",
        weights: [{ label: "500g", multiplier: 1 }, { label: "1kg", multiplier: 1.9 }],
        description: "Silky fine ground gram flour (Senaga Pindi) prepared from 100% pure chana dal. Perfect for crispy bajji, pakoras, and sweets.",
        details: { "Ingredients": "100% Chana Dal Flour.", "Storage": "Store dry.", "Shelf Life": "6 Months." }
    },
    "chilli-powder-soft-grinding": {
        id: "chilli-powder-soft-grinding",
        title: "Chilli Powder Soft Grinding (Premium Quality)",
        brand: "ARSHITH FRESH INDIA PVT LTD",
        rating: 5.0,
        reviews: 50,
        originalPrice: 176.83,
        salePrice: 131.00,
        image: "https://arshithfresh.com/cdn/shop/collections/groceries_200x200_crop_center.jpg?v=1746965740",
        hoverImage: "https://arshithfresh.com/cdn/shop/collections/groceries_200x200_crop_center.jpg?v=1746965740",
        category: "Cooking Essentials",
        categorySlug: "cooking-essentials",
        weights: [{ label: "250g", multiplier: 1 }, { label: "500g", multiplier: 1.9 }],
        description: "Vibrant red chilli powder prepared from sun-dried Guntur chillies. Brings rich color and authentic heat to curries.",
        details: { "Ingredients": "100% Sun-Dried Red Chillies.", "Storage": "Airtight container.", "Shelf Life": "9 Months." }
    },
    "ragi-flour-soft-grinding": {
        id: "ragi-flour-soft-grinding",
        title: "Finger Millet Flour(Ragi) Soft Grinding (Premium Quality)",
        brand: "ARSHITH FRESH INDIA PVT LTD",
        rating: 5.0,
        reviews: 43,
        originalPrice: 71.50,
        salePrice: 55.00,
        image: "https://arshithfresh.com/cdn/shop/collections/groceries_200x200_crop_center.jpg?v=1746965740",
        hoverImage: "https://arshithfresh.com/cdn/shop/collections/groceries_200x200_crop_center.jpg?v=1746965740",
        category: "Cooking Essentials",
        categorySlug: "cooking-essentials",
        weights: [{ label: "500g", multiplier: 1 }, { label: "1kg", multiplier: 1.9 }],
        description: "Nutrient-packed calcium rich finger millet flour (Ragi Pindi). Ideal for healthy ragi malt, ragi mudde, and nutritious rotis.",
        details: { "Ingredients": "100% Whole Finger Millet.", "Storage": "Store dry.", "Shelf Life": "6 Months." }
    },
    "green-gram-premium": {
        id: "green-gram-premium",
        title: "Green Gram (Premium Quality)",
        brand: "ARSHITH FRESH INDIA PVT LTD",
        rating: 5.0,
        reviews: 34,
        originalPrice: 93.75,
        salePrice: 75.00,
        image: "https://arshithfresh.com/cdn/shop/collections/groceries_200x200_crop_center.jpg?v=1746965740",
        hoverImage: "https://arshithfresh.com/cdn/shop/collections/groceries_200x200_crop_center.jpg?v=1746965740",
        category: "Cooking Essentials",
        categorySlug: "cooking-essentials",
        weights: [{ label: "500g", multiplier: 1 }, { label: "1kg", multiplier: 1.9 }],
        description: "Whole organic unpolished green moong dal (Pesalu). Rich in dietary fiber, plant protein, and easy to digest.",
        details: { "Ingredients": "100% Whole Green Gram.", "Storage": "Cool dry place.", "Shelf Life": "9 Months." }
    },
    "rice-flour-premium": {
        id: "rice-flour-premium",
        title: "Rice Flour (Premium Quality)",
        brand: "ARSHITH FRESH INDIA PVT LTD",
        rating: 5.0,
        reviews: 40,
        originalPrice: 50.92,
        salePrice: 38.00,
        image: "https://arshithfresh.com/cdn/shop/collections/groceries_200x200_crop_center.jpg?v=1746965740",
        hoverImage: "https://arshithfresh.com/cdn/shop/collections/groceries_200x200_crop_center.jpg?v=1746965740",
        category: "Cooking Essentials",
        categorySlug: "cooking-essentials",
        weights: [{ label: "500g", multiplier: 1 }, { label: "1kg", multiplier: 1.9 }],
        description: "Ultra-fine raw rice flour (Biyyam Pindi). Essential for murukku, dosas, bajjis, and authentic Indian snacks.",
        details: { "Ingredients": "100% Pure Raw Rice.", "Storage": "Store dry.", "Shelf Life": "6 Months." }
    },
    "rock-salt-premium": {
        id: "rock-salt-premium",
        title: "Rock Salt (Premium Quality)",
        brand: "ARSHITH FRESH INDIA PVT LTD",
        rating: 5.0,
        reviews: 39,
        originalPrice: 33.33,
        salePrice: 29.00,
        image: "https://arshithfresh.com/cdn/shop/collections/groceries_200x200_crop_center.jpg?v=1746965740",
        hoverImage: "https://arshithfresh.com/cdn/shop/collections/groceries_200x200_crop_center.jpg?v=1746965740",
        category: "Cooking Essentials",
        categorySlug: "cooking-essentials",
        weights: [{ label: "500g", multiplier: 1 }, { label: "1kg", multiplier: 1.9 }],
        description: "Unrefined pink rock salt (Saindhava Lavanam) packed with 84 essential minerals for superior health and taste.",
        details: { "Ingredients": "100% Natural Himalayan Rock Salt.", "Storage": "Keep dry.", "Shelf Life": "24 Months." }
    },
    "sago-saggubiyyam-premium": {
        id: "sago-saggubiyyam-premium",
        title: "Sago (Saggubiyyam) (Premium Quality)",
        brand: "ARSHITH FRESH INDIA PVT LTD",
        rating: 5.0,
        reviews: 35,
        originalPrice: 28.75,
        salePrice: 25.00,
        image: "https://arshithfresh.com/cdn/shop/collections/groceries_200x200_crop_center.jpg?v=1746965740",
        hoverImage: "https://arshithfresh.com/cdn/shop/collections/groceries_200x200_crop_center.jpg?v=1746965740",
        category: "Cooking Essentials",
        categorySlug: "cooking-essentials",
        weights: [{ label: "250g", multiplier: 1 }, { label: "500g", multiplier: 1.9 }],
        description: "Pearly white tapioca sago pearls. Ideal for cooling saggubiyyam payasam, vada, and fasting dishes.",
        details: { "Ingredients": "100% Tapioca Starch Sago.", "Storage": "Airtight container.", "Shelf Life": "12 Months." }
    },

    // ----------------------------------------------------
    // GHEE AND HONEY (Image 4 from User Request)
    // ----------------------------------------------------
    "pure-buffalo-ghee-premium": {
        id: "pure-buffalo-ghee-premium",
        title: "Pure Buffalo Ghee (Premium Quality)",
        brand: "ARSHITH FRESH INDIA PVT LTD",
        rating: 5.0,
        reviews: 32,
        originalPrice: 288.60,
        salePrice: 222.00,
        image: "https://arshithfresh.com/cdn/shop/files/WhatsApp_Image_2025-09-15_at_4.34.52_PM.jpg?v=1757934372&width=800",
        hoverImage: "https://arshithfresh.com/cdn/shop/files/WhatsApp_Image_2025-06-30_at_7.32.29_PM_2_eb23ab0e-a49c-457d-9dad-00ce2758289c.jpg?v=1757934372&width=533",
        category: "Ghee and Honey",
        categorySlug: "ghee-and-honey",
        weights: [{ label: "250g", multiplier: 0.45 }, { label: "500g", multiplier: 0.8 }, { label: "1kg", multiplier: 1 }],
        description: "Traditionally prepared bilona method buffalo ghee. Features rich granular texture, mesmerizing aroma, and unmatched purity for sweets and cooking.",
        details: { "Ingredients": "100% Clarified Buffalo Milk Butter.", "Storage": "Room temperature.", "Shelf Life": "12 Months." }
    },
    "pure-cow-ghee-premium": {
        id: "pure-cow-ghee-premium",
        title: "Pure Cow Ghee (Premium Quality)",
        brand: "ARSHITH FRESH INDIA PVT LTD",
        rating: 5.0,
        reviews: 31,
        originalPrice: 284.70,
        salePrice: 219.00,
        image: "https://arshithfresh.com/cdn/shop/collections/ghee_1_200x200_crop_center.jpg?v=1746964905",
        hoverImage: "https://arshithfresh.com/cdn/shop/collections/ghee_1_200x200_crop_center.jpg?v=1746964905",
        category: "Ghee and Honey",
        categorySlug: "ghee-and-honey",
        weights: [{ label: "250g", multiplier: 0.45 }, { label: "500g", multiplier: 0.8 }, { label: "1kg", multiplier: 1 }],
        description: "Golden A2 cow milk ghee. Rich in vitamins A, D, E & K with natural immunity boosting goodness.",
        details: { "Ingredients": "100% Cow Milk Butter.", "Storage": "Store at room temp.", "Shelf Life": "12 Months." }
    },
    "natural-honey-premium": {
        id: "natural-honey-premium",
        title: "Natural Honey (Premium Quality)",
        brand: "ARSHITH FRESH INDIA PVT LTD",
        rating: 5.0,
        reviews: 32,
        originalPrice: 175.30,
        salePrice: 149.00,
        image: "https://arshithfresh.com/cdn/shop/collections/ghee_1_200x200_crop_center.jpg?v=1746964905",
        hoverImage: "https://arshithfresh.com/cdn/shop/collections/ghee_1_200x200_crop_center.jpg?v=1746964905",
        category: "Ghee and Honey",
        categorySlug: "ghee-and-honey",
        weights: [{ label: "250g", multiplier: 0.6 }, { label: "500g", multiplier: 1 }],
        description: "100% pure raw unprocessed forest honey. Packed with natural antioxidants, active enzymes, and honey sweetness.",
        details: { "Ingredients": "100% Pure Raw Honey.", "Storage": "Keep sealed at room temp.", "Shelf Life": "24 Months." }
    },

    // ----------------------------------------------------
    // SEEDS (Image 5 from User Request)
    // ----------------------------------------------------
    "watermelon-seeds-premium": {
        id: "watermelon-seeds-premium",
        title: "Watermelon Seeds (Premium Quality)",
        brand: "ARSHITH FRESH INDIA PVT LTD",
        rating: 5.0,
        reviews: 31,
        originalPrice: 113.05,
        salePrice: 99.00,
        image: "https://arshithfresh.com/cdn/shop/collections/dry_seeds_200x200_crop_center.jpg?v=1746963515",
        hoverImage: "https://arshithfresh.com/cdn/shop/collections/dry_seeds_200x200_crop_center.jpg?v=1746963515",
        category: "Dry Seeds",
        categorySlug: "dry-seeds",
        weights: [{ label: "250g", multiplier: 1 }, { label: "500g", multiplier: 1.8 }],
        description: "Crispy shelled watermelon seeds rich in zinc, magnesium, and healthy fats. Delicious healthy snacking option.",
        details: { "Ingredients": "100% Raw Shelled Watermelon Seeds.", "Storage": "Cool dry place.", "Shelf Life": "9 Months." }
    },
    "pumpkin-seeds-premium": {
        id: "pumpkin-seeds-premium",
        title: "Pumpkin Seeds (Premium Quality)",
        brand: "ARSHITH FRESH INDIA PVT LTD",
        rating: 5.0,
        reviews: 33,
        originalPrice: 65.32,
        salePrice: 56.00,
        image: "https://arshithfresh.com/cdn/shop/collections/dry_seeds_200x200_crop_center.jpg?v=1746963515",
        hoverImage: "https://arshithfresh.com/cdn/shop/collections/dry_seeds_200x200_crop_center.jpg?v=1746963515",
        category: "Dry Seeds",
        categorySlug: "dry-seeds",
        weights: [{ label: "250g", multiplier: 1 }, { label: "500g", multiplier: 1.8 }],
        description: "Raw green pumpkin seeds packed with protein, omega-3, and antioxidants for heart and brain health.",
        details: { "Ingredients": "100% Raw Pumpkin Seeds.", "Storage": "Keep in airtight jar.", "Shelf Life": "9 Months." }
    },
    "sunflower-seeds-premium": {
        id: "sunflower-seeds-premium",
        title: "Sunflower Seeds (Premium Quality)",
        brand: "ARSHITH FRESH INDIA PVT LTD",
        rating: 5.0,
        reviews: 29,
        originalPrice: 49.21,
        salePrice: 39.00,
        image: "https://arshithfresh.com/cdn/shop/collections/dry_seeds_200x200_crop_center.jpg?v=1746963515",
        hoverImage: "https://arshithfresh.com/cdn/shop/collections/dry_seeds_200x200_crop_center.jpg?v=1746963515",
        category: "Dry Seeds",
        categorySlug: "dry-seeds",
        weights: [{ label: "250g", multiplier: 1 }, { label: "500g", multiplier: 1.8 }],
        description: "Raw shelled sunflower kernels loaded with Vitamin E and dietary fiber.",
        details: { "Ingredients": "100% Raw Sunflower Seeds.", "Storage": "Cool dry place.", "Shelf Life": "9 Months." }
    },
    "flax-seeds-premium": {
        id: "flax-seeds-premium",
        title: "Flax Seeds (Premium Quality)",
        brand: "ARSHITH FRESH INDIA PVT LTD",
        rating: 5.0,
        reviews: 31,
        originalPrice: 36.92,
        salePrice: 29.00,
        image: "https://arshithfresh.com/cdn/shop/collections/dry_seeds_200x200_crop_center.jpg?v=1746963515",
        hoverImage: "https://arshithfresh.com/cdn/shop/collections/dry_seeds_200x200_crop_center.jpg?v=1746963515",
        category: "Dry Seeds",
        categorySlug: "dry-seeds",
        weights: [{ label: "250g", multiplier: 1 }, { label: "500g", multiplier: 1.8 }],
        description: "Superfood flax seeds rich in Omega-3 lignans and dietary fiber for daily wellness.",
        details: { "Ingredients": "100% Organic Raw Flax Seeds.", "Storage": "Cool dry place.", "Shelf Life": "9 Months." }
    },
    "sesame-seeds-premium": {
        id: "sesame-seeds-premium",
        title: "Sesame Seeds (Premium Quality)",
        brand: "ARSHITH FRESH INDIA PVT LTD",
        rating: 4.9,
        reviews: 27,
        originalPrice: 69.00,
        salePrice: 58.00,
        image: "https://arshithfresh.com/cdn/shop/collections/dry_seeds_200x200_crop_center.jpg?v=1746963515",
        hoverImage: "https://arshithfresh.com/cdn/shop/collections/dry_seeds_200x200_crop_center.jpg?v=1746963515",
        category: "Dry Seeds",
        categorySlug: "dry-seeds",
        weights: [{ label: "250g", multiplier: 1 }, { label: "500g", multiplier: 1.8 }],
        description: "Cleaned white sesame seeds (Nuvvulu) rich in calcium, iron, and sesame oil.",
        details: { "Ingredients": "100% Natural White Sesame Seeds.", "Storage": "Store dry.", "Shelf Life": "9 Months." }
    },
    "chia-seeds-premium": {
        id: "chia-seeds-premium",
        title: "Chia Seeds (Premium Quality)",
        brand: "ARSHITH FRESH INDIA PVT LTD",
        rating: 5.0,
        reviews: 35,
        originalPrice: 195.00,
        salePrice: 179.00,
        image: "https://arshithfresh.com/cdn/shop/collections/dry_seeds_200x200_crop_center.jpg?v=1746963515",
        hoverImage: "https://arshithfresh.com/cdn/shop/collections/dry_seeds_200x200_crop_center.jpg?v=1746963515",
        category: "Dry Seeds",
        categorySlug: "dry-seeds",
        weights: [{ label: "250g", multiplier: 1 }, { label: "500g", multiplier: 1.8 }],
        description: "Premium black chia seeds. Absorbs liquid to form high-fiber superfood chia pudding.",
        details: { "Ingredients": "100% Raw Chia Seeds.", "Storage": "Store dry.", "Shelf Life": "12 Months." }
    },
    "sabja-seeds-premium": {
        id: "sabja-seeds-premium",
        title: "Sabja Seeds (Premium Quality)",
        brand: "ARSHITH FRESH INDIA PVT LTD",
        rating: 4.9,
        reviews: 25,
        originalPrice: 88.00,
        salePrice: 68.00,
        image: "https://arshithfresh.com/cdn/shop/collections/dry_seeds_200x200_crop_center.jpg?v=1746963515",
        hoverImage: "https://arshithfresh.com/cdn/shop/collections/dry_seeds_200x200_crop_center.jpg?v=1746963515",
        category: "Dry Seeds",
        categorySlug: "dry-seeds",
        weights: [{ label: "250g", multiplier: 1 }, { label: "500g", multiplier: 1.8 }],
        description: "Natural sweet basil seeds (Sabja) with immense body cooling properties for falooda, nimbu pani, and summer drinks.",
        details: { "Ingredients": "100% Pure Basil Seeds.", "Storage": "Keep dry.", "Shelf Life": "12 Months." }
    },

    // ----------------------------------------------------
    // OILS (Screenshot 3 from User Request)
    // ----------------------------------------------------
    "groundnut-oil-premium": {
        id: "groundnut-oil-premium",
        title: "Groundnut Oil (Premium Quality)",
        brand: "ARSHITH FRESH INDIA PVT LTD",
        rating: 4.9,
        reviews: 67,
        originalPrice: 471.15,
        salePrice: 349.00,
        image: "https://arshithfresh.com/cdn/shop/files/WhatsApp_Image_2025-08-22_at_11.41.18_AM_1.jpg?v=1757334051&width=800",
        hoverImage: "https://arshithfresh.com/cdn/shop/files/WhatsApp_Image_2025-06-30_at_7.28.42_PM_1_3752719d-4e83-4d00-a8be-0c4d13076c23.jpg?v=1757334051&width=533",
        category: "Oils",
        categorySlug: "oils-natural-extracts",
        weights: [{ label: "500ml", multiplier: 0.6 }, { label: "1L", multiplier: 1 }, { label: "5L", multiplier: 4.5 }],
        description: "100% pure cold-pressed groundnut oil extracted from farm-fresh sun-dried peanuts using traditional wood presses (Ghani). Rich in vitamin E.",
        details: { "Ingredients": "100% Wood-Pressed Groundnut Oil.", "Storage": "Store cool.", "Shelf Life": "9 Months." }
    },
    "sunflower-oil-premium": {
        id: "sunflower-oil-premium",
        title: "Sunflower Oil (Premium Quality)",
        brand: "ARSHITH FRESH INDIA PVT LTD",
        rating: 4.91,
        reviews: 54,
        originalPrice: 608.78,
        salePrice: 499.00,
        image: "https://arshithfresh.com/cdn/shop/files/WhatsApp_Image_2025-08-22_at_11.41.18_AM.jpg?v=1757334052&width=800",
        hoverImage: "https://arshithfresh.com/cdn/shop/files/WhatsApp_Image_2025-06-28_at_4.14.16_PM_1_ee159cd3-c09a-443d-a28c-6c4b116ce904.jpg?v=1757334052&width=533",
        category: "Oils",
        categorySlug: "oils-natural-extracts",
        weights: [{ label: "1L", multiplier: 1 }, { label: "5L", multiplier: 4.6 }],
        description: "Light and heart-healthy sunflower oil extracted without chemical solvents. Great for everyday cooking.",
        details: { "Ingredients": "100% Cold-Pressed Sunflower Extract.", "Storage": "Store cool.", "Shelf Life": "9 Months." }
    },
    "sesame-oil-premium": {
        id: "sesame-oil-premium",
        title: "Sesame Oil (Premium Quality)",
        brand: "ARSHITH FRESH INDIA PVT LTD",
        rating: 5.0,
        reviews: 55,
        originalPrice: 185.00,
        salePrice: 148.00,
        image: "https://arshithfresh.com/cdn/shop/files/WhatsApp_Image_2025-08-22_at_11.41.18_AM_1.jpg?v=1757334051&width=800",
        hoverImage: "https://arshithfresh.com/cdn/shop/files/WhatsApp_Image_2025-06-30_at_7.28.42_PM_1_3752719d-4e83-4d00-a8be-0c4d13076c23.jpg?v=1757334051&width=533",
        category: "Oils",
        categorySlug: "oils-natural-extracts",
        weights: [{ label: "500ml", multiplier: 0.6 }, { label: "1L", multiplier: 1 }],
        description: "Traditional wood-pressed sesame seed oil with distinct nutty aroma. High stability for cooking.",
        details: { "Ingredients": "100% Wood-Pressed White Sesame Seeds.", "Storage": "Store tightly closed.", "Shelf Life": "9 Months." }
    },
    "castor-oil-premium": {
        id: "castor-oil-premium",
        title: "Castor Oil (Premium Quality)",
        brand: "ARSHITH FRESH INDIA PVT LTD",
        rating: 5.0,
        reviews: 50,
        originalPrice: 118.75,
        salePrice: 95.00,
        image: "https://arshithfresh.com/cdn/shop/files/WhatsApp_Image_2025-08-22_at_11.41.18_AM_2.jpg?v=1757334050&width=800",
        hoverImage: "https://arshithfresh.com/cdn/shop/files/WhatsApp_Image_2025-06-30_at_7.28.41_PM_887d3105-a7d1-45a3-b1b0-e0054291d902.jpg?v=1757334050&width=533",
        category: "Oils",
        categorySlug: "oils-natural-extracts",
        weights: [{ label: "250ml", multiplier: 0.6 }, { label: "500ml", multiplier: 1 }],
        description: "Thick, deeply nourishing castor oil ideal for hair growth, lash care, and natural skin hydration.",
        details: { "Ingredients": "100% Cold Pressed Castor Seeds.", "Storage": "Keep out of direct light.", "Shelf Life": "12 Months." }
    },
    "coconut-oil-premium": {
        id: "coconut-oil-premium",
        title: "Virgin Coconut Oil (Premium Quality)",
        brand: "ARSHITH FRESH INDIA PVT LTD",
        rating: 4.83,
        reviews: 54,
        originalPrice: 214.50,
        salePrice: 165.00,
        image: "https://arshithfresh.com/cdn/shop/files/WhatsApp_Image_2025-08-22_at_11.41.18_AM_2.jpg?v=1757334050&width=800",
        hoverImage: "https://arshithfresh.com/cdn/shop/files/WhatsApp_Image_2025-06-30_at_7.28.41_PM_887d3105-a7d1-45a3-b1b0-e0054291d902.jpg?v=1757334050&width=533",
        category: "Oils",
        categorySlug: "oils-natural-extracts",
        weights: [{ label: "500ml", multiplier: 0.6 }, { label: "1L", multiplier: 1 }],
        description: "Raw, unrefined cold-pressed coconut oil derived from sun-dried copra.",
        details: { "Ingredients": "100% Natural Dried Coconut Copra.", "Storage": "Store cool.", "Shelf Life": "12 Months." }
    },

    // ----------------------------------------------------
    // DRY FRUITS AND NUTS (Screenshots 1 & 2 from User Request)
    // ----------------------------------------------------
    "cashew-nuts-kaju-premium": {
        id: "cashew-nuts-kaju-premium",
        title: "Cashew nuts (Kaju) (Premium Quality)",
        brand: "ARSHITH FRESH INDIA PVT LTD",
        rating: 5.0,
        reviews: 43,
        originalPrice: 491.78,
        salePrice: 368.00,
        image: "https://arshithfresh.com/cdn/shop/collections/seeds_dry_fruits_nuts_webp_200x200_crop_center.jpg?v=1746963459",
        hoverImage: "https://arshithfresh.com/cdn/shop/collections/seeds_dry_fruits_nuts_webp_200x200_crop_center.jpg?v=1746963459",
        category: "Dry Fruits",
        categorySlug: "dry-fruits-nuts",
        weights: [{ label: "250g", multiplier: 1 }, { label: "500g", multiplier: 1.9 }, { label: "1kg", multiplier: 3.6 }],
        description: "Crisp, creamy W240 grade whole cashew nuts (Kaju) sourced directly from prime orchards.",
        details: { "Ingredients": "100% Whole Cashew Nuts.", "Storage": "Airtight box.", "Shelf Life": "6 Months." }
    },
    "almonds-badam-premium": {
        id: "almonds-badam-premium",
        title: "Almonds (Badam) (Premium Quality)",
        brand: "ARSHITH FRESH INDIA PVT LTD",
        rating: 5.0,
        reviews: 40,
        originalPrice: 438.18,
        salePrice: 347.00,
        image: "https://arshithfresh.com/cdn/shop/collections/seeds_dry_fruits_nuts_webp_200x200_crop_center.jpg?v=1746963459",
        hoverImage: "https://arshithfresh.com/cdn/shop/collections/seeds_dry_fruits_nuts_webp_200x200_crop_center.jpg?v=1746963459",
        category: "Dry Fruits",
        categorySlug: "dry-fruits-nuts",
        weights: [{ label: "250g", multiplier: 1 }, { label: "500g", multiplier: 1.85 }, { label: "1kg", multiplier: 3.5 }],
        description: "Hand-picked California almonds (Badam) packed with protein, fiber, and essential minerals.",
        details: { "Ingredients": "100% Raw California Almonds.", "Storage": "Cool dry place.", "Shelf Life": "9 Months." }
    },
    "figs-dry-anjeer-premium": {
        id: "figs-dry-anjeer-premium",
        title: "Figs (Dry Anjeer) (Premium Quality)",
        brand: "ARSHITH FRESH INDIA PVT LTD",
        rating: 5.0,
        reviews: 37,
        originalPrice: 734.01,
        salePrice: 579.00,
        image: "https://arshithfresh.com/cdn/shop/collections/seeds_dry_fruits_nuts_webp_200x200_crop_center.jpg?v=1746963459",
        hoverImage: "https://arshithfresh.com/cdn/shop/collections/seeds_dry_fruits_nuts_webp_200x200_crop_center.jpg?v=1746963459",
        category: "Dry Fruits",
        categorySlug: "dry-fruits-nuts",
        weights: [{ label: "250g", multiplier: 1 }, { label: "500g", multiplier: 1.9 }],
        description: "Naturally dried sweet Afghan figs (Anjeer) loaded with iron, dietary fiber, and essential vitamins.",
        details: { "Ingredients": "100% Organic Dry Figs.", "Storage": "Keep dry.", "Shelf Life": "6 Months." }
    },
    "pistachio-without-shell-premium": {
        id: "pistachio-without-shell-premium",
        title: "Pistachio (Without Shell) (Premium Quality)",
        brand: "ARSHITH FRESH INDIA PVT LTD",
        rating: 5.0,
        reviews: 39,
        originalPrice: 941.22,
        salePrice: 757.00,
        image: "https://arshithfresh.com/cdn/shop/collections/seeds_dry_fruits_nuts_webp_200x200_crop_center.jpg?v=1746963459",
        hoverImage: "https://arshithfresh.com/cdn/shop/collections/seeds_dry_fruits_nuts_webp_200x200_crop_center.jpg?v=1746963459",
        category: "Dry Fruits",
        categorySlug: "dry-fruits-nuts",
        weights: [{ label: "250g", multiplier: 1 }, { label: "500g", multiplier: 1.9 }],
        description: "Shelled green pistachio kernels. Ideal for sweets, bakery toppings, and premium snacking.",
        details: { "Ingredients": "100% Shelled Pistachios.", "Storage": "Refrigerate.", "Shelf Life": "6 Months." }
    },
    "walnuts-premium": {
        id: "walnuts-premium",
        title: "Walnuts (Premium Quality)",
        brand: "ARSHITH FRESH INDIA PVT LTD",
        rating: 5.0,
        reviews: 38,
        originalPrice: 728.64,
        salePrice: 516.00,
        image: "https://arshithfresh.com/cdn/shop/collections/seeds_dry_fruits_nuts_webp_200x200_crop_center.jpg?v=1746963459",
        hoverImage: "https://arshithfresh.com/cdn/shop/collections/seeds_dry_fruits_nuts_webp_200x200_crop_center.jpg?v=1746963459",
        category: "Dry Fruits",
        categorySlug: "dry-fruits-nuts",
        weights: [{ label: "250g", multiplier: 1 }, { label: "500g", multiplier: 1.9 }],
        description: "Shelled Kashmiri walnut halves (Akroot) rich in Omega-3 fatty acids.",
        details: { "Ingredients": "100% Walnut Kernels.", "Storage": "Store cool.", "Shelf Life": "6 Months." }
    },
    "raisins-kishmish-premium": {
        id: "raisins-kishmish-premium",
        title: "Raisins (Kishmish) (Premium Quality)",
        brand: "ARSHITH FRESH INDIA PVT LTD",
        rating: 5.0,
        reviews: 37,
        originalPrice: 154.10,
        salePrice: 144.00,
        image: "https://arshithfresh.com/cdn/shop/collections/seeds_dry_fruits_nuts_webp_200x200_crop_center.jpg?v=1746963459",
        hoverImage: "https://arshithfresh.com/cdn/shop/collections/seeds_dry_fruits_nuts_webp_200x200_crop_center.jpg?v=1746963459",
        category: "Dry Fruits",
        categorySlug: "dry-fruits-nuts",
        weights: [{ label: "250g", multiplier: 1 }, { label: "500g", multiplier: 1.9 }],
        description: "Sweet, juicy golden raisins (Kishmish) dried naturally from seedless green grapes.",
        details: { "Ingredients": "100% Dried Grapes.", "Storage": "Cool dry place.", "Shelf Life": "9 Months." }
    },
    "dates-kharjuram-premium": {
        id: "dates-kharjuram-premium",
        title: "Dates (Kharjuram) (Premium Quality)",
        brand: "ARSHITH FRESH INDIA PVT LTD",
        rating: 5.0,
        reviews: 41,
        originalPrice: 181.25,
        salePrice: 155.00,
        image: "https://arshithfresh.com/cdn/shop/collections/seeds_dry_fruits_nuts_webp_200x200_crop_center.jpg?v=1746963459",
        hoverImage: "https://arshithfresh.com/cdn/shop/collections/seeds_dry_fruits_nuts_webp_200x200_crop_center.jpg?v=1746963459",
        category: "Dry Fruits",
        categorySlug: "dry-fruits-nuts",
        weights: [{ label: "250g", multiplier: 1 }, { label: "500g", multiplier: 1.9 }],
        description: "Soft, naturally sweet premium dates (Kharjuram) loaded with natural energy.",
        details: { "Ingredients": "100% Natural Dates.", "Storage": "Store cool.", "Shelf Life": "9 Months." }
    },
    "ground-nuts-raw-premium": {
        id: "ground-nuts-raw-premium",
        title: "Ground Nuts- Raw (Premium Quality)",
        brand: "ARSHITH FRESH INDIA PVT LTD",
        rating: 5.0,
        reviews: 37,
        originalPrice: 71.02,
        salePrice: 63.00,
        image: "https://arshithfresh.com/cdn/shop/collections/seeds_dry_fruits_nuts_webp_200x200_crop_center.jpg?v=1746963459",
        hoverImage: "https://arshithfresh.com/cdn/shop/collections/seeds_dry_fruits_nuts_webp_200x200_crop_center.jpg?v=1746963459",
        category: "Dry Fruits",
        categorySlug: "dry-fruits-nuts",
        weights: [{ label: "250g", multiplier: 1 }, { label: "500g", multiplier: 1.9 }],
        description: "Raw unroasted peanuts (Verusenagapappu) direct from Andhra farms.",
        details: { "Ingredients": "100% Raw Groundnuts.", "Storage": "Store dry.", "Shelf Life": "6 Months." }
    },

    // ----------------------------------------------------
    // SPICE POWDERS
    // ----------------------------------------------------
    "chana-dal-spice-powderpappula-podi-premium": {
        id: "chana-dal-spice-powderpappula-podi-premium",
        title: "Chana Dal Spice Powder (Pappula Podi) (Premium Quality)",
        brand: "ARSHITH FRESH INDIA PVT LTD",
        rating: 5.0,
        reviews: 31,
        originalPrice: 80.00,
        salePrice: 59.00,
        image: "https://arshithfresh.com/cdn/shop/files/WhatsApp_Image_2025-07-08_at_4.19.00_PM_33a6719d-7dd6-4772-add2-2a37e2461d57.jpg?v=1757334044&width=800",
        hoverImage: "https://arshithfresh.com/cdn/shop/files/WhatsApp_Image_2025-06-30_at_8.11.37_PM_c2bafc14-a54c-4d90-ad91-a96218301ccf.jpg?v=1757334045&width=533",
        category: "Spice Powders",
        categorySlug: "spice-powders-podulu",
        weights: [{ label: "100g", multiplier: 1 }, { label: "250g", multiplier: 2.2 }],
        description: "Crafted from roasted organic chana dal and sun-dried chillies.",
        details: { "Ingredients": "Roasted Chana Dal, Dried Red Chillies, Garlic, Salt.", "Storage": "Airtight container.", "Shelf Life": "6 Months." }
    },
    "kobbari-karam-podi-premium": {
        id: "kobbari-karam-podi-premium",
        title: "Kobbari Karam Podi (Dry Coconut Spice Powder)",
        brand: "ARSHITH FRESH INDIA PVT LTD",
        rating: 5.0,
        reviews: 35,
        originalPrice: 80.83,
        salePrice: 59.00,
        image: "https://arshithfresh.com/cdn/shop/files/WhatsApp_Image_2025-07-08_at_4.19.00_PM_33a6719d-7dd6-4772-add2-2a37e2461d57.jpg?v=1757334044&width=800",
        hoverImage: "https://arshithfresh.com/cdn/shop/files/WhatsApp_Image_2025-06-30_at_8.11.38_PM_1_c7c68b45-ca76-4b30-b6dc-d9cc22cbfe3a.jpg?v=1757334044&width=533",
        category: "Spice Powders",
        categorySlug: "spice-powders-podulu",
        weights: [{ label: "100g", multiplier: 1 }, { label: "250g", multiplier: 2.2 }],
        description: "Flavorful condiment made with grated dry coconut, garlic, and fiery red chillies.",
        details: { "Ingredients": "Dry Coconut, Red Chilli, Garlic, Salt.", "Storage": "Airtight jar.", "Shelf Life": "6 Months." }
    },
    "nalla-karam-podi-premium": {
        id: "nalla-karam-podi-premium",
        title: "Traditional Nalla Karam Podi (Black Spice Mix)",
        brand: "ARSHITH FRESH INDIA PVT LTD",
        rating: 5.0,
        reviews: 31,
        originalPrice: 80.83,
        salePrice: 59.00,
        image: "https://arshithfresh.com/cdn/shop/files/WhatsApp_Image_2025-07-08_at_4.19.02_PM_c823be1b-85bf-4371-8236-9e09b3af2ef5.jpg?v=1757334045&width=800",
        hoverImage: "https://arshithfresh.com/cdn/shop/files/WhatsApp_Image_2025-06-30_at_8.11.37_PM_1_0fc408cf-b6bb-4f12-b4ef-41cfefa89e40.jpg?v=1757334045&width=533",
        category: "Spice Powders",
        categorySlug: "spice-powders-podulu",
        weights: [{ label: "100g", multiplier: 1 }, { label: "250g", multiplier: 2.2 }],
        description: "Authentic spicy mix prepared with roasted lentils, coriander seeds, and red chillies.",
        details: { "Ingredients": "Coriander, Red Chillies, Urad Dal, Tamarind, Salt.", "Storage": "Airtight jar.", "Shelf Life": "6 Months." }
    },
    "garlic-powdervelluli-karam-podi-premium": {
        id: "garlic-powdervelluli-karam-podi-premium",
        title: "Vellulli Karam Podi (Garlic Chilli Powder)",
        brand: "ARSHITH FRESH INDIA PVT LTD",
        rating: 4.97,
        reviews: 38,
        originalPrice: 80.83,
        salePrice: 59.00,
        image: "https://arshithfresh.com/cdn/shop/files/WhatsApp_Image_2025-07-08_at_4.19.01_PM_3_6262e177-7c59-4137-afc4-5d486daa9175.jpg?v=1757334046&width=800",
        hoverImage: "https://arshithfresh.com/cdn/shop/files/WhatsApp_Image_2025-07-08_at_4.19.01_PM_443a54ed-b6f7-46fb-8fc3-ba74bf06cc93.jpg?v=1757334046&width=533",
        category: "Spice Powders",
        categorySlug: "spice-powders-podulu",
        weights: [{ label: "100g", multiplier: 1 }, { label: "250g", multiplier: 2.2 }],
        description: "Pungent, highly aromatic garlic spice powder.",
        details: { "Ingredients": "Fresh Garlic, Red Chillies, Cumin, Salt.", "Storage": "Airtight container.", "Shelf Life": "6 Months." }
    }
};

// Global Shopping Cart State Persistent across all pages
let CART_ITEMS = JSON.parse(localStorage.getItem("ARSHITH_CART") || "[]");

function saveCart() {
    localStorage.setItem("ARSHITH_CART", JSON.stringify(CART_ITEMS));
}

function addToCart(item) {
    const existingIndex = CART_ITEMS.findIndex(i => i.title === item.title && i.weight === item.weight);
    if (existingIndex > -1) {
        CART_ITEMS[existingIndex].quantity += item.quantity || 1;
    } else {
        CART_ITEMS.push({
            title: item.title,
            price: item.price,
            weight: item.weight || "Standard",
            quantity: item.quantity || 1,
            image: item.image || ""
        });
    }
    saveCart();
    updateCartUI();
    openItemAddedModal(item);
}

function openItemAddedModal(addedItem) {
    let modal = document.getElementById("itemAddedModal");
    if (!modal) {
        modal = document.createElement("div");
        modal.id = "itemAddedModal";
        modal.className = "item-added-modal-backdrop";
        document.body.appendChild(modal);
    }

    const totalCount = CART_ITEMS.reduce((sum, i) => sum + i.quantity, 0);

    modal.innerHTML = `
        <div class="item-added-modal-dialog">
            <div class="item-added-header">
                <span class="item-added-title">✓ Item added to your cart</span>
                <button class="item-added-close-btn" onclick="closeItemAddedModal()">&times;</button>
            </div>
            
            <div class="item-added-body">
                <img src="${addedItem.image || 'https://arshithfresh.com/cdn/shop/files/4_6d56df69-1c9f-4f05-b1a7-ca631fc7b9aa.png'}" alt="${addedItem.title}" class="item-added-img">
                <div class="item-added-info">
                    <h4 class="item-added-name">${addedItem.title}</h4>
                    <p class="item-added-weight">Weight: ${addedItem.weight || 'Standard'}</p>
                </div>
            </div>

            <div class="item-added-actions">
                <button class="item-added-view-cart-btn" onclick="window.location.href='cart.html'">
                    View cart (${totalCount})
                </button>
                <button class="item-added-checkout-btn" onclick="closeItemAddedModal(); openCheckoutModal();">
                    Check out
                </button>
                <div class="item-added-continue-wrap">
                    <a href="javascript:void(0)" onclick="closeItemAddedModal()" class="item-added-continue-link">Continue shopping</a>
                </div>
            </div>
        </div>
    `;

    modal.classList.add("open");
    document.body.style.overflow = "hidden";

    // Close on backdrop click
    modal.onclick = function(e) {
        if (e.target === modal) {
            closeItemAddedModal();
        }
    };
}

function closeItemAddedModal() {
    const modal = document.getElementById("itemAddedModal");
    if (modal) {
        modal.classList.remove("open");
        document.body.style.overflow = "";
    }
}

function updateCartQuantity(index, newQty) {
    if (newQty <= 0) {
        CART_ITEMS.splice(index, 1);
    } else {
        CART_ITEMS[index].quantity = newQty;
    }
    saveCart();
    updateCartUI();
}

function removeFromCart(index) {
    CART_ITEMS.splice(index, 1);
    saveCart();
    updateCartUI();
}

function updateCartUI() {
    const counts = document.querySelectorAll(".cart-count");
    const totalCount = CART_ITEMS.reduce((sum, item) => sum + item.quantity, 0);
    counts.forEach(el => el.textContent = totalCount);

    if (typeof renderCartPage === "function") {
        renderCartPage();
    }

    const drawerBody = document.getElementById("cartDrawerBody");
    const drawerFooter = document.getElementById("cartDrawerFooter");
    if (!drawerBody || !drawerFooter) return;

    if (CART_ITEMS.length === 0) {
        drawerBody.innerHTML = `
            <div class="empty-cart-view">
                <div class="empty-cart-icon">🛒</div>
                <h3>Your cart is empty</h3>
                <p>Looks like you haven't added any fresh items to your cart yet.</p>
                <a href="collections.html" class="browse-btn" onclick="closeCartDrawer()">Shop Collections</a>
            </div>
        `;
        drawerFooter.innerHTML = "";
        return;
    }

    const subtotal = CART_ITEMS.reduce((sum, i) => sum + (i.price * i.quantity), 0);
    const freeShippingThreshold = 1000;
    const remainingForFree = freeShippingThreshold - subtotal;
    const progress = Math.min(100, (subtotal / freeShippingThreshold) * 100);

    drawerBody.innerHTML = `
        <div class="cart-shipping-notice">
            <p>
                ${remainingForFree > 0 
                    ? `Add <strong>Rs. ${remainingForFree.toFixed(2)}</strong> more to get <strong>FREE SHIPPING</strong>!` 
                    : `🎉 You unlocked <strong>FREE SHIPPING</strong>!`}
            </p>
            <div class="shipping-progress-track">
                <div class="shipping-progress-fill" style="width: ${progress}%"></div>
            </div>
        </div>

        <div class="cart-items-list">
            ${CART_ITEMS.map((item, index) => `
                <div class="cart-item-card">
                    <img src="${item.image || 'https://arshithfresh.com/cdn/shop/files/4_6d56df69-1c9f-4f05-b1a7-ca631fc7b9aa.png'}" alt="${item.title}" class="cart-item-img">
                    <div class="cart-item-details">
                        <div class="cart-item-title">${item.title}</div>
                        <div class="cart-item-weight">Weight: ${item.weight}</div>
                        <div class="cart-item-price">Rs. ${(item.price * item.quantity).toFixed(2)}</div>
                        <div class="cart-item-controls">
                            <div class="cart-qty-picker">
                                <button onclick="updateCartQuantity(${index}, ${item.quantity - 1})">&minus;</button>
                                <span>${item.quantity}</span>
                                <button onclick="updateCartQuantity(${index}, ${item.quantity + 1})">+</button>
                            </div>
                            <button class="remove-cart-item-btn" onclick="removeFromCart(${index})">Remove</button>
                        </div>
                    </div>
                </div>
            `).join("")}
        </div>
    `;

    drawerFooter.innerHTML = `
        <div class="cart-subtotal-row">
            <span>Subtotal</span>
            <span class="subtotal-amount">Rs. ${subtotal.toFixed(2)}</span>
        </div>
        <p class="cart-subtotal-note">Taxes and shipping calculated at checkout</p>
        <button class="drawer-checkout-btn" id="drawerCheckoutBtn">Proceed to Checkout</button>
    `;

    const checkoutBtn = drawerFooter.querySelector("#drawerCheckoutBtn");
    if (checkoutBtn) {
        checkoutBtn.addEventListener("click", () => {
            closeCartDrawer();
            openCheckoutModal();
        });
    }
}

function openCartDrawer() {
    window.location.href = "cart.html";
}

function closeCartDrawer() {
    const drawer = document.getElementById("cartDrawer");
    const backdrop = document.getElementById("cartBackdrop");
    if (drawer && backdrop) {
        drawer.classList.remove("open");
        backdrop.classList.remove("open");
        document.body.style.overflow = "";
    }
}

function openCheckoutModal() {
    window.location.href = "checkout.html";
}

function closeCheckoutModal() {
    const modal = document.getElementById("checkoutModal");
    if (modal) {
        modal.classList.remove("open");
        document.body.style.overflow = "";
    }
}

function renderCheckoutForm() {
    const body = document.getElementById("checkoutModalBody");
    if (!body) return;

    const subtotal = CART_ITEMS.reduce((sum, i) => sum + (i.price * i.quantity), 0);
    const shipping = subtotal >= 1000 ? 0 : 70;
    const grandTotal = subtotal + shipping;

    body.innerHTML = `
        <div class="checkout-grid">
            <div class="checkout-summary-pane">
                <h3 class="checkout-pane-title">Order Summary (${CART_ITEMS.length} Items)</h3>
                <div class="checkout-items-mini-list">
                    ${CART_ITEMS.map(i => `
                        <div class="mini-item-row">
                            <img src="${i.image}" alt="${i.title}" class="mini-item-img">
                            <div class="mini-item-info">
                                <div class="mini-item-title">${i.title}</div>
                                <div class="mini-item-meta">${i.weight} &times; ${i.quantity}</div>
                            </div>
                            <div class="mini-item-price">Rs. ${(i.price * i.quantity).toFixed(2)}</div>
                        </div>
                    `).join("")}
                </div>
                <div class="checkout-totals">
                    <div class="total-row"><span>Subtotal</span><span>Rs. ${subtotal.toFixed(2)}</span></div>
                    <div class="total-row"><span>Shipping</span><span>${shipping === 0 ? 'FREE' : 'Rs. 70.00'}</span></div>
                    <div class="total-row grand-total"><span>Total Payable</span><span>Rs. ${grandTotal.toFixed(2)}</span></div>
                </div>
            </div>
            <div class="checkout-form-pane">
                <h3 class="checkout-pane-title">Shipping & Payment Details</h3>
                <form id="checkoutForm" onsubmit="handlePlaceOrder(event, ${grandTotal})">
                    <div class="form-group">
                        <label>Full Name *</label>
                        <input type="text" required placeholder="e.g. John Doe" class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Phone Number *</label>
                        <input type="tel" required placeholder="10-digit mobile number" class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Delivery Address *</label>
                        <input type="text" required placeholder="House No, Street, Landmark" class="form-control">
                    </div>
                    <div class="form-row-dual">
                        <div class="form-group">
                            <label>City *</label>
                            <input type="text" required placeholder="City" class="form-control">
                        </div>
                        <div class="form-group">
                            <label>Pincode *</label>
                            <input type="text" required placeholder="Pincode" class="form-control">
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Payment Method</label>
                        <div class="payment-options">
                            <label class="payment-radio-card">
                                <input type="radio" name="payment" value="cod" checked>
                                <span>💵 Cash on Delivery (COD)</span>
                            </label>
                            <label class="payment-radio-card">
                                <input type="radio" name="payment" value="upi">
                                <span>⚡ UPI / PhonePe / Google Pay / QR</span>
                            </label>
                        </div>
                    </div>
                    <button type="submit" class="place-order-submit-btn">Place Order (Rs. ${grandTotal.toFixed(2)})</button>
                </form>
            </div>
        </div>
    `;
}

function handlePlaceOrder(e, total) {
    e.preventDefault();
    const orderId = "AF-" + Math.floor(100000 + Math.random() * 900000);
    CART_ITEMS = [];
    saveCart();
    updateCartUI();
    closeCheckoutModal();

    const successModal = document.getElementById("orderSuccessModal");
    const successContent = document.getElementById("orderSuccessContent");
    if (successModal && successContent) {
        successContent.innerHTML = `
            <div class="order-success-box">
                <div class="success-checkmark-icon">✓</div>
                <h2>Order Placed Successfully!</h2>
                <p>Thank you for shopping with <strong>Arshith Fresh</strong>.</p>
                <div class="order-ref-badge">Order ID: <strong>#${orderId}</strong></div>
                <p class="order-notice-text">We have sent order details to your phone. Delivery expected in 2-4 days.</p>
                <button class="continue-shopping-btn" onclick="closeOrderSuccessModal()">Continue Shopping</button>
            </div>
        `;
        successModal.classList.add("open");
        document.body.style.overflow = "hidden";
    }
}

function closeOrderSuccessModal() {
    const successModal = document.getElementById("orderSuccessModal");
    if (successModal) {
        successModal.classList.remove("open");
        document.body.style.overflow = "";
    }
}

// ----------------------------------------------------
// DYNAMIC PAGE INITIALIZERS (COLLECTIONS & PRODUCT DETAIL)
// ----------------------------------------------------

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function getCategoryFromURL() {
    const path = window.location.pathname.toLowerCase();
    if (path.includes("oils-natural-extracts") || path.includes("oils.")) return "oils-natural-extracts";
    if (path.includes("dry-fruits-nuts") || path.includes("dry-fruits.")) return "dry-fruits-nuts";
    if (path.includes("dry-seeds")) return "dry-seeds";
    if (path.includes("ghee-and-honey") || path.includes("ghee.")) return "ghee-and-honey";
    if (path.includes("cooking-essentials")) return "cooking-essentials";
    if (path.includes("spice-powders-podulu") || path.includes("spice-powders.")) return "spice-powders-podulu";
    if (path.includes("spices.")) return "spices";
    return getQueryParam("category") || "all";
}

// Collections Page Renderer
function initCollectionsPage() {
    const container = document.getElementById("collectionsProductGrid");
    if (!container) return;

    let selectedCategory = getCategoryFromURL();
    let activePriceMax = 1000;
    let activeSort = "featured";

    // Set initial category pill
    const catPills = document.querySelectorAll(".category-pill");
    catPills.forEach(pill => {
        const cat = pill.getAttribute("data-category");
        if (cat === selectedCategory || (selectedCategory.includes(cat) && cat !== "all")) {
            pill.classList.add("active");
        } else {
            pill.classList.remove("active");
        }
        pill.addEventListener("click", () => {
            catPills.forEach(p => p.classList.remove("active"));
            pill.classList.add("active");
            selectedCategory = pill.getAttribute("data-category");
            renderGrid();
        });
    });

    // Price Filter Slider Listener
    const priceSlider = document.getElementById("priceRangeInput");
    const priceDisplay = document.getElementById("priceRangeVal");
    if (priceSlider && priceDisplay) {
        priceSlider.addEventListener("input", (e) => {
            activePriceMax = parseFloat(e.target.value);
            priceDisplay.textContent = activePriceMax;
            renderGrid();
        });
    }

    // Sort Dropdown Listener
    const sortSelect = document.getElementById("sortSelect");
    if (sortSelect) {
        sortSelect.addEventListener("change", (e) => {
            activeSort = e.target.value;
            renderGrid();
        });
    }

    function renderGrid() {
        const productsList = Object.values(PRODUCTS_DATA);
        let filtered = productsList.filter(p => {
            // Category check
            let catMatch = false;
            if (selectedCategory === "all") {
                catMatch = true;
            } else if (p.categorySlug === selectedCategory || p.category.toLowerCase().includes(selectedCategory.toLowerCase())) {
                catMatch = true;
            } else if (selectedCategory === "oils-natural-extracts" && p.category === "Oils") {
                catMatch = true;
            } else if (selectedCategory === "dry-fruits-nuts" && p.category === "Dry Fruits") {
                catMatch = true;
            } else if (selectedCategory === "spice-powders-podulu" && p.category === "Spice Powders") {
                catMatch = true;
            }

            // Price check
            const priceMatch = p.salePrice <= activePriceMax;
            return catMatch && priceMatch;
        });

        // Sorting
        if (activeSort === "title-asc" || activeSort === "name") {
            filtered.sort((a, b) => a.title.localeCompare(b.title));
        } else if (activeSort === "title-desc") {
            filtered.sort((a, b) => b.title.localeCompare(a.title));
        } else if (activeSort === "price-low") {
            filtered.sort((a, b) => a.salePrice - b.salePrice);
        } else if (activeSort === "price-high") {
            filtered.sort((a, b) => b.salePrice - a.salePrice);
        } else if (activeSort === "rating") {
            filtered.sort((a, b) => b.rating - a.rating);
        }

        // Count display
        const countDisplay = document.getElementById("collectionProductCount");
        if (countDisplay) {
            countDisplay.textContent = `${filtered.length} Products Found`;
        }

        // Update Title Banner
        const bannerTitle = document.getElementById("collectionBannerTitle");
        if (bannerTitle) {
            bannerTitle.textContent = selectedCategory === "all" ? "All Collections" : (PRODUCTS_DATA[Object.keys(PRODUCTS_DATA).find(k => PRODUCTS_DATA[k].categorySlug === selectedCategory)]?.category || "Our Collection");
        }

        if (filtered.length === 0) {
            container.innerHTML = `
                <div class="no-products-found">
                    <h3>No products found</h3>
                    <p>Try clearing filters or adjusting your price slider.</p>
                </div>
            `;
            return;
        }

        container.innerHTML = filtered.map(p => {
            const discountPct = Math.round(((p.originalPrice - p.salePrice) / p.originalPrice) * 100);
            return `
                <div class="collection-product-card-box">
                    <span class="card-discount-badge">${discountPct}% Off</span>
                    <a href="product.html?id=${p.id}" class="card-link-wrapper">
                        <div class="product-card-img-wrap">
                            <img src="${p.image}" alt="${p.title}" class="primary-img">
                            <img src="${p.hoverImage || p.image}" alt="${p.title} Hover" class="hover-img">
                        </div>
                        <div class="product-info">
                            <h3 class="card-title-serif">${p.title}</h3>
                            <div class="rating-stars-row">
                                <span class="stars-green">★★★★★</span>
                                <span class="reviews-count">(${p.reviews})</span>
                            </div>
                            <div class="card-price-row">
                                <span class="card-orig-price">Rs. ${p.originalPrice.toFixed(2)}</span>
                                <span class="card-from-sale">From Rs. ${p.salePrice.toFixed(2)}</span>
                            </div>
                        </div>
                    </a>
                    <button class="choose-options-btn" onclick="openProductModal('${p.id}')">
                        Choose options
                    </button>
                </div>
            `;
        }).join("");
    }

    renderGrid();
}

// Product Detail Page Renderer
function initProductDetailPage() {
    const detailContainer = document.getElementById("productDetailView");
    if (!detailContainer) return;

    const productId = getQueryParam("id") || getQueryParam("product") || "groundnut-oil-premium";
    const product = PRODUCTS_DATA[productId] || PRODUCTS_DATA["groundnut-oil-premium"];

    // Update Document Title
    document.title = `${product.title} | Arshith Fresh`;

    // Render Main Product View
    let selectedWeight = product.weights[0];
    let qty = 1;

    function renderDetail() {
        const currentSalePrice = (product.salePrice * selectedWeight.multiplier).toFixed(2);
        const currentOrigPrice = (product.originalPrice * selectedWeight.multiplier).toFixed(2);
        const savings = (currentOrigPrice - currentSalePrice).toFixed(2);

        detailContainer.innerHTML = `
            <div class="product-detail-layout">
                <!-- Left: Image Gallery -->
                <div class="product-gallery-pane">
                    <div class="main-gallery-stage">
                        <img src="${product.image}" id="mainDetailImg" alt="${product.title}" class="main-gallery-img">
                    </div>
                    <div class="gallery-thumbs-row">
                        <img src="${product.image}" class="thumb-item active" onclick="switchGalleryImg('${product.image}', this)">
                        <img src="${product.hoverImage || product.image}" class="thumb-item" onclick="switchGalleryImg('${product.hoverImage || product.image}', this)">
                    </div>
                </div>

                <!-- Right: Information & Actions -->
                <div class="product-summary-pane">
                    <div class="product-breadcrumb">
                        <a href="index.html">Home</a> &rsaquo; 
                        <a href="collections.html?category=${product.categorySlug}">${product.category}</a> &rsaquo; 
                        <span>${product.title}</span>
                    </div>
                    <div class="product-brand-tag">${product.brand}</div>
                    <h1 class="product-main-title">${product.title}</h1>
                    <div class="product-ratings-row">
                        <div class="rating-stars">★★★★★</div>
                        <span class="rating-score">${product.rating} / 5.0</span>
                        <span class="rating-count">(${product.reviews} Customer Reviews)</span>
                    </div>

                    <div class="product-price-box">
                        <span class="detail-sale-price">Rs. ${currentSalePrice}</span>
                        <span class="detail-orig-price">Rs. ${currentOrigPrice}</span>
                        <span class="detail-savings-badge">Save Rs. ${savings}</span>
                    </div>

                    <div class="stock-status-badge">✓ In Stock &amp; Ready to Ship</div>

                    <!-- Weight Selector -->
                    <div class="variant-picker-section">
                        <label class="variant-label">Select Weight / Quantity Variant:</label>
                        <div class="variant-pills-wrap">
                            ${product.weights.map((w, idx) => `
                                <button class="variant-pill ${w.label === selectedWeight.label ? 'active' : ''}" 
                                        data-index="${idx}">
                                    ${w.label}
                                </button>
                            `).join("")}
                        </div>
                    </div>

                    <!-- Qty & CTA Buttons -->
                    <div class="detail-cta-row">
                        <div class="detail-qty-picker">
                            <button class="qty-btn minus" id="detailQtyMinus">&minus;</button>
                            <span class="qty-val" id="detailQtyVal">${qty}</span>
                            <button class="qty-btn plus" id="detailQtyPlus">+</button>
                        </div>
                        <button class="add-to-cart-cta-btn" id="detailAddToCartBtn">Add to Cart</button>
                        <button class="buy-now-cta-btn" id="detailBuyNowBtn">Buy Now</button>
                    </div>

                    <!-- Trust Badges -->
                    <div class="trust-features-grid">
                        <div class="trust-feature-card">
                            <div class="feature-icon">🌿</div>
                            <div class="feature-title">100% Organic</div>
                        </div>
                        <div class="trust-feature-card">
                            <div class="feature-icon">🚚</div>
                            <div class="feature-title">Free Shipping > ₹1000</div>
                        </div>
                        <div class="trust-feature-card">
                            <div class="feature-icon">💵</div>
                            <div class="feature-title">COD Available</div>
                        </div>
                    </div>

                    <!-- Description & Details Tabs -->
                    <div class="product-specs-accordion">
                        <div class="accordion-tab active">
                            <div class="tab-header">Description</div>
                            <div class="tab-content">${product.description}</div>
                        </div>
                        <div class="accordion-tab">
                            <div class="tab-header">Product Details</div>
                            <div class="tab-content">
                                <ul>
                                    ${Object.entries(product.details || {}).map(([k, v]) => `<li><strong>${k}:</strong> ${v}</li>`).join("")}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Customer Reviews Section -->
            <section class="customer-reviews-section">
                <h2 class="reviews-section-title">Customer Reviews &amp; Ratings</h2>
                <div class="reviews-summary-grid">
                    <div class="score-card">
                        <div class="big-score">${product.rating}</div>
                        <div class="rating-stars">★★★★★</div>
                        <div class="total-reviews-lbl">Based on ${product.reviews} reviews</div>
                    </div>
                    <div class="score-bars">
                        <div class="bar-row"><span>5 Stars</span><div class="bar-track"><div class="bar-fill" style="width: 90%"></div></div><span>90%</span></div>
                        <div class="bar-row"><span>4 Stars</span><div class="bar-track"><div class="bar-fill" style="width: 10%"></div></div><span>10%</span></div>
                        <div class="bar-row"><span>3 Stars</span><div class="bar-track"><div class="bar-fill" style="width: 0%"></div></div><span>0%</span></div>
                    </div>
                </div>
            </section>
        `;

        // Attach variant click events
        const pillBtns = detailContainer.querySelectorAll(".variant-pill");
        pillBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                const idx = parseInt(btn.getAttribute("data-index"));
                selectedWeight = product.weights[idx];
                renderDetail();
            });
        });

        // Attach Qty events
        const minusBtn = detailContainer.querySelector("#detailQtyMinus");
        const plusBtn = detailContainer.querySelector("#detailQtyPlus");
        const qtyVal = detailContainer.querySelector("#detailQtyVal");
        if (minusBtn && plusBtn && qtyVal) {
            minusBtn.addEventListener("click", () => {
                if (qty > 1) {
                    qty--;
                    qtyVal.textContent = qty;
                }
            });
            plusBtn.addEventListener("click", () => {
                qty++;
                qtyVal.textContent = qty;
            });
        }

        // CTA Add to Cart
        const addToCartBtn = detailContainer.querySelector("#detailAddToCartBtn");
        if (addToCartBtn) {
            addToCartBtn.addEventListener("click", () => {
                addToCart({
                    title: product.title,
                    price: parseFloat(currentSalePrice),
                    weight: selectedWeight.label,
                    quantity: qty,
                    image: product.image
                });
                openCartDrawer();
            });
        }

        // CTA Buy Now
        const buyNowBtn = detailContainer.querySelector("#detailBuyNowBtn");
        if (buyNowBtn) {
            buyNowBtn.addEventListener("click", () => {
                addToCart({
                    title: product.title,
                    price: parseFloat(currentSalePrice),
                    weight: selectedWeight.label,
                    quantity: qty,
                    image: product.image
                });
                openCheckoutModal();
            });
        }
    }

    renderDetail();
    renderRelatedProducts(product);
}

function switchGalleryImg(src, thumbElem) {
    const mainImg = document.getElementById("mainDetailImg");
    if (mainImg) mainImg.src = src;
    const thumbs = document.querySelectorAll(".thumb-item");
    thumbs.forEach(t => t.classList.remove("active"));
    if (thumbElem) thumbElem.classList.add("active");
}

function renderRelatedProducts(currentProduct) {
    const container = document.getElementById("relatedProductsGrid");
    if (!container) return;

    const related = Object.values(PRODUCTS_DATA)
        .filter(p => p.id !== currentProduct.id && p.category === currentProduct.category)
        .slice(0, 4);

    const fallbackList = Object.values(PRODUCTS_DATA).slice(0, 4);
    const displayList = related.length >= 2 ? related : fallbackList;

    container.innerHTML = displayList.map(p => `
        <div class="product-card">
            <a href="product.html?id=${p.id}" class="product-card-link">
                <div class="product-image-container">
                    <img src="${p.image}" alt="${p.title}" class="primary-img">
                    <img src="${p.hoverImage || p.image}" alt="${p.title} Hover" class="hover-img">
                </div>
                <div class="product-info">
                    <h3 class="card__heading">${p.title}</h3>
                    <div class="price-box">
                        <span class="sale-price">Rs. ${p.salePrice.toFixed(2)}</span>
                    </div>
                </div>
            </a>
        </div>
    `).join("");
}

// Quick View Modal Renderer
let currentModalProduct = null;
let currentSelectedWeight = null;

function openProductModal(productIdSlug) {
    let p = PRODUCTS_DATA[productIdSlug] || PRODUCTS_DATA["groundnut-oil-premium"];
    currentModalProduct = p;
    currentSelectedWeight = p.weights[0];

    renderProductModal();

    const modal = document.getElementById("productDetailModal");
    if (modal) {
        modal.classList.add("open");
        document.body.style.overflow = "hidden";
    }
}

function closeProductModal() {
    const modal = document.getElementById("productDetailModal");
    if (modal) {
        modal.classList.remove("open");
        document.body.style.overflow = "";
    }
}

function renderProductModal() {
    const container = document.getElementById("productModalContent");
    if (!container || !currentModalProduct) return;

    const p = currentModalProduct;
    const currentPrice = (p.salePrice * currentSelectedWeight.multiplier).toFixed(2);
    const currentOrigPrice = (p.originalPrice * currentSelectedWeight.multiplier).toFixed(2);

    container.innerHTML = `
        <div class="quick-modal-grid">
            <div class="quick-modal-media">
                <img src="${p.image}" alt="${p.title}">
            </div>
            <div class="quick-modal-info">
                <h2 class="quick-modal-title">${p.title}</h2>
                <div class="quick-modal-rating">★★★★★ ${p.rating} (${p.reviews} Reviews)</div>
                <div class="quick-modal-price">
                    <span class="modal-sale">Rs. ${currentPrice}</span>
                    <span class="modal-orig">Rs. ${currentOrigPrice}</span>
                </div>
                <div class="quick-modal-weight-label">Weight: ${currentSelectedWeight.label}</div>
                <p class="quick-modal-desc">${p.description}</p>
                <div class="quick-modal-actions">
                    <a href="product.html?id=${p.id}" class="view-full-details-btn">View Full Product Details &rarr;</a>
                    <button class="add-to-cart-cta-btn" onclick="addToCart({title: '${p.title}', price: ${currentPrice}, weight: '${currentSelectedWeight.label}', image: '${p.image}'}); closeProductModal();">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Setup Modal Events
function setupModalEvents() {
    const productModal = document.getElementById("productDetailModal");
    if (productModal) {
        productModal.addEventListener("click", (e) => {
            if (e.target === productModal) closeProductModal();
        });
    }

    const cartBackdrop = document.getElementById("cartBackdrop");
    if (cartBackdrop) cartBackdrop.addEventListener("click", closeCartDrawer);

    const checkoutModal = document.getElementById("checkoutModal");
    if (checkoutModal) {
        checkoutModal.addEventListener("click", (e) => {
            if (e.target === checkoutModal) closeCheckoutModal();
        });
    }

    const cartDrawerClose = document.getElementById("cartDrawerCloseBtn");
    if (cartDrawerClose) cartDrawerClose.addEventListener("click", closeCartDrawer);

    const checkoutClose = document.getElementById("checkoutCloseBtn");
    if (checkoutClose) checkoutClose.addEventListener("click", closeCheckoutModal);

    const productModalClose = document.getElementById("productModalCloseBtn");
    if (productModalClose) productModalClose.addEventListener("click", closeProductModal);
}

// Global Toast Notification Helper
function showToast(message) {
    let toast = document.getElementById("arshithToast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "arshithToast";
        toast.className = "arshith-toast";
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 2800);
}

// Extract slug from URL helper
function extractSlugFromUrl(url) {
    if (!url) return null;
    if (url.includes("/products/")) {
        const parts = url.split("/products/");
        return parts[1].split("?")[0].split("#")[0].replace(/\/$/, "");
    }
    if (url.includes("id=")) {
        const parts = url.split("id=");
        return parts[1].split("&")[0];
    }
    return null;
}

// Main DOM Listener
document.addEventListener("DOMContentLoaded", () => {
    // 1. Mobile Menu Drawer Navigation
    const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
    const mobileDrawer = document.getElementById("mobileDrawer");
    const drawerCloseBtn = document.querySelector(".drawer-close-btn");
    const drawerOverlay = document.getElementById("drawerOverlay");

    function toggleDrawer(open) {
        if (open) {
            if (mobileDrawer) mobileDrawer.classList.add("open");
            if (drawerOverlay) drawerOverlay.classList.add("open");
            document.body.style.overflow = "hidden";
        } else {
            if (mobileDrawer) mobileDrawer.classList.remove("open");
            if (drawerOverlay) drawerOverlay.classList.remove("open");
            document.body.style.overflow = "";
        }
    }

    if (mobileMenuBtn) mobileMenuBtn.addEventListener("click", () => toggleDrawer(true));
    if (drawerCloseBtn) drawerCloseBtn.addEventListener("click", () => toggleDrawer(false));
    if (drawerOverlay) drawerOverlay.addEventListener("click", () => toggleDrawer(false));

    const submenuToggle = document.querySelector(".submenu-toggle");
    if (submenuToggle) {
        submenuToggle.addEventListener("click", (e) => {
            e.preventDefault();
            const submenu = submenuToggle.nextElementSibling;
            if (submenu) {
                submenu.classList.toggle("show");
                const arrow = submenuToggle.querySelector(".arrow-down");
                if (arrow) arrow.style.transform = submenu.classList.contains("show") ? "rotate(180deg)" : "";
            }
        });
    }

    // 2. Hero Banner Slider (Carousel)
    const track = document.querySelector(".carousel-track");
    const slides = document.querySelectorAll(".carousel-slide");
    const prevBtn = document.querySelector(".carousel-control.prev");
    const nextBtn = document.querySelector(".carousel-control.next");
    const indicators = document.querySelectorAll(".carousel-indicators .indicator");
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        currentSlide = (index + slides.length) % slides.length;
        if (track) track.style.transform = `translateX(-${currentSlide * 100}%)`;
        slides.forEach((slide, i) => slide.classList.toggle("active", i === currentSlide));
        indicators.forEach((ind, i) => ind.classList.toggle("active", i === currentSlide));
    }

    function changeSlide(direction) {
        showSlide(currentSlide + direction);
    }

    if (slides.length > 0) {
        showSlide(currentSlide);
        slideInterval = setInterval(() => changeSlide(1), 5000);
        if (prevBtn) prevBtn.addEventListener("click", (e) => { e.preventDefault(); changeSlide(-1); });
        if (nextBtn) nextBtn.addEventListener("click", (e) => { e.preventDefault(); changeSlide(1); });
    }

    // 3. Product Shelves Slider Buttons
    const sliders = document.querySelectorAll(".product-slider-wrapper");
    sliders.forEach(slider => {
        const grid = slider.querySelector(".products-grid");
        const prevArrow = slider.querySelector(".slider-arrow.prev");
        const nextArrow = slider.querySelector(".slider-arrow.next");

        if (grid && prevArrow && nextArrow) {
            const getScrollAmount = () => {
                const card = grid.querySelector(".product-card");
                return card ? card.offsetWidth + 24 : 300;
            };

            prevArrow.addEventListener("click", () => grid.scrollBy({ left: -getScrollAmount(), behavior: "smooth" }));
            nextArrow.addEventListener("click", () => grid.scrollBy({ left: getScrollAmount(), behavior: "smooth" }));
        }
    });

    // 4. FAQ Accordion Section
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        if (question) {
            question.addEventListener("click", () => {
                const isActive = item.classList.contains("active");
                faqItems.forEach(i => {
                    i.classList.remove("active");
                    const span = i.querySelector(".faq-question span");
                    if (span) span.textContent = "+";
                });
                if (!isActive) {
                    item.classList.add("active");
                    const toggle = question.querySelector("span");
                    if (toggle) toggle.textContent = "−";
                }
            });
        }
    });

    // Initialize Page Controllers
    initCollectionsPage();
    initProductDetailPage();

    // Initialize Cart UI
    updateCartUI();
});

// ----------------------------------------------------
// QUICK VIEW MODAL LOGIC (Matching User Image 2)
// ----------------------------------------------------

let modalSelectedWeightIndex = 0;
let modalSelectedQty = 1;
let currentModalProductId = null;

function openProductModal(productId) {
    let product = PRODUCTS_DATA[productId];
    if (!product) {
        product = Object.values(PRODUCTS_DATA).find(p => p.id === productId || p.id.includes(productId) || (productId && productId.includes(p.id)));
    }
    if (!product) {
        product = PRODUCTS_DATA["groundnut-oil-premium"];
    }

    currentModalProductId = product.id;
    modalSelectedWeightIndex = 0;
    modalSelectedQty = 1;

    renderQuickViewModal(product);
}

function closeProductModal() {
    const modalBackdrop = document.getElementById("productDetailModal");
    if (modalBackdrop) {
        modalBackdrop.classList.remove("open");
    }
    document.body.style.overflow = "";
}

function renderQuickViewModal(product) {
    let modalBackdrop = document.getElementById("productDetailModal");
    if (!modalBackdrop) {
        modalBackdrop = document.createElement("div");
        modalBackdrop.className = "product-modal-backdrop";
        modalBackdrop.id = "productDetailModal";
        document.body.appendChild(modalBackdrop);
    }

    const weights = product.weights || [{ label: "Standard", multiplier: 1 }];
    const selectedWeight = weights[modalSelectedWeightIndex] || weights[0];
    const currentSalePrice = (product.salePrice * selectedWeight.multiplier).toFixed(2);
    const currentOrigPrice = (product.originalPrice * selectedWeight.multiplier).toFixed(2);

    modalBackdrop.innerHTML = `
        <div class="product-modal-dialog">
            <button class="modal-close-btn" onclick="closeProductModal()">&times;</button>
            <div class="quick-view-grid">
                <div class="quick-view-img-col">
                    <img src="${product.image}" alt="${product.title}" class="quick-view-img">
                </div>
                <div class="quick-view-info-col">
                    <div class="quick-view-brand">${product.brand || 'ARSHITH FRESH INDIA PVT LTD'}</div>
                    <h2 class="quick-view-title">${product.title}</h2>
                    <div class="quick-view-stars">★★★★★</div>
                    <div class="quick-view-price-row">
                        <span class="quick-orig-price">Rs. ${currentOrigPrice}</span>
                        <span class="quick-sale-price">Rs. ${currentSalePrice}</span>
                        <span class="quick-sale-badge">Sale</span>
                    </div>
                    <p class="quick-view-tax-note">Taxes included. <a href="cart.html">Shipping</a> calculated at checkout.</p>
                    
                    <div class="quick-variant-section">
                        <label class="quick-variant-lbl">Weight</label>
                        <div class="quick-variant-pills">
                            ${weights.map((w, idx) => `
                                <button class="quick-weight-pill ${idx === modalSelectedWeightIndex ? 'active' : ''}" onclick="selectModalWeight(${idx})">
                                    ${w.label}
                                </button>
                            `).join("")}
                        </div>
                    </div>

                    <div class="quick-qty-section">
                        <label class="quick-variant-lbl">Quantity</label>
                        <div class="quick-qty-picker">
                            <button onclick="changeModalQty(-1)">&minus;</button>
                            <span>${modalSelectedQty}</span>
                            <button onclick="changeModalQty(1)">+</button>
                        </div>
                    </div>

                    <div class="quick-actions-col">
                        <button class="quick-add-cart-btn" onclick="addModalItemToCart(false)">Add to cart</button>
                        <button class="quick-buy-now-btn" onclick="addModalItemToCart(true)">Buy it now</button>
                    </div>

                    <div class="quick-view-stars" style="margin-top: 14px;">★★★★★</div>
                    <div class="quick-view-full-details">
                        <a href="product.html?id=${product.id}">View full details &rarr;</a>
                    </div>
                </div>
            </div>
        </div>
    `;

    modalBackdrop.classList.add("open");
    document.body.style.overflow = "hidden";
}

function selectModalWeight(idx) {
    modalSelectedWeightIndex = idx;
    const product = PRODUCTS_DATA[currentModalProductId];
    if (product) renderQuickViewModal(product);
}

function changeModalQty(delta) {
    modalSelectedQty = Math.max(1, modalSelectedQty + delta);
    const product = PRODUCTS_DATA[currentModalProductId];
    if (product) renderQuickViewModal(product);
}

function addModalItemToCart(buyNow = false) {
    const product = PRODUCTS_DATA[currentModalProductId];
    if (!product) return;

    const weights = product.weights || [{ label: "Standard", multiplier: 1 }];
    const selectedWeight = weights[modalSelectedWeightIndex] || weights[0];
    const itemPrice = product.salePrice * selectedWeight.multiplier;

    const existingIndex = CART_ITEMS.findIndex(i => i.id === product.id && i.weight === selectedWeight.label);
    if (existingIndex > -1) {
        CART_ITEMS[existingIndex].quantity += modalSelectedQty;
    } else {
        CART_ITEMS.push({
            id: product.id,
            title: product.title,
            price: itemPrice,
            weight: selectedWeight.label,
            quantity: modalSelectedQty,
            image: product.image
        });
    }

    saveCart();
    updateCartUI();
    closeProductModal();

    if (buyNow) {
        window.location.href = "cart.html";
    } else {
        openCartDrawer();
    }
}

// Global Event Delegation for Product Clicks & Filter Accordions
document.addEventListener("click", (e) => {
    // 1. Sidebar Filter Accordion Click
    const filterHeader = e.target.closest(".filter-accordion-header");
    if (filterHeader) {
        const item = filterHeader.closest(".filter-accordion-item");
        if (item) {
            const isOpen = item.classList.contains("open");
            item.classList.toggle("open");
            const chevron = filterHeader.querySelector(".chevron-icon");
            if (chevron) {
                chevron.textContent = isOpen ? "v" : "^";
            }
        }
        return;
    }

    // 2. Product Card / Image / Choose Options Click across Home Page, Collections, & Categories
    const productCard = e.target.closest(".product-card, .collection-product-card-box, .product-item-card");
    if (productCard) {
        // Exclude direct clicks inside opened modal
        if (e.target.closest(".product-modal-dialog")) return;

        let matchedId = productCard.getAttribute("data-product-id");
        
        if (!matchedId) {
            const cardLink = productCard.querySelector("a");
            if (cardLink) {
                const href = cardLink.getAttribute("href");
                if (href) {
                    if (href.includes("id=")) {
                        matchedId = href.split("id=")[1];
                    } else if (href.includes("/products/")) {
                        const slug = href.split("/products/")[1].replace(/\/$/, "");
                        matchedId = Object.keys(PRODUCTS_DATA).find(k => k.includes(slug) || slug.includes(k));
                    }
                }
            }
        }

        if (!matchedId) {
            const titleEl = productCard.querySelector(".card__heading, .card-title-serif, .product-title, h3");
            if (titleEl) {
                const text = titleEl.textContent.toLowerCase().trim();
                matchedId = Object.keys(PRODUCTS_DATA).find(k => text.includes(PRODUCTS_DATA[k].title.toLowerCase()) || PRODUCTS_DATA[k].title.toLowerCase().includes(text.substring(0, 10)));
            }
        }

        if (matchedId && PRODUCTS_DATA[matchedId]) {
            e.preventDefault();
            e.stopPropagation();
            openProductModal(matchedId);
            return;
        }
    }
});

/* ==========================================
   FOOTER POLICY MODALS & ACCORDION HANDLERS
   ========================================== */

const POLICY_DATA = {
    privacy: {
        title: "Privacy Policy",
        content: `
            <p>At <strong>Arshith Fresh India Pvt. Ltd.</strong>, we prioritize the privacy and security of our customers' personal information.</p>
            <h3>1. Information We Collect</h3>
            <p>When you place an order or create an account, we collect necessary personal details including your name, email address, phone number, delivery address, and payment confirmation.</p>
            <h3>2. How We Use Your Information</h3>
            <p>Your details are used strictly for order fulfillment, delivery tracking, customer support, and providing updates regarding your purchases.</p>
            <h3>3. Data Protection & Security</h3>
            <p>We use SSL encryption protocols to secure all online transactions. We do not sell, rent, or trade your personal information to third parties.</p>
            <h3>4. Third-Party Services</h3>
            <p>Logistics and delivery partners (e.g., Delhivery, BlueDart, DTDC) receive only necessary shipping details to fulfill your orders.</p>
        `
    },
    shipping: {
        title: "Shipping & Delivery Policy",
        content: `
            <p>We deliver natural, cold-pressed oils, spice powders, ghee, honey, and dry fruits fresh from our facility across India.</p>
            <h3>1. Shipping Charges</h3>
            <p><strong>FREE Shipping</strong> on all orders of ₹1,000 and above. For orders under ₹1,000, a flat nominal delivery fee applies.</p>
            <h3>2. Delivery Timelines</h3>
            <p>Standard delivery takes <strong>3 to 5 business days</strong> for metro cities and <strong>5 to 7 business days</strong> for non-metro regions.</p>
            <h3>3. Order Tracking</h3>
            <p>Once dispatched, you will receive a tracking link via SMS and email. You can also track your order directly on our <a href="cart.html" style="color: #0f7139; font-weight: 600;">Track Your Order</a> page.</p>
        `
    },
    returns: {
        title: "Returns & Refunds Policy",
        content: `
            <p>Your satisfaction is our top priority. We offer a hassle-free replacement policy for defective or incorrect orders.</p>
            <h3>1. Eligibility for Returns</h3>
            <p>We accept replacement requests within <strong>7 days of delivery</strong> for damaged, leaked, expired, or incorrect products.</p>
            <h3>2. Return Process</h3>
            <p>Please share photos or an unboxing video of the issue to <strong>support@arshithfresh.com</strong> or WhatsApp <strong>+91 8618471424</strong> within 48 hours of receipt.</p>
            <h3>3. Refund Processing</h3>
            <p>Once approved, refunds are credited back to your original payment mode within <strong>5 to 7 working days</strong>.</p>
        `
    },
    terms: {
        title: "Terms of Service",
        content: `
            <p>Welcome to <strong>Arshith Fresh</strong>. By accessing or using our website, you agree to comply with our Terms of Service.</p>
            <h3>1. Product Availability & Pricing</h3>
            <p>All prices are in Indian Rupees (INR) and inclusive of taxes. We reserve the right to revise product offerings or prices without prior notice.</p>
            <h3>2. Intellectual Property</h3>
            <p>All content, branding, photography, and text on this website belong exclusively to Arshith Fresh India Pvt. Ltd.</p>
            <h3>3. Governing Law</h3>
            <p>These terms shall be governed and interpreted in accordance with the laws of India, subject to Bengaluru jurisdiction.</p>
        `
    }
};

function openPolicyModal(type) {
    const data = POLICY_DATA[type];
    if (!data) return;

    let modal = document.getElementById("policyDetailModal");
    if (!modal) {
        modal = document.createElement("div");
        modal.id = "policyDetailModal";
        modal.className = "policy-modal-backdrop";
        document.body.appendChild(modal);
    }

    modal.innerHTML = `
        <div class="policy-modal-dialog">
            <button class="policy-modal-close" onclick="closePolicyModal()">&times;</button>
            <div class="policy-modal-header">
                <h2>${data.title}</h2>
            </div>
            <div class="policy-modal-body">
                ${data.content}
            </div>
            <div class="policy-modal-footer">
                <button class="policy-close-btn" onclick="closePolicyModal()">Close</button>
            </div>
        </div>
    `;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closePolicyModal() {
    const modal = document.getElementById("policyDetailModal");
    if (modal) {
        modal.classList.remove("active");
    }
    document.body.style.overflow = "";
}

// Global listener for footer accordion toggle on mobile & policy modal backdrop clicks
document.addEventListener("click", function (e) {
    // 1. Footer Accordion Buttons on Mobile
    const accordionBtn = e.target.closest(".footer-accordion-btn");
    if (accordionBtn) {
        const col = accordionBtn.closest(".footer-col");
        if (col) {
            col.classList.toggle("open");
            const arrow = accordionBtn.querySelector(".footer-arrow");
            if (arrow) {
                arrow.textContent = col.classList.contains("open") ? "-" : "+";
            }
        }
    }

    // 2. Policy Modal Backdrop Click
    const policyModal = document.getElementById("policyDetailModal");
    if (policyModal && policyModal.classList.contains("active") && e.target === policyModal) {
        closePolicyModal();
    }
});

