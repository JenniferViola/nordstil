// ProductDetails.tsx
import PageTitle from "@/components/layout/shared/PageTitle";
import ProductDetailsSection from "@/components/ui/products/ProductDetailsSection";
import Breadcrumbs from "@/components/ui/products/ProductBreadcrumbs";
import { ProductCarousel } from "@/components/ui/products/ProductCarousel";
import { Divider } from "@/components/ui/Divider";
import { useParams } from "react-router";
import useProductBySlug from "@/hooks/useProductBySlug";
import useProducts from "@/hooks/usePublishedProducts";
import NotFound from "./NotFound";

export default function ProductDetails() {
  const { slug } = useParams<{ slug: string }>();
  const { product, loading, error } = useProductBySlug(slug);
  const similarProducts = useProducts();

  if (loading) return <div>Loading...</div>;
  if (error === "Product not found") return <NotFound />;
  if (error) return <div>{error}</div>;
  if (!product) return null;

  return (
    <div className="max-w-[128rem] flex flex-col gap-2 lg:gap-6">
      <PageTitle title={`${product.title} – Nordstil`} />
      <Breadcrumbs product={product} className="sm:hidden flex" />
      <ProductDetailsSection product={product} />
      <Divider variant="dark" className="sm:hidden mb-4 mt-4" />
      <section
        id="similar-products-container"
        className="hidden sm:grid gap-8 mt-10 justify-center items-center"
      >
        <div className="flex flex-col gap-2">
          <h1 className="text-center text-2xl lg:text-3xl">Similar Products</h1>
          <Divider variant="dark" />
        </div>
        <ProductCarousel products={similarProducts} />
      </section>
    </div>
  );
}
