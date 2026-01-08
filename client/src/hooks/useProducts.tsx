// useProducts.tsx
import type { Product } from "@/types/product";
import { useEffect, useState } from "react";

const BASE_URL = import.meta.env.VITE_API_URL;

export default function useProducts(): Product[] {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch(`${BASE_URL}/products`)
      .then((resp) => resp.json())
      .then(setProducts)
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  return products;
}
