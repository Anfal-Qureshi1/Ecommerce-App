import connectDB from "@/lib/db";
import Product from "@/models/Product";

export async function GET() {
  await connectDB();

  await Product.deleteMany({});

  await Product.insertMany([
    {
      title: "Product 1",
      description: "Description for Product 1",
      price: 10.99,
      category: "Category 1",
      image: "https://picsum.photos/200/300?random=1",
    },
    {
      title: "Product 2",
      description: "Description for Product 2",
      price: 19.99,
      category: "Category 2",
      image: "https://picsum.photos/200/300?random=2",
    },
  ]);

  return Response.json({
    message: "Database seeded successfully",
  });
}