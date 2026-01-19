// ProductCard.tsx
import { FaHeart } from "react-icons/fa6";
import type { Product } from "@/types/product";
import { Link } from "react-router";
import { useState, memo } from "react";

type Props = {
  product: Product;
  className?: string;
};

function ProductCard({ product, className }: Props) {
  const isNew = false;
  const [isFaved, setIsFaved] = useState(false);

  return (
    <Link
      to={`/products/${product.slug}`}
      className={`card min-h-100 w-full ${className || ""}`}
    >
      <figure className="card-figure">
        <img
          src={product.img_url}
          alt={product.title}
          width={100}
          height={200}
          loading="lazy"
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
        <p className="card-price">{product.price} SEK</p>
        <p className="card-brand">{product.brand}</p>
      </section>
    </Link>
  );
}

export default memo(ProductCard);
