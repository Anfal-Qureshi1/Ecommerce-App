"use client";

import Link from "next/link";
import CartWidget from "./cart/CartWidget";

export default function Navbar() {
  return (
    <header className="bg-white dark:bg-gray-900 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-xl font-semibold">
              Islamabad Society Marketplace
            </Link>
          </div>
          <nav className="flex items-center space-x-4">
            <Link href="/" className="text-sm hover:underline">
              Home
            </Link>
            <Link href="/products" className="text-sm hover:underline">
              Products
            </Link>
            <Link href="/about" className="text-sm hover:underline">
              About
            </Link>
            <CartWidget />
          </nav>
        </div>
      </div>
    </header>
  );
}
