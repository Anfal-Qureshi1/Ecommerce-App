"use client";

import Link from "next/link";
import { useCart } from "./CartProvider";

export default function CartWidget() {
  const { items } = useCart();
  const count = items.reduce((s, it) => s + (it.quantity || 0), 0);

  return (
    <Link href="/cart" className="flex items-center space-x-2">
      <span className="inline-block rounded bg-gray-100 px-2 py-1 text-sm">Cart</span>
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-xs text-white">
        {count}
      </span>
    </Link>
  );
}
