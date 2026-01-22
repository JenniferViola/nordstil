// Index.tsx
import Hero from "@/components/ui/Hero";
import Spots from "@/components/ui/Spots";
import ProductGrid from "@/components/ui/products/ProductGrid";

import useHero from "@/hooks/useHero";
import useSpots from "@/hooks/useSpots";
import useProducts from "@/hooks/useProducts";

import type { Product } from "@/types/product";
import type { Hero as HeroType } from "@/types/hero";
import type { Spot as SpotsType } from "@/types/spots";

export default function Index() {
  const products: Product[] = useProducts();
  const hero: HeroType | null = useHero();
  const spots: SpotsType[] = useSpots();

  if (!products || !hero || !spots)
    return <p className="text-2xl">Loading...</p>;

  return (
    <>
      <Hero hero={hero} />
      <Spots spots={spots} />
      <ProductGrid products={products} />
    </>
  );
}
