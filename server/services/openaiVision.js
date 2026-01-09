const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Extract product-related tags from image using OpenAI Vision
 */
const extractImageTags = async (imageBuffer, mimeType) => {
  try {
    const base64Image = imageBuffer.toString("base64");

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "Identify the product in this image. Return ONLY comma-separated keywords such as product type, brand, color, material, and category.",
            },
            {
              type: "image_url",
              image_url: {
                url: `data:${mimeType};base64,${base64Image}`,
              },
            },
          ],
        },
      ],
    });

    const text = response.choices[0].message.content;
    console.log("OpenAI raw response:", text);

    return text
      .split(",")
      .map((tag) => tag.trim().toLowerCase())
      .filter(Boolean);
  } catch (error) {
    console.error("OpenAI Vision error:", error.message);
    throw new Error("Failed to analyze image");
  }
};

module.exports = { extractImageTags };
