"use client";

import { useCart } from "./CartProvider";
import Link from "next/link";

export default function CartContents() {
  const { items, removeFromCart, updateQuantity } = useCart();

  const total = items.reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 1), 0);

  if (items.length === 0)
    return (
      <div className="p-6 rounded-3xl border border-gray-200 bg-white shadow-sm">
        <p className="mb-4 text-lg font-medium text-gray-900">Your cart is empty.</p>
        <Link href="/" className="text-indigo-600 hover:underline">
          Continue shopping
        </Link>
      </div>
    );

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-6">
        <ul className="space-y-6">
          {items.map((item) => (
            <li
              key={item._id}
              className="grid gap-4 rounded-3xl border border-gray-100 p-4 sm:grid-cols-[auto_1fr_auto] sm:items-center"
            >
              <div className="h-24 w-24 overflow-hidden rounded-2xl bg-gray-100 sm:h-28 sm:w-28">
                {item.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full items-center justify-center text-sm text-gray-400">No image</div>
                )}
              </div>
              <div className="space-y-2">
                <div className="text-lg font-semibold text-gray-900">{item.title}</div>
                <div className="text-sm text-gray-600">${item.price.toFixed(2)}</div>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="text-sm font-medium text-red-600 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
              <div className="flex items-center justify-between rounded-3xl bg-slate-50 p-3 text-sm sm:justify-end">
                <button
                  onClick={() => updateQuantity(item._id, Math.max(1, (item.quantity || 1) - 1))}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-700 shadow-sm"
                >
                  −
                </button>
                <span className="px-4 text-base font-medium">{item.quantity || 1}</span>
                <button
                  onClick={() => updateQuantity(item._id, (item.quantity || 1) + 1)}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-700 shadow-sm"
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-600">Estimated total</p>
            <p className="text-3xl font-semibold text-gray-900">${total.toFixed(2)}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-2xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
            >
              Continue Shopping
            </Link>
            <Link
              href="/checkout"
              className="inline-flex items-center justify-center rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
