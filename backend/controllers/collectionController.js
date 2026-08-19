const Collection = require("../models/Collection");

// GET all collections
const getCollections = async (req, res) => {
  try {
    const collections = await Collection.find()
      .populate("products")
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

// GET single collection
const getCollectionById = async (req, res) => {
  try {
    const collection = await Collection.findById(req.params.id)
      .populate("products");

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

// CREATE collection
const createCollection = async (req, res) => {
  try {
    const {
      title,
      image,
      products,
      conditions,
      conditionType,
      tags,
      status,
    } = req.body;

    if (!title) {
      return res.status(400).json({
        success: false,
        message: "Collection title is required",
      });
    }

    const collection = await Collection.create({
      title,
      image,
      products: products || [],
      conditions,
      conditionType,
      tags: tags || [],
      status,
    });

    res.status(201).json({
      success: true,
      message: "Collection created successfully",
      data: collection,
    });
  } catch (error) {
    console.error("Create collection error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to create collection",
      error: error.message,
    });
  }
};



// UPDATE collection
const updateCollection = async (req, res) => {
  try {
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

// DELETE collection
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