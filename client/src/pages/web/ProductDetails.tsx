// ProductDetails.tsx
import ProductDetailsSection from "@/components/ui/ProductDetailsSection";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { ProductCarousel } from "@/components/ui/ProductCarousel";
import { Divider } from "@/components/ui/Divider";

import { useParams } from "react-router";
import useProductBySlug from "@/hooks/useProductBySlug";
import useProducts from "@/hooks/useProducts";

export default function ProductDetails() {
  const { slug } = useParams<{ slug: string }>();
  const product = useProductBySlug(slug);
  const similarProducts = useProducts();

  if (!product) return <div>Loading...</div>;
  return (
    <div
      id="page-container"
      className="max-w-7xl mt-4 lg:mt-4 grid gap-4 sm:gap-8 mx-4 mb-8 sm:mb-2"
    >
      <Breadcrumbs product={product} className="sm:hidden flex" />
      <ProductDetailsSection product={product} />
      <Divider variant="dark" className="sm:hidden" />
      {
        // TODO: Implement similar products logic
      }
      <section id="similar-products-container" className="hidden sm:grid gap-4">
        <h1 className="text-center text-3xl">Similar Products</h1>
        <ProductCarousel products={similarProducts} />
      </section>
    </div>
  );
}
