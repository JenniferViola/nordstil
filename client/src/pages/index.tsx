// Home.tsx
import Hero from "../features/home/hero";
import Spots from "../features/home/spots";
import ProductGrid from "../features/products/productGrid";

export default function Index() {
  return (
    <>
      <Hero />
      <Spots />
      <ProductGrid />
    </>
  );
}
