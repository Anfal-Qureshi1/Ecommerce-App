"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const handleSearch = () => {
    alert('Searching for: ' + query);
  };
  
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-6 text-3xl font-bold text-gray-900">Featured Products</h1>
        <input 
          onChange={(e) => setQuery(e.target.value)}
          value = {query}
          type="text"
          placeholder="Search products..."
          className="mb-6 w-full rounded-md border border-gray-300 bg-white py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button className = "rounded-md bg-gray-600 py-2 px-4 mb-4 text-black hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 onClick = {handleSearch}">Search</button>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product._id || product.title}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              <div className="aspect-\[4/3] bg-gray-100">
                {product.image ? (
                  <img src={product.image} alt={product.title} className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full items-center justify-center text-sm text-gray-400">
                    No image
                  </div>
                )}
              </div>

              <div className="p-5">
                <div className="mb-2 flex items-center justify-between">
                  <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
                    {product.category}
                  </span>
                  <span className="text-lg font-semibold text-gray-900">${product.price}</span>
                </div>
                <h2 className="mb-2 text-xl font-semibold text-gray-900">{product.title}</h2>
                <p className="text-sm text-gray-600">{product.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
