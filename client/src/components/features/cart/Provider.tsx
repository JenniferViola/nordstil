// CartProvider.tsx
import { useState } from "react";
import { CartContext } from "./Context";
import type { OrderItem } from "@/types/order";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<OrderItem[]>([]);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + (item.price ?? 0) * item.quantity,
    0,
  );

  const addItem = (item: OrderItem) => {
    setItems((currentCart) => {
      const existingItem = currentCart.find(
        (cartItem) => cartItem.id == item.id,
      );

      if (existingItem) {
        return currentCart.map((cartItem) =>
          cartItem.id == item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + item.quantity,
              }
            : cartItem,
        );
      }

      return [...currentCart, item];
    });
  };

  const removeItem = (id: OrderItem["id"]) => {
    if (
      window.confirm(
        "Are you sure you want to remove this item from your cart?",
      )
    )
      setItems((currentCart) => currentCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: OrderItem["id"], quantity: number) => {
    if (quantity < 1) {
      if (
        window.confirm(
          "Are you sure you want to remove this item from your cart?",
        )
      ) {
        setItems((currentCart) => currentCart.filter((item) => item.id !== id));
      }
      return;
    }
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
