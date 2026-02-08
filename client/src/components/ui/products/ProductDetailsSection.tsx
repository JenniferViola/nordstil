// ProductDetailsSection.tsx
import { useState, useEffect } from "react";
import { useCart } from "@/hooks/useCart";
import Breadcrumbs from "@/components/ui/products/ProductBreadcrumbs";
import { RippleButton } from "@/components/ui/RippleButton";
import { StarRating } from "@/components/ui/StarRating";
import type { ProductWithCategories } from "@/types/product";
import { FaHeart } from "react-icons/fa6";
import { isNew } from "@/lib/date";
import { SlBag } from "react-icons/sl";

interface ProductSectionProps {
  product: ProductWithCategories;
}

export default function ProductDetailsSection({
  product,
}: ProductSectionProps) {
  const [rating, setRating] = useState(4);
  const [selectedColor, setSelectedColor] = useState<string>(
    product.color_name ?? "",
  );
  const productColors = [
    { hex: product.color_hex ?? "", name: product.color_name },
    { hex: "#d9d9c8", name: "Beige" },
    { hex: "#e8e4dc", name: "Cream" },
    { hex: "#c9b8a8", name: "Taupe" },
  ];

  const productSizes = ["S", "M", "L", "XL"] as const;
  const [selectedSize, setSelectedSize] = useState<string>("S");
  const [isFaved, setIsFaved] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    setSelectedColor(product.color_name ?? "");
    setSelectedSize("S");
  }, [product.id, product.color_name]);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      img_url: product.img_url,
      color_name: product.color_name,
      slug: product.slug,
      selectedColor: selectedColor,
      selectedSize: selectedSize,
      quantity: 1,
    });
  };

  if (!product) return <div>Loading...</div>;
  return (
    <section
      id="product-details-section"
      className="grid gap-4 sm:gap-6 sm:grid-cols-2"
    >
      <figure
        id="image-container"
        className="w-full aspect-3/4 overflow-hidden rounded-xs shadow-sm
          relative"
      >
        <img
          src={product.img_url}
          alt={product.title}
          className="h-full w-full object-cover"
        />
        <div
          id="overlay"
          className="absolute inset-0 bg-linear-to-t from-transparent
            via-black/20 to-black/40"
        >
          <FaHeart
            fill={isFaved ? "#efefe6" : "none"}
            stroke={isFaved ? "#efefe6" : "#efefe6"}
            strokeWidth={34}
            size={34}
            width={40}
            height={40}
            viewBox="0 0 512 600"
            style={{
              filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4))",
            }}
            className="top-4 right-4 absolute cursor-pointer
              transition-transform duration-150 hover:scale-110"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsFaved(!isFaved);
            }}
          />

          {isNew(product.published_date ?? "") && (
            <p
              id="badge"
              className="absolute top-4 left-4 rounded-md bg-secondary-100 px-3
                py-1 text-sm font-bold text-primary-900 shadow-md tracking-wide"
            >
              New
            </p>
          )}
        </div>
      </figure>

      <div
        id="info-container"
        className="flex flex-col gap-4 px-1 w-full sm:px-0 sm:gap-8 md:max-w-lg"
      >
        <div className="flex flex-col gap-6 w-full">
          <Breadcrumbs product={product} className="hidden sm:flex" />

          <div id="details-header" className="flex flex-col">
            <div className="flex justify-between items-baseline">
              <div className="flex flex-col gap-2">
                <div>
                  <h1 className="text-[1.6rem] lg:text-[1.7rem]">
                    {product.title}
                  </h1>
                  <p id="product-brand" className="text-[13px] text-primary/80">
                    {product.brand}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p
                    id="product-price"
                    className="text-lg text-primary-700 font-bold"
                  >
                    {product.price} SEK
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <StarRating
                  value={rating}
                  onChange={setRating}
                  className="text-primary"
                />
                <p className="text-xs text-primary/80">+1k reviews</p>
              </div>
            </div>
          </div>

          <div id="product-body">
            <p className="lg:text-lg">{product.description}</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div id="product-options">
            <div className="flex flex-col gap-2">
              <div id="product-color" className="flex flex-col gap-1">
                <p className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900">Color:</span>
                  <span className="text-sm text-gray-600">{selectedColor}</span>
                </p>
                <ul className="flex gap-2 flex-wrap">
                  {productColors.map((color) => (
                    <li key={color.hex}>
                      <button
                        onClick={() => setSelectedColor(color.name ?? "")}
                        className={`w-5 h-5 rounded-full transition-all
                        duration-200 hover:scale-110 ring-1 ring-offset-1 ${
                          selectedColor === color.name
                            ? "ring-primary ring-opacity-100"
                            : `ring-gray-300 ring-opacity-100
                              hover:ring-gray-400`
                        } `}
                        style={{ backgroundColor: color.hex }}
                        aria-label={`Select ${color.name} color`}
                      />
                    </li>
                  ))}
                </ul>
              </div>

              <div id="product-size" className="flex flex-col gap-1">
                <p className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900">Size:</span>
                  <span className="text-sm text-gray-600">{selectedSize}</span>
                </p>
                <ul className="flex gap-2 flex-wrap">
                  {productSizes.map((size) => (
                    <li key={size}>
                      <button
                        onClick={() => setSelectedSize(size)}
                        className={` font-medium text-xs w-[1.5rem] h-[1.5rem]
                        border-1 rounded-md transition-all duration-200 flex
                        items-center justify-center ${
                          selectedSize === size
                            ? "border-primary bg-primary text-white shadow-sm"
                            : `border-gray-300 bg-white/50 text-gray-700
                              hover:border-gray-400 hover:bg-gray-50`
                        } `}
                      >
                        {size}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div id="button-container">
            <RippleButton
              onClick={handleAddToCart}
              className="w-full mt-4 font-bold flex items-center justify-center
                gap-2 bg-primary-600 text-secondary-200"
            >
              <SlBag size={16}></SlBag>
              Add to Cart
            </RippleButton>
          </div>
        </div>
      </div>
    </section>
  );
}
