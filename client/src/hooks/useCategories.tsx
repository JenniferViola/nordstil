// useCategories.tsx

import type { Category } from "@/types/category";
import { useEffect, useState } from "react";

const BASE_URL = import.meta.env.VITE_API_URL;

export default function useCategories(): Category[] {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch(`${BASE_URL}/categories`)
      .then((resp) => resp.json())
      .then(setCategories)
      .catch((err) => console.error("Failed to fetch categories:", err));
  }, []);

  return categories;
}
