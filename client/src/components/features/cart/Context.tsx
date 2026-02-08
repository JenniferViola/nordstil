// CartContext.tsx
import { createContext } from "react";
import type { OrderItem } from "@/types/order";

export interface CartContextType {
  items: OrderItem[];
  totalItems: number;
  totalPrice: number;
  addItem: (item: OrderItem) => void;
  updateQuantity: (id: number, quantity: number) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);
