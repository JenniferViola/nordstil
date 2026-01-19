// ProductGrid.tsx
import ProductCard from "./ProductCard";
import type { Product } from "@/types/product";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div
      id="product-grid"
      className="grid grid-cols-3 gap-2 justify-items-center auto-rows-400px"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
