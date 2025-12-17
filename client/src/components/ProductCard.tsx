// ProductCard.tsx
import { FaHeart } from "react-icons/fa6";
import type { Product } from "../types/product";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const isNew = false; // Example condition for "New" badge
  const isFaved = false; // Example condition for favorite icon

  return (
    <a href={`/products/${product.slug}`} className="card">
      <figure className="card-figure">
        <img src={product.img_url} alt="Card Image" />
        <div className="card-overlay">
          <FaHeart
            fill={isFaved ? "#4d5d53" : "none"}
            stroke="#efefe6"
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
          />

          {isNew && <p className="card-badge">New</p>}
        </div>
      </figure>

      <section className="card-body">
        <p className="card-title">{product.title}</p>
        <p className="card-price">{product.price}</p>
        <p className="card-brand">{product.brand}</p>
      </section>
    </a>
  );
}
