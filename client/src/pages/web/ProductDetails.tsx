// ProductDetails.tsx
import { useState } from "react";
import { Link, useParams } from "react-router";
import useProductBySlug from "@/hooks/useProductBySlug";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { ProductCarousel } from "@/features/products/ProductCarousel";
import { RippleButton } from "@/components/ui/RippleButton";
import { StarRating } from "@/components/ui/StarRating";
import { Divider } from "@/components/ui/Divider";

export default function ProductDetails() {
  const { slug } = useParams<{ slug: string }>();
  const product = useProductBySlug(slug);
  const [rating, setRating] = useState(0);

  const productSizes = ["S", "M", "L", "XL"] as const;

  if (!product) return <div>Loading...</div>;
  return (
    <div
      id="page-container"
      className="max-w-7xl mt-4 lg:mt-4 grid gap-8 mx-4 mb-8 sm:mb-2"
    >
      <section
        id="product-details-container"
        className="grid gap-4 sm:gap-8 sm:grid-cols-2"
      >
        <div className="grid gap-2">
          <Breadcrumbs product={product} className="sm:hidden flex" />

          <div
            id="image-container"
            className="w-full max-w-lg aspect-3/4 overflow-hidden rounded-sm
              shadow-sm"
          >
            <img
              src={product.img_url}
              alt={product.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 sm:gap-4 w-full max-w-lg">
          <Breadcrumbs product={product} className="hidden sm:flex" />

          <div id="details-header" className="flex flex-col gap-2">
            <h1 className="text-3xl">{product.title}</h1>
            <div className="flex justify-between items-center">
              <p
                id="product-price"
                className="text-lg text-primary-700 font-bold"
              >
                {product.price} SEK
              </p>

              <StarRating
                value={rating}
                onChange={setRating}
                className="text-primary"
              />
            </div>
          </div>

          <div id="details-body" className="flex flex-col gap-8 lg:gap-4">
            <p className="lg:text-lg">{product.description}</p>
            <div className="flex flex-col gap-4">
              <div id="product-color" className="flex flex-col gap-2">
                <p className="flex items-center gap-2">
                  <span className="font-bold">Color:</span>
                  {product.color_name}
                </p>
                <span
                  className="w-6 h-6 rounded-full border border-gray-300"
                  style={{ backgroundColor: product.color_hex }}
                ></span>
              </div>
              <div id="product-size" className="flex flex-col gap-2">
                <p className="flex items-center gap-2 font-bold">Sizes:</p>
                <ul className="flex gap-4 lg:gap-6 flex-wrap">
                  {productSizes.map((size) => (
                    <Link
                      key={size}
                      to="#"
                      className="font-bold text-lg w-10 border-full py-0 px-2
                        border border-gray-400/60 rounded-sm
                        hover:border-primary transition-colors flex items-center
                        justify-center"
                    >
                      <li>{size}</li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div id="button-container">
            <RippleButton
              onClick={() => console.log("Clicked")}
              className="w-full lg:w-1/2 font-bold"
            >
              Add to Cart
            </RippleButton>
          </div>
        </div>
      </section>
      <Divider variant="dark" className="sm:hidden" />

      {
        // TODO: Implement similar products logic
      }
      <section id="similar-products-container" className="hidden sm:grid gap-4">
        <h1 className="text-center text-3xl">Similar Products</h1>
        <ProductCarousel />
      </section>
    </div>
  );
}
