// useOrders.tsx
import type { FetchedOrder } from "@/types/order";
import { useEffect, useState } from "react";

const BASE_URL = import.meta.env.VITE_API_URL;

export default function useOrders(): FetchedOrder[] {
  const [orders, setOrders] = useState<FetchedOrder[]>([]);

  useEffect(() => {
    fetch(`${BASE_URL}/orders/all`)
      .then((resp) => resp.json())
      .then(setOrders)
      .catch((err) => console.error("Failed to fetch orders:", err));
  }, []);

  return orders;
}
