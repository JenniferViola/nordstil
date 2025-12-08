import { FaRegHeart } from "react-icons/fa6";

// ProductCard.jsx
export default function ProductCard({ product }) {
  return (
    <a href="/" className="card">
      <div className="card-figure">
        <img src="https://picsum.photos/200/300" alt="Card Image" />
        <FaRegHeart
          fill="rgba(255, 255, 255, 0.8)"
          size={30}
          style={{
            filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4))",
            overflow: "hidden",
          }}
          className="card-favorite-icon"
        />

        <div className="card-badge">
          <p>New!</p>
        </div>
      </div>

      <div className="card-body">
        <p className="card-title">Title</p>
        <p className="card-price">199 SEK</p>
        <p className="card-brand">Brand</p>
      </div>
    </a>
  );
}
