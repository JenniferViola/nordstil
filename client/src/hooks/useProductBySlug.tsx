import type { ProductWithCategories } from "@/types/product";
import { useEffect, useState } from "react";

const BASE_URL = import.meta.env.VITE_API_URL;

type UseProductBySlugResult = {
  product: ProductWithCategories | null;
  loading: boolean;
  error: string | null;
};

export default function useProductBySlug(
  slug: string | undefined,
): UseProductBySlugResult {
  const [product, setProduct] = useState<ProductWithCategories | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}/products/${slug}`);

        if (!response.ok) {
          throw new Error("Product not found");
        }

        const data: ProductWithCategories = await response.json();
        setProduct(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  return { product, loading, error };
}
