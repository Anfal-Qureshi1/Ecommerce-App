import connectDB from "@/lib/db";
import Product from "@/models/Product";
import CartButton from "../components/cart/CartButton";

export const metadata = {
  title: "Products - Islamabad Society Marketplace",
  description: "Browse products available in the society marketplace",
};

export default async function ProductsPage() {
  await connectDB();
  const products = await Product.find().lean();

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-6 text-3xl font-bold text-gray-900">Products</h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product._id}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              <div className="aspect-[4/3] bg-gray-100">
                {product.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={product.image} alt={product.title} className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full items-center justify-center text-sm text-gray-400">No image</div>
                )}
              </div>

              <div className="p-5">
                <div className="mb-2 flex items-center justify-between">
                  <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">{product.category}</span>
                  <span className="text-lg font-semibold text-gray-900">${product.price}</span>
                </div>
                <h2 className="mb-2 text-xl font-semibold text-gray-900">{product.title}</h2>
                <p className="text-sm text-gray-600">{product.description}</p>
                <CartButton product={{ _id: String(product._id), title: product.title, price: product.price, image: product.image }} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
