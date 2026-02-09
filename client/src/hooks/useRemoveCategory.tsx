import { useState, useCallback } from "react";

const BASE_URL = import.meta.env.VITE_API_URL;

export const useRemoveCategory = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const removeCategory = useCallback(async (id: number) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${BASE_URL}/categories/${id}/delete`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Could not delete category.");
      }

      return true;
    } catch (err: any) {
      setError(err.message || "An unknown error occurred");
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { removeCategory, isLoading, error };
};
