import { GoogleGenAI } from "@google/genai";
import connectDB from "@/lib/db";
import Product from "@/models/Product";

const client = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});


export async function POST(request) {

    const { query } = await request.json();

    const aiRes = await client.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [
            {
                role: "user",
                parts: [
                    {
                        text:
                        "Your output should be just one word. Convert this into a short product keyword: " 
                        + query
                    }
                ]
            }
        ],
    });


    const keyword = aiRes.text.trim();

    console.log("User query:", query);
    console.log("AI-generated keyword:", keyword);


    await connectDB();


    const products = await Product.find({
        $or: [
            { title: { $regex: keyword, $options: "i" } },
            { description: { $regex: keyword, $options: "i" } },
            { category: { $regex: keyword, $options: "i" } }
        ]
    });


    return Response.json(products);
}