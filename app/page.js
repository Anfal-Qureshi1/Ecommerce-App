"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600">
            Our Collection
          </p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Featured Products
          </h1>
        </div>

        {loading ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="animate-pulse rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
              >
                <div className="mb-4 h-40 rounded-xl bg-gray-200" />
                <div className="mb-2 h-4 w-20 rounded bg-gray-200" />
                <div className="mb-2 h-5 w-3/4 rounded bg-gray-200" />
                <div className="h-4 w-full rounded bg-gray-200" />
              </div>
            ))}
          </div>
        ) : products.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center text-gray-500">
            No products available yet.
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article
                key={product._id || product.title}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-[4/3] bg-gray-100 cursor-pointer">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-gray-400">
                      No image
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium uppercase tracking-wide text-indigo-700">
                      {product.category}
                    </span>
                    <span className="text-lg font-semibold text-gray-900">
                      ${product.price}
                    </span>
                  </div>

                  <h2 className="mb-2 text-xl font-semibold text-gray-900">
                    {product.title}
                  </h2>
                  <p className="text-sm text-gray-600">{product.description}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
