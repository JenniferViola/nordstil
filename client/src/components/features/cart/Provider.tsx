// CartProvider.tsx
import { useState } from "react";
import { CartContext } from "./Context";
import type { CartItem } from "@/types/cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const addItem = (item: CartItem) => {
    setItems((currentCart) => {
      const existingItem = currentCart.find(
        (cartItem) => cartItem.id == item.id,
      );

      if (existingItem) {
        return currentCart.map((cartItem) =>
          cartItem.id == item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem,
        );
      }

      return [...currentCart, item];
    });
  };

  const removeItem = (id: CartItem["id"]) => {
    setItems((currentCart) => currentCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: CartItem["id"], quantity: number) => {
    setItems((currentCart) =>
      currentCart.map((item) =>
        item.id === id ? { ...item, quantity } : item,
      ),
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        totalItems,
        totalPrice,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
