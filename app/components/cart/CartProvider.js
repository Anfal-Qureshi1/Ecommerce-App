"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("cart_items");
      if (raw) setItems(JSON.parse(raw));
    } catch (e) {
      console.error("Failed to read cart from localStorage", e);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("cart_items", JSON.stringify(items));
    } catch (e) {
      console.error("Failed to save cart to localStorage", e);
    }
  }, [items]);

  const addToCart = (product) => {
    setItems((prev) => {
      const idx = prev.findIndex((p) => p._id === product._id);
      if (idx !== -1) {
        const next = [...prev];
        next[idx].quantity = (next[idx].quantity || 1) + 1;
        return next;
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => setItems((prev) => prev.filter((p) => p._id !== id));

  const updateQuantity = (id, qty) =>
    setItems((prev) => prev.map((p) => (p._id === id ? { ...p, quantity: qty } : p)));

  const clearCart = () => setItems([]);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
