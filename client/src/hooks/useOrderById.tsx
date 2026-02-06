// useOrderById.tsx
import { useState, useEffect } from "react";
import type { FetchedOrder } from "@/types/order";

const BASE_URL = import.meta.env.VITE_API_URL;

export const useOrderById = (id: string | number | undefined) => {
  const [order, setOrder] = useState<FetchedOrder | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchOrder = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}/orders/${id}`);

        if (!response.ok) {
          throw new Error("Order not found.");
        }

        const data: FetchedOrder = await response.json();
        setOrder(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id]);

  return { order, loading, error };
};
