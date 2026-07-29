import OpenAI from "openai";
import connectDB from "@/lib/db";
import Product from "@/models/Product";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
export async function POST(request) {
    const { query} = await request.json();
    await connectDB();
    const products = await Product.find({
        title: { $regex: query, $options: "i" },
    });

    return Response.json(products);

}
