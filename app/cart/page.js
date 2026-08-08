import CartContents from "../components/cart/CartContents";

export const metadata = {
  title: "Cart - Islamabad Society Marketplace",
  description: "Your shopping cart",
};

export default function CartPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-3xl font-bold text-gray-900">Your Cart</h1>
        <CartContents />
      </div>
    </main>
  );
}
