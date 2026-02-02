// CartContext.tsx
import { createContext } from "react";
import type { CartItem } from "@/types/cart";

export interface CartContextValue {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: CartItem["id"]) => void;
  updateQuantity: (id: CartItem["id"], quantity: number) => void;
  clearCart: () => void; //question: what does 'void' do here?
}

export const CartContext = createContext<CartContextValue | undefined>(
  undefined,
);
