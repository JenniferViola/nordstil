// admin/Products.tsx
import PageTitle from "@/components/layout/shared/PageTitle";
import { Button } from "@/components/ui/admin/Button";
import useAllProducts from "@/hooks/useAllProducts";
import { useRemoveProduct } from "@/hooks/useRemoveProduct";
import type { Product } from "@/types/product";
import { useState, useEffect } from "react";
import { SlTrash } from "react-icons/sl";

export default function Products() {
  const fetchedProducts = useAllProducts();
  const [products, setProducts] = useState<Product[]>([]);
  const { removeProduct } = useRemoveProduct();

  useEffect(() => {
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
        <div className="max-w-7xl flex flex-col gap-4 overflow-x-auto">
          <div className="flex justify-between items-top">
            <div>
              <h1 className="text-2xl font-semibold text-slate-900">
                Products Overview
              </h1>
              <p className="text-sm text-slate-500 mt-1">
                All products in the databse.
              </p>
            </div>
            <div>
              <Button to="/admin/products/new">
                <span className="mr-2 text-sm">+</span> New product
              </Button>
            </div>
          </div>
          <table
            className="w-full text-[0.8rem] max-w-7xl border-separate
              border-spacing-y-2 rounded-lg"
          >
            <thead>
              <tr className="bg-[#f4f6f5]">
                <th
                  className="text-left py-[0.5rem] px-[0.5rem] border-b
                    border-[#4d5d53]/15 font-medium whitespace-nowrap"
                >
                  Name
                </th>
                <th
                  className="text-left py-[0.5rem] px-[0.5rem] border-b
                    border-[#4d5d53]/15 font-medium whitespace-nowrap"
                >
                  SKU
                </th>
                <th
                  className="text-left py-[0.5rem] px-[0.5rem] border-b
                    border-[#4d5d53]/15 font-medium whitespace-nowrap"
                >
                  Price
                </th>
                <th
                  className="text-left py-[0.5rem] px-[0.5rem] border-b
                    border-[#4d5d53]/15 font-medium whitespace-nowrap"
                >
                  Publication
                </th>
                <th className="border-b border-[#4d5d53]/15"></th>
              </tr>
            </thead>

            <tbody className="transition-all">
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="hover:translate-0.5 transition-all
                    hover:bg-[#f4f6f5]"
                >
                  <td
                    className="p-1 border-b border-[#4d5d53]/15 px-[0.5rem]
                      font-medium whitespace-nowrap transition-all
                      cursor-pointer"
                  >
                    {product.title}
                  </td>
                  <td
                    className="p-1 border-b border-[#4d5d53]/15 px-[0.5rem]
                      transition-all whitespace-nowrap"
                  >
                    {product.sku}
                  </td>
                  <td
                    className="p-1 border-b border-[#4d5d53]/15 px-[0.5rem]
                      transition-all whitespace-nowrap"
                  >
                    {product.price}
                  </td>
                  <td
                    className="p-1 border-b border-[#4d5d53]/15 px-[0.5rem]
                      transition-all whitespace-nowrap"
                  >
                    {product.published_date}
                  </td>
                  <td
                    className="p-1 border-b border-[#4d5d53]/15 px-[0.5rem]
                      transition-all whitespace-nowrap"
                  >
                    <button
                      className="cursor-pointer hover:text-md"
                      onClick={() => handleDelete(product.title, product.id)}
                    >
                      <SlTrash size={16} />
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
