import connectDB from "@/lib/db";
import Product from "@/models/Product";
import CartButton from "../../components/cart/CartButton";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { id } = await params;
  await connectDB();
  const product = await Product.findById(id).lean();

  if (!product) {
    return {
      title: "Product Not Found - Islamabad Society Marketplace",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: `${product.title} - Islamabad Society Marketplace`,
    description: product.description || "View product details and add to cart.",
  };
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  await connectDB();
  const product = await Product.findById(id).lean();

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-6 overflow-hidden rounded-3xl bg-gray-100">
                {product.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={product.image} alt={product.title} className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-80 items-center justify-center text-sm text-gray-400">
                    No image available
                  </div>
                )}
              </div>
              <p className="text-sm uppercase tracking-[0.25em] text-indigo-600">{product.category}</p>
              <h1 className="mt-4 text-4xl font-bold text-gray-900">{product.title}</h1>
              <p className="mt-4 text-base leading-7 text-gray-600">{product.description}</p>
            </div>
            <aside className="rounded-3xl border border-gray-200 bg-slate-50 p-6">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm text-gray-500">Price</span>
                <span className="text-2xl font-semibold text-gray-900">${product.price}</span>
              </div>
              <CartButton
                product={{
                  _id: String(product._id),
                  title: product.title,
                  price: product.price,
                  image: product.image,
                }}
              />
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
