"use client";

import { useCart } from "./CartProvider";
import Link from "next/link";

export default function CartContents() {
  const { items, removeFromCart, updateQuantity, clearCart } = useCart();

  const total = items.reduce((s, it) => s + (it.price || 0) * (it.quantity || 1), 0);

  if (items.length === 0)
    return (
      <div className="p-6">
        <p className="mb-4">Your cart is empty.</p>
        <Link href="/products" className="text-indigo-600 hover:underline">
          Browse products
        </Link>
      </div>
    );

  return (
    <div className="p-6">
      <ul className="space-y-4">
        {items.map((it) => (
          <li key={it._id} className="flex items-center justify-between">
            <div>
              <div className="font-semibold">{it.title}</div>
              <div className="text-sm text-gray-600">${it.price}</div>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                min={1}
                value={it.quantity}
                onChange={(e) => updateQuantity(it._id, Number(e.target.value))}
                className="w-16 rounded border px-2 py-1"
              />
              <button onClick={() => removeFromCart(it._id)} className="text-red-600">
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-between">
        <div className="text-lg font-semibold">Total: ${total.toFixed(2)}</div>
        <div className="flex items-center space-x-2">
          <button onClick={clearCart} className="rounded bg-gray-200 px-3 py-2">
            Clear
          </button>
          <Link href="/checkout" className="rounded bg-green-600 px-3 py-2 text-white">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
