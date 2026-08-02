import OpenAI from "openai";
import connectDB from "@/lib/db";
import Product from "@/models/Product";

const client = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(request) {
    try {
        const { query } = await request.json();

        const completion = await client.chat.completions.create({
            model: "llama-3.1-8b-instant",
            messages: [
                {
                    role: "system",
                    content:
                        "Generate exactly 10 short search keywords related to the user's query. Return ONLY comma-separated keywords and nothing else.",
                },
                {
                    role: "user",
                    content: query,
                },
            ],
            temperature: 0.3,
        });

        // AI response (string)
        const keywordString = completion.choices[0].message.content.trim();

        console.log("User Query:", query);
        console.log("Generated keywords:", keywordString);

        // Convert string to array
        const keywords = keywordString
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean);

        console.log("Keyword Array:", keywords);

        // Create regex pattern
        const keywordRegex = keywords.join("|");

        await connectDB();

        const products = await Product.find({
            $or: [
                {
                    title: {
                        $regex: keywordRegex,
                        $options: "i",
                    },
                },
                {
                    description: {
                        $regex: keywordRegex,
                        $options: "i",
                    },
                },
                {
                    category: {
                        $regex: keywordRegex,
                        $options: "i",
                    },
                },
            ],
        });

        return Response.json(products);

    } catch (error) {
        console.error("AI Search Error:", error);

        return Response.json(
            {
                error: "AI search failed",
            },
            {
                status: 500,
            }
        );
    }
}