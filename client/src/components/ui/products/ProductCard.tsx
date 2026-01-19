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
      className={`block w-full min-w-0 max-h-[1050px] rounded bg-white
        text-inherit no-underline shadow-md transition-transform duration-200
        ease-in-out ${className || ""}`}
    >
      <figure className="relative">
        <img
          src={product.img_url}
          alt={product.title}
          width="700"
          height="1050"
          className="relative block aspect-2/3 w-full rounded-t-sm object-cover"
        />
        <div
          id="overlay"
          className="absolute inset-0 rounded-sm bg-linear-to-t from-transparent
            via-black/20 to-black/40"
        >
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
            className="top-4 right-4 absolute cursor-pointer
              transition-transform duration-150 hover:scale-110"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsFaved(!isFaved);
            }}
          />

          {isNew && (
            <p
              id="badge"
              className="absolute top-4 left-4 rounded-md bg-secondary-100 px-3
                py-1 text-sm font-bold text-primary-900 shadow-md tracking-wide"
            >
              New
            </p>
          )}
        </div>
      </figure>

      <section
        id="card-body"
        className="grid grid-cols-[1fr_auto] gap-2 p-4 min-w-0"
      >
        <p className="text-sm font-semibold">{product.title}</p>
        <p className="text-sm font-semibold text-right">{product.price} SEK</p>
        <p className="text-xs font-medium text-gray-600">{product.brand}</p>
      </section>
    </Link>
  );
}

export default memo(ProductCard);
