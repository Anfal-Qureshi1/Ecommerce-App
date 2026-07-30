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
                        "Return only one keyword. No explanation.",
                },
                {
                    role: "user",
                    content: query,
                },
            ],
        });

        const keyword = completion.choices[0].message.content.trim();

        await connectDB();

        const products = await Product.find({
            $or: [
                { title: { $regex: keyword, $options: "i" } },
                { description: { $regex: keyword, $options: "i" } },
                { category: { $regex: keyword, $options: "i" } },
            ],
        });

        return Response.json(products);
    } catch (error) {
        console.error(error);

        return Response.json(
            { error: "AI search failed" },
            { status: 500 }
        );
    }
}