// useCart.tsx
import { useContext } from "react";
import { CartContext } from "@/components/features/cart/Context";

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
}
