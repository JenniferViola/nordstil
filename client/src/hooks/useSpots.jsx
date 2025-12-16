// useSpots.jsx

import { useEffect, usEffect, useState } from "react";
const BASE_URL = import.meta.env.VITE_API_URL;

export default function useSpots() {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/spots`)
      .then((resp) => resp.json())
      .then(setSpots)
      .catch((err) => console.error("Failed to fetch spots:", err));
  }, []);

  return spots;
}
