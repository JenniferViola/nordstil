// Home.tsx
import Hero from "@/features/home/Hero";
import Spots from "@/features/home/Spots";
import ProductGrid from "@/features/products/ProductGrid";

export default function Index() {
  return (
    <>
      <Hero />
      <Spots />
      <ProductGrid />
    </>
  );
}
