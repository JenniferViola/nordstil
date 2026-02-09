// context/CartContext.tsx
import { createContext, useContext, useState } from "react";
import type { OrderItem } from "@/types/order";

interface CartContextType {
  items: OrderItem[];
  totalItems: number;
  totalPrice: number;
  addItem: (item: OrderItem) => void;
  updateQuantity: (
    id: number,
    size: string,
    color: string,
    quantity: number,
  ) => void;
  removeItem: (id: number, size: string, color: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider
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
        (cartItem) =>
          cartItem.id === item.id &&
          cartItem.selectedSize === item.selectedSize &&
          cartItem.selectedColor === item.selectedColor,
      );

      if (existingItem) {
        return currentCart.map((cartItem) =>
          cartItem.id === item.id &&
          cartItem.selectedSize === item.selectedSize &&
          cartItem.selectedColor === item.selectedColor
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem,
        );
      }

      return [...currentCart, item];
    });
  };

  const removeItem = (id: OrderItem["id"], size: string, color: string) => {
    if (
      window.confirm(
        "Are you sure you want to remove this item from your cart?",
      )
    )
      setItems((currentCart) =>
        currentCart.filter(
          (item) =>
            !(
              item.id === id &&
              item.selectedSize === size &&
              item.selectedColor === color
            ),
        ),
      );
  };

  const updateQuantity = (
    id: OrderItem["id"],
    size: string,
    color: string,
    quantity: number,
  ) => {
    if (quantity < 1) {
      if (
        window.confirm(
          "Are you sure you want to remove this item from your cart?",
        )
      ) {
        setItems((currentCart) =>
          currentCart.filter(
            (item) =>
              !(
                item.id === id &&
                item.selectedSize === size &&
                item.selectedColor === color
              ),
          ),
        );
      }
      return;
    }
    setItems((currentCart) =>
      currentCart.map((item) =>
        item.id === id &&
        item.selectedSize === size &&
        item.selectedColor === color
          ? { ...item, quantity }
          : item,
      ),
    );
  };

  const clearCart = () => setItems([]);

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

// Hook
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
