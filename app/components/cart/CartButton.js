"use client";

import { useCart } from "./CartProvider";

export default function CartButton({ product }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="mt-4 inline-flex items-center rounded bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700"
    >
      Add to cart
    </button>
  );
}
