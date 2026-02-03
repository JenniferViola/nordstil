import { useState, useCallback } from "react";

const BASE_URL = import.meta.env.VITE_API_URL;

export const useRemoveProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const removeProduct = useCallback(async (id: number) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${BASE_URL}/products/${id}/delete`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Could not delete product.");
      }

      console.log(`Product ${id} deleted.`);
      return true;
    } catch (err: any) {
      setError(err.message || "An unknown error occurred");
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { removeProduct, isLoading, error };
};
