// useProduct.jsx

import { useEffect, useState } from "react";
import { useParams } from "react-router";

const BASE_URL = import.meta.env.VITE_API_URL;

export default function useProduct() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  console.log("Fetching:", `${BASE_URL}/products/${slug}`);
  useEffect(() => {
    if (!slug) return;

    fetch(`${BASE_URL}/products/${slug}`)
      .then((resp) => resp.json())
      .then(setProduct)
      .catch((err) => console.error("Failed to fetch product:", err));
  }, [slug]);
  if (!product) return <div>Loading...</div>;
  return product;
}
