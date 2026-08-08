import CheckoutClient from "./CheckoutClient";

export const metadata = {
title: "Checkout - Islamabad Society Marketplace",
description: "Checkout page for placing orders",
};

export default function CheckoutPage() {
return <CheckoutClient />;
}

// "use client";

// import { useState } from "react";

// export const metadata = {
//   title: "Checkout - Islamabad Society Marketplace",
//   description: "Checkout page for placing orders",
// };

// export default function CheckoutPage() {
//   const [name, setName] = useState("");
//   const [address, setAddress] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     alert(`Order placed for ${name}. Delivery to: ${address}`);
//   }

//   return (
//     <main className="max-w-3xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">Checkout</h1>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium mb-1">Full name</label>
//           <input
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full border px-3 py-2 rounded"
//             placeholder="Your full name"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Address</label>
//           <textarea
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             className="w-full border px-3 py-2 rounded"
//             placeholder="Delivery address"
//             required
//           />
//         </div>

//         <div>
//           <button className="bg-green-600 text-white px-4 py-2 rounded" type="submit">
//             Place Order
//           </button>
//         </div>
//       </form>
//     </main>
//   );
// }
