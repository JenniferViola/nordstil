// ProductDetails.tsx
import { useState } from "react";
import { useParams } from "react-router";
import useProductBySlug from "@/hooks/useProductBySlug";
import useProducts from "@/hooks/useProducts";
import ProductCard from "@/features/products/ProductCard";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { RippleButton } from "@/components/ui/RippleButton";
import { StarRating } from "@/components/ui/StarRating";

export default function ProductDetails() {
  const { slug } = useParams<{ slug: string }>();
  const product = useProductBySlug(slug);
  const similarProducts = useProducts();
  const [rating, setRating] = useState(0);

  if (!product) return <div>Loading...</div>;
  return (
    <div className="mx-auto max-w-7xl mt-6">
      <section id="product-details-container" className="grid gap-6 2 mb-12">
        <div className="grid">
          <div className="grid gap-8 sm:grid-cols-2">
            <div id="image-container">
              <img src={product.img_url} alt={product.title} />
            </div>
            <div className="flex flex-col gap-4 mx-4">
              <Breadcrumbs product={product} className="hidden lg:flex" />

              <div id="details-header" className="flex flex-col">
                <h1 className="text-3xl">{product.title}</h1>
                <StarRating
                  size={14}
                  value={rating}
                  onChange={setRating}
                  className="text-primary"
                />
              </div>
              <div id="details-text" className="flex flex-col gap-2 lg:gap-4">
                <p className="lg:text-xl">{product.description}</p>

                <p className="lg:text-lg font-bold">{product.price} SEK</p>
              </div>
              <div>
                <RippleButton
                  onClick={() => console.log("Clicked")}
                  className="w-full lg:w-1/2 font-bold"
                >
                  Add to Cart
                </RippleButton>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="similar-products" className="hidden sm:grid gap-4">
        <h1 className="text-center text-3xl">Similar Products</h1>
        <div
          id="products-carousel"
          className="grid grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center"
        >
          {similarProducts.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </section>
    </div>
  );
}
