// useHero.jsx

import { useEffect, useState } from "react";
const BASE_URL = import.meta.env.VITE_API_URL;

export default function useHero() {
  const [hero, setHero] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/hero`)
      .then((resp) => resp.json())
      .then(setHero)
      .catch((err) => console.error("Failed to fetch hero:", err));
  }, []);

  return hero;
}
