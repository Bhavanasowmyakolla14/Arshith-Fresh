const Collection = require("../models/Collection");

// Helper function to generate URL slug from title
const generateHandle = (title) => {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
};

// @desc    GET all collections
// @route   GET /api/collections
// @access  Public
const getCollections = async (req, res) => {
  try {
    const collections = await Collection.find()
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: collections.length,
      data: collections,
    });
  } catch (error) {
    console.error("Get collections error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch collections",
      error: error.message,
    });
  }
};

// @desc    GET single collection by ID or handle
// @route   GET /api/collections/:id
// @access  Public
const getCollectionById = async (req, res) => {
  try {
    const { id } = req.params;
    let collection;
    
    // Check if ID is a valid MongoDB ObjectId
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      collection = await Collection.findById(id);
    } else {
      // If not ObjectId, try to find by handle (slug)
      collection = await Collection.findOne({ handle: id.toLowerCase() });
    }

    if (!collection) {
      return res.status(404).json({
        success: false,
        message: "Collection not found",
      });
    }

    res.status(200).json({
      success: true,
      data: collection,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch collection",
      error: error.message,
    });
  }
};

// @desc    CREATE collection
// @route   POST /api/collections
// @access  Private/Admin
const createCollection = async (req, res) => {
  try {
    const { title, description, image, isActive } = req.body;

    if (!title) {
      return res.status(400).json({
        success: false,
        message: "Collection title is required",
      });
    }

    let handle = req.body.handle;
    if (!handle) {
      handle = generateHandle(title);
    }

    const collection = await Collection.create({
      title,
      handle,
      description: description || "",
      image: image || "",
      isActive: isActive !== undefined ? isActive : true
    });

    res.status(201).json({
      success: true,
      message: "Collection created successfully",
      data: collection,
    });
  } catch (error) {
    console.error("Create collection error:", error);
    // Handle duplicate handle error
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "A collection with this handle already exists",
      });
    }
    res.status(500).json({
      success: false,
      message: "Failed to create collection",
      error: error.message,
    });
  }
};

// @desc    UPDATE collection
// @route   PUT /api/collections/:id
// @access  Private/Admin
const updateCollection = async (req, res) => {
  try {
    // If title is being updated and no handle provided, regenerate handle?
    // Usually best to leave handle alone unless explicitly changed to avoid breaking URLs.
    if (req.body.handle) {
      req.body.handle = generateHandle(req.body.handle);
    }

    const collection = await Collection.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!collection) {
      return res.status(404).json({
        success: false,
        message: "Collection not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Collection updated successfully",
      data: collection,
    });
  } catch (error) {
    console.error("Update collection error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update collection",
      error: error.message,
    });
  }
};

// @desc    DELETE collection
// @route   DELETE /api/collections/:id
// @access  Private/Admin
const deleteCollection = async (req, res) => {
  try {
    const collection = await Collection.findByIdAndDelete(req.params.id);

    if (!collection) {
      return res.status(404).json({
        success: false,
        message: "Collection not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Collection deleted successfully",
    });
  } catch (error) {
    console.error("Delete collection error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete collection",
      error: error.message,
    });
  }
};

module.exports = {
  getCollections,
  getCollectionById,
  createCollection,
  updateCollection,
  deleteCollection,
};