// Home.tsx
import Hero from "@/features/home/Hero";
import Spots from "@/features/home/Spots";
import ProductGrid from "@/features/products/ProductGrid";

export default function Index() {
  return (
    <div id="index-container" className="grid gap-2 mb-2">
      <Hero />
      <Spots />
      <ProductGrid />
    </div>
  );
}
