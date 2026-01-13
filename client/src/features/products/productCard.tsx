// ProductCard.tsx
import { FaHeart } from "react-icons/fa6";
import type { Product } from "@/types/product";
import { Link } from "react-router";
import { useState } from "react";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const isNew = false;
  const [isFaved, setIsFaved] = useState(false);

  return (
    <Link to={`/products/${product.slug}`} className="card">
      <figure className="card-figure">
        <img
          src={product.img_url}
          alt={product.title}
          className="opacity-0 transition-opacity duration-500"
          loading="lazy"
          decoding="async"
          onLoad={(e) => (e.currentTarget.style.opacity = "1")}
        />
        <div className="card-overlay">
          <FaHeart
            fill={isFaved ? "#efefe6" : "none"}
            stroke={isFaved ? "#efefe6" : "#efefe6"}
            strokeWidth={34}
            size={34}
            width={40}
            height={40}
            viewBox="0 0 512 600"
            style={{
              filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4))",
            }}
            className="top-4 right-4 card-favorite-icon transition
              hover:scale-110"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsFaved(!isFaved);
            }}
          />

          {isNew && <p className="card-badge">New</p>}
        </div>
      </figure>

      <section className="card-body">
        <p className="card-title">{product.title}</p>
        <p className="card-price">{product.price}</p>
        <p className="card-brand">{product.brand}</p>
      </section>
    </Link>
  );
}
