"use client";

import Link from "next/link";

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
            <Link href="/about" className="text-sm hover:underline">
              About
            </Link>
            <Link href="/checkout" className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
              Checkout
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
