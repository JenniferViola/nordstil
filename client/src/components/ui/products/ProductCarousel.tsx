// ProductCarousel.tsx
import ProductCard from "@/components/ui/products/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
import type { Product } from "@/types/product";

type ProductCarouselProps = {
  products: Product[];
};

export function ProductCarousel({ products }: ProductCarouselProps) {
  return (
    <Carousel className="w-full overflow-auto">
      <CarouselContent className="-ml-1 relative">
        {products.slice(0, 8).map((product) => (
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
