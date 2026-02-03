// admin/Products.tsx
import PageTitle from "@/components/layout/shared/PageTitle";
import Button from "@/components/ui/admin/Button";
import usePublishedProducts from "@/hooks/usePublishedProducts";
import { useRemoveProduct } from "@/hooks/useRemoveProduct";
import type { Product } from "@/types/product";
import { useState, useEffect } from "react";
import { SlTrash } from "react-icons/sl";

export default function Products() {
  const fetchedProducts = usePublishedProducts();
  const [products, setProducts] = useState<Product[]>([]);
  const { removeProduct } = useRemoveProduct();

  useEffect(() => {
    console.log("useEffect triggered");
    if (fetchedProducts) {
      setProducts(fetchedProducts);
    }
  }, [fetchedProducts]);

  const handleDelete = async (title: string, id: number) => {
    const confirmed = confirm(`Are you sure you want to remove ${title}?`);
    if (!confirmed) return;

    const success = await removeProduct(id);
    if (success) {
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id),
      );
      console.log("Successfully removed:", title);
    }
  };

  return (
    <>
      <PageTitle title="Admin - Products" />
      <section id="products-container">
        <div className="max-w-7xl flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h1>Products Overview</h1>
            <Button to="/admin/products/new">
              <span className="mr-2 text-sm">+</span> New product
            </Button>
          </div>
          <table
            className="w-full max-w-7xl border-separate border-spacing-y-2
              rounded-lg"
          >
            <thead>
              <tr className="bg-[#f4f6f5]">
                <th
                  className="text-left py-[0.5rem] px-[0.5rem] border-b
                    border-[#4d5d53]/15 font-medium"
                >
                  Name
                </th>
                <th
                  className="text-left py-[0.5rem] px-[0.5rem] border-b
                    border-[#4d5d53]/15 font-medium"
                >
                  SKU
                </th>
                <th
                  className="text-left py-[0.5rem] px-[0.5rem] border-b
                    border-[#4d5d53]/15 font-medium"
                >
                  Price
                </th>
                <th
                  className="text-left py-[0.5rem] px-[0.5rem] border-b
                    border-[#4d5d53]/15 font-medium"
                >
                  Published
                </th>
                <th className="border-b border-[#4d5d53]/15"></th>
              </tr>
            </thead>

            <tbody className="transition-all">
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="text-[0.8rem] hover:translate-0.5 transition-all
                    hover:bg-[#f4f6f5]"
                >
                  <td
                    className="p-1 border-b border-[#4d5d53]/15 px-[0.5rem]
                      font-medium transition-all cursor-pointer"
                  >
                    {product.title}
                  </td>
                  <td
                    className="p-1 border-b border-[#4d5d53]/15 px-[0.5rem]
                      transition-all"
                  >
                    {product.sku}
                  </td>
                  <td
                    className="p-1 border-b border-[#4d5d53]/15 px-[0.5rem]
                      transition-all"
                  >
                    {product.price}
                  </td>
                  <td
                    className="p-1 border-b border-[#4d5d53]/15 px-[0.5rem]
                      transition-all"
                  >
                    {product.published_date}
                  </td>
                  <td
                    className="p-1 border-b border-[#4d5d53]/15 px-[0.5rem]
                      transition-all"
                  >
                    <button
                      className="cursor-pointer hover:text-md"
                      onClick={() => handleDelete(product.title, product.id)}
                    >
                      <SlTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
