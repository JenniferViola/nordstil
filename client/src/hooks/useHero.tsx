// useHero.jsx
import type { Hero } from "../types/hero";
import { useEffect, useState } from "react";

const BASE_URL = import.meta.env.VITE_API_URL;

export default function useHero(): Hero | null {
  const [hero, setHero] = useState<Hero | null>(null);

  useEffect(() => {
    fetch(`${BASE_URL}/hero`)
      .then((resp) => resp.json())
      .then(setHero)
      .catch((err) => console.error("Failed to fetch hero:", err));
  }, []);

  return hero;
}
