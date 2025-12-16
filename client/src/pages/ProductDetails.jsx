// ProductDetails.jsx
import { useParams } from "react-router";
import useProduct from "../hooks/useProduct";
import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import Breadcrumbs from "../components/Breadcrumbs";

export default function ProductDetails() {
  const { slug } = useParams();
  const product = useProduct(slug);
  const similarProducts = useProducts();

  if (!product) return <div>Loading...</div>;
  return (
    <div className="mx-auto max-w-7xl mt-6">
      <section id="product-details-container" className="grid gap-6 2 mb-12">
        <div className="grid">
          <Breadcrumbs />
          <div className="grid gap-8 sm:grid-cols-2">
            <div id="image-container">
              <img src={product.img_url} alt={product.title} />
            </div>
            <div>
              <h1 className="text-3xl">{product.title}</h1>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <button className="btn">Add to basket</button>
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
