// useProductBySlug.tsx
import type { Product } from "@/types/product";
import { useEffect, useState } from "react";

const BASE_URL = import.meta.env.VITE_API_URL;

export default function useProductBySlug(
  slug: string | undefined,
): Product | null {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (!slug) return;

    fetch(`${BASE_URL}/products/${slug}`)
      .then((resp) => resp.json())
      .then((data: Product) => setProduct(data))
      .catch((err) => {
        console.error("Failed to fetch product:", err);
        setProduct(null);
      });
  }, [slug]);

  return product;
}
