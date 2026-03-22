import { createContext, useContext, useEffect, useState } from "react";
import { products } from "../data/mock";
import type { Product } from "../types";

type CartContextValue = {
  items: Product[];
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);
const storageKey = "dajobastore-cart";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey);
    if (!stored) {
      return;
    }

    const ids: string[] = JSON.parse(stored);
    setItems(products.filter((product) => ids.includes(product.id)));
  }, []);

  const persist = (nextItems: Product[]) => {
    setItems(nextItems);
    window.localStorage.setItem(
      storageKey,
      JSON.stringify(nextItems.map((item) => item.id))
    );
  };

  const addToCart = (productId: string) => {
    const product = products.find((item) => item.id === productId);
    if (!product) {
      return;
    }

    persist([...items, product]);
  };

  const removeFromCart = (productId: string) => {
    persist(items.filter((item, index) => item.id !== productId || index !== items.findIndex((entry) => entry.id === productId)));
  };

  const clearCart = () => persist([]);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
};
