import ProductCard from "../components/ProductCard";

export default function ProductGrid() {
  return (
    // center the grid
    <div
      id="product-grid"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
        xl:grid-cols-5 gap-4 justify-items-center"
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <ProductCard key={i} />
      ))}
    </div>
  );
}
