import { FaHeart } from "react-icons/fa6";

// ProductCard.jsx
export default function ProductCard({ product }) {
  const isNew = true; // Example condition for "New" badge
  const isFaved = false; // Example condition for favorite icon

  return (
    <a href="/" className="card">
      <figure className="card-figure">
        <img src="https://picsum.photos/400/600" alt="Card Image" />
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
            className="top-4 right-4 card-favorite-icon transition hover:scale-110"
          />

          {isNew && <p className="card-badge">New</p>}
        </div>
      </figure>

      <section className="card-body">
        <p className="card-title">Title</p>
        <p className="card-price">199 SEK</p>
        <p className="card-brand">Brand</p>
      </section>
    </a>
  );
}
