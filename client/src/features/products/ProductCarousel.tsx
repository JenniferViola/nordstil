import ProductCard from "@/features/products/ProductCard";
import useProducts from "@/hooks/useProducts";
import type { Product } from "@/types/product";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";

export function ProductCarousel() {
  const products: Product[] = useProducts();
  return (
    <Carousel className="w-full max-w-7xl overflow-auto">
      <CarouselContent className="-ml-1 relative">
        {products.map((product) => (
          <CarouselItem
            key={product.id}
            className="pl-1 sm:basis-1/3 lg:basis-1/4"
          >
            <ProductCard product={product} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-55" />
      <CarouselNext className="absolute right-4 top-55" />
    </Carousel>
  );
}
