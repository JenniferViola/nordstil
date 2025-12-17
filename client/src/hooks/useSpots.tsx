// useSpots.tsx
import type { Spot } from "../types/spots";
import { useEffect, useState } from "react";

const BASE_URL = import.meta.env.VITE_API_URL;

export default function useSpots(): Spot[] {
  const [spots, setSpots] = useState<Spot[]>([]);

  useEffect(() => {
    fetch(`${BASE_URL}/spots`)
      .then((resp) => resp.json())
      .then(setSpots)
      .catch((err) => console.error("Failed to fetch spots:", err));
  }, []);

  return spots;
}
