// ProductGrid.jsx
import ProductCard from "../components/ProductCard";
import useProducts from "../hooks/useProducts";

export default function ProductGrid() {
  const products = useProducts();

  return (
    <div
      id="product-grid"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
        xl:grid-cols-5 gap-2 justify-items-center"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
