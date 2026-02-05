// useAddProduct.tsx
import { useState } from "react";
import { useNavigate } from "react-router";
import type { CreateProduct } from "@/types/product";

const BASE_URL = import.meta.env.VITE_API_URL;

export const useAddProduct = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const addProduct = async (product: CreateProduct) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(`${BASE_URL}/products/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      if (!response.ok) {
        throw new Error("Failed to add product. Please try again.");
      }

      navigate(`/admin/products/`);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return { addProduct, isSubmitting, error };
};
