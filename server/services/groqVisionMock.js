const { Groq } = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

/**
 * MOCK vision using Groq (text-only)
 * We simulate image understanding by asking Groq to imagine tags
 */
const extractImageTags = async () => {
  try {
    const completion = await groq.chat.completions.create({
      model: "meta-llama/llama-4-scout-17b-16e-instruct",
      messages: [
        {
          role: "system",
          content:
            "You are an API that returns ONLY raw comma-separated keywords. No explanations. No sentences.",
        },
        {
          role: "user",
          content:
            "Generate ONLY comma-separated product tags for a footwear product image. Example output: nike, black, sports shoes, footwear. Do not say anything else.",
        },
      ],
      temperature: 0.3,
      max_tokens: 50,
    });

    const rawText = completion.choices[0].message.content;
    console.log("Groq raw response:", rawText);

    // Remove newlines and sentences defensively
    const cleanedText = rawText
      .replace(/\n/g, " ")
      .replace(/[^a-zA-Z0-9, ]/g, "")
      .toLowerCase();

    return cleanedText
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t.length > 1);
  } catch (error) {
    console.error("Groq error:", error.message);
    throw new Error("Failed to generate mock image tags");
  }
};

module.exports = { extractImageTags };
