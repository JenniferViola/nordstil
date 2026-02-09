// ProductGrid.tsx
import ProductCard from "./ProductCard";
import type { Product } from "@/types/product";

interface ProductGridProps {
  products: Product[];
  className?: string;
}

export default function ProductGrid(
  { products }: ProductGridProps,
  className = "",
) {
  return (
    <section
      id="product-grid"
      className={`w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2
        justify-items-center box-border ${className || ""}`}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
