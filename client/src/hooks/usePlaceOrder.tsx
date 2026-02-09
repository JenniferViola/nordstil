import { useState } from "react";
import { useNavigate } from "react-router";
import type { OrderPayload } from "@/types/order";

const BASE_URL = import.meta.env.VITE_API_URL;

export const usePlaceOrder = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const placeOrder = async (orderData: OrderPayload) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(`${BASE_URL}/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error("Failed to place order. Please try again.");
      }

      const result = await response.json();

      const newId = result.orderId;

      navigate(`/confirmation/${newId}`);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return { placeOrder, isSubmitting, error };
};
