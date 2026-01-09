// Image Controller - Handles image upload and processing
const Product = require("../models/Product");
// const { extractImageTags } = require("../services/openaiVision");
const { extractImageTags } = require("../services/groqVisionMock");
/**
 * Image-based product search
 */
exports.searchByImage = async (req, res) => {
  try {
    // Step 1: Validate image upload
    if (!req.file) {
      return res.status(400).json({
        message: "Image file is required",
      });
    }

    // Step 2: Extract tags using Gemini Vision
    const imageBuffer = req.file.buffer;
    const mimeType = req.file.mimetype;

    const tags = await extractImageTags(imageBuffer, mimeType);

    // Step 3: Search products using extracted tags
    const searchQuery = tags.join(" ");

    const products = await Product.find(
      { $text: { $search: searchQuery } },
      { score: { $meta: "textScore" } }
    ).sort({ score: { $meta: "textScore" } });

    // Step 4: Send response
    res.status(200).json({
      tags,
      results: products,
    });
  } catch (error) {
    console.error("Image search error:", error.message);

    res.status(500).json({
      message: "Image-based search failed",
      error: error.message,
    });
  }
};
