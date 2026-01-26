// useFeaturedProducts.tsx
import type { Product } from "@/types/product";
import { useEffect, useState } from "react";

const BASE_URL = import.meta.env.VITE_API_URL;

export default function useFeaturedProducts(): Product[] {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch(`${BASE_URL}/products/featured`)
      .then((resp) => resp.json())
      .then(setProducts)
      .catch((err) => console.error("Failed to fetch featured products:", err));
  }, []);

  return products;
}
