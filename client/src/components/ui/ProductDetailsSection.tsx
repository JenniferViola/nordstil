// ProductDetailsSection.tsx
import { useState } from "react";
import { Link } from "react-router";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { RippleButton } from "@/components/ui/RippleButton";
import { StarRating } from "@/components/ui/StarRating";
import type { Product } from "@/types/product";

interface ProductSectionProps {
  product: Product;
}

export default function ProductDetailsSection({
  product,
}: ProductSectionProps) {
  const [rating, setRating] = useState(0);
  const [selectedProductColor, setSelectedProductColor] = useState<string>("");
  const productSizes = ["S", "M", "L", "XL"] as const;

  if (!product) return <div>Loading...</div>;
  return (
    <section
      id="product-details-section"
      className="grid gap-4 sm:gap-8 sm:grid-cols-2"
    >
      <div
        id="image-container"
        className="w-full aspect-3/4 overflow-hidden rounded-xs shadow-sm"
      >
        <img
          src={product.img_url}
          alt={product.title}
          className="h-full w-full object-cover"
        />
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

        <div id="product-options" className="flex flex-col gap-8 lg:gap-4">
          <p className="lg:text-lg">{product.description}</p>
          <div className="flex flex-col gap-4">
            <div id="product-color" className="flex flex-col gap-2">
              <p className="flex items-center gap-2">
                <span className="font-bold">Color:</span>
                {product.color_name}
              </p>

              <ul className="flex gap-4 lg:gap-6 flex-wrap decoration-0">
                <li
                  onClick={() => setSelectedProductColor(product.color_hex)}
                  className={`${
                    selectedProductColor
                      ? "border-[1.5px] border-primary-700/60 cursor-pointer"
                      : "border border-gray-300"
                    } w-6 h-6 rounded-full`}
                  style={{ backgroundColor: product.color_hex }}
                ></li>
                <li
                  className="w-6 h-6 rounded-full border border-gray-300"
                  style={{ backgroundColor: "#d9d9c8" }}
                ></li>
              </ul>
            </div>

            <div id="product-size" className="flex flex-col gap-2">
              <p className="flex items-center gap-2">
                <span className="font-bold">Size:</span> Small
              </p>
              <ul className="flex gap-4 lg:gap-6 flex-wrap">
                {productSizes.map((size) => (
                  <Link
                    key={size}
                    to="#"
                    className="font-bold text-lg w-10 border-full py-0 px-2
                      border border-gray-400/60 rounded-sm hover:border-primary
                      transition-colors flex items-center justify-center"
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
            className="w-full lg:w-1/2 font-bold bg-primary-600
              text-secondary-200"
          >
            Add to Cart
          </RippleButton>
        </div>
      </div>
    </section>
  );
}
