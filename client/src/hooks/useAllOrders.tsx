// useAllOrders.tsx
import { useState, useEffect } from "react";
import type { FetchedOrder } from "@/types/order";

const BASE_URL = import.meta.env.VITE_API_URL;

export default function useAllOrders(): FetchedOrder[] {
  const [fetchedOrders, setFetchedOrders] = useState<FetchedOrder[]>([]);

  useEffect(() => {
    fetch(`${BASE_URL}/orders/all`)
      .then((resp) => resp.json())
      .then(setFetchedOrders)
      .catch((err) => console.error("Failed to fetch orders:", err));
  }, []);
  return fetchedOrders;
}
