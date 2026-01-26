import type { ProductWithCategories } from "@/types/product";
import { useEffect, useState } from "react";

const BASE_URL = import.meta.env.VITE_API_URL;

export default function useSearchProducts(
  query: string | null,
): ProductWithCategories[] {
  const [products, setProducts] = useState<ProductWithCategories[]>([]);

  useEffect(() => {
    const params = new URLSearchParams();

    if (query) {
      params.append("query", query);
    }

    const url = `${BASE_URL}/products?${params.toString()}`;

    fetch(url)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Network response was not ok");
        }
        return resp.json();
      })
      .then(setProducts)
      .catch((err) => console.error("Failed to fetch searched products:", err));
  }, [query]);

  return products;
}
