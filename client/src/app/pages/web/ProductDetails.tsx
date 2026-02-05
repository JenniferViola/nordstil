// ProductDetails.tsx
import PageTitle from "@/components/layout/shared/PageTitle";
import ProductDetailsSection from "@/components/ui/products/ProductDetailsSection";
import Breadcrumbs from "@/components/ui/products/ProductBreadcrumbs";
import { ProductCarousel } from "@/components/ui/products/ProductCarousel";
import { Divider } from "@/components/ui/Divider";
import { useParams } from "react-router";
import useProductBySlug from "@/hooks/useProductBySlug";
import useProducts from "@/hooks/usePublishedProducts";

export default function ProductDetails() {
  const { slug } = useParams<{ slug: string }>();
  const product = useProductBySlug(slug);
  const similarProducts = useProducts();

  if (!product) return <div>Loading...</div>;
  return (
    <div className="max-w-[128rem]">
      <PageTitle title={`${product.title} – Nordstil`} />
      <Breadcrumbs product={product} className="sm:hidden flex" />
      <ProductDetailsSection product={product} />
      <Divider variant="dark" className="sm:hidden mb-4 mt-4" />
      {
        // TODO:
        // 1. Similar products logic: same category, tags, etc.
      }
      <section
        id="similar-products-container"
        className="hidden sm:grid gap-4 mt-4 justify-center items-center"
      >
        <h1 className="text-center text-3xl">Similar Products</h1>
        <ProductCarousel products={similarProducts} />
      </section>
    </div>
  );
}
