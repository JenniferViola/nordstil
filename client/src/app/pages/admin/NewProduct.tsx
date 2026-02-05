// admin/NewProduct.tsx
import PageTitle from "@/components/layout/shared/PageTitle";
import { SubmitButton } from "@/components/ui/admin/Button";
import { useAddProduct } from "@/hooks/useAddProduct";
import type { CreateProduct } from "@/types/product";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";

type NewProductFormData = {
  title: string;
  img_url: string;
  sku: string;

  published_date?: string;
  description?: string;
  brand?: string;
  price?: number;
};

export default function NewProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewProductFormData>({});

  const { addProduct } = useAddProduct();
  let navigate = useNavigate();

  const onSubmit: SubmitHandler<NewProductFormData> = (data) => {
    const payload: CreateProduct = {
      ...data,
      published_date: data.published_date || undefined,
      brand: data.brand || undefined,
      description: data.description || undefined,
      price: data.price ?? undefined,
    };

    addProduct(payload);
    navigate("/admin/products");
  };

  return (
    <>
      <PageTitle title="Admin - New Product" />
      <section id="new-product-container">
        <h1>New Product</h1>
        <form
          className="flex flex-col gap-8 text-sm"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-1 max-w-[22rem]">
            <label htmlFor="title" className="font-bold">
              *Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Title"
              className="text-input"
              maxLength={25}
              {...register("title", {
                required: true,
                maxLength: {
                  value: 25,
                  message: "Title cannot exced 25 characters",
                },
              })}
            />
            {errors.title && (
              <span className="error-text">{errors.title.message}</span>
            )}
          </div>

          <div className="flex flex-col gap-1 max-w-[22rem]">
            <label htmlFor="description" className="font-bold">
              Product Description
            </label>
            <textarea
              id="description"
              rows={4}
              maxLength={250}
              placeholder="Description"
              className={"text-input"}
              {...register("description", {
                maxLength: {
                  value: 250,
                  message: `Description cannot exceed 250 characters`,
                },
              })}
            />
            <span className="text-red-700">{errors.description?.message}</span>
          </div>

          <div className="flex flex-col gap-1 max-w-[22rem]">
            <label htmlFor="img_url" className="font-bold">
              *Image URL
            </label>
            <input
              type="text"
              id="img_url"
              placeholder="Image URL"
              className="text-input"
              {...register("img_url", { required: "Image URL required" })}
            />
            {errors.img_url && (
              <span className="text-red-600">{errors.img_url.message}</span>
            )}
          </div>

          <div className="flex flex-col gap-1 max-w-[20rem]">
            <label htmlFor="brand" className="font-bold">
              Brand
            </label>
            <input
              type="text"
              id="brand"
              placeholder="Brand"
              className="text-input"
              {...register("brand")}
            />
          </div>

          <div className="flex flex-col gap-1 max-w-[20rem]">
            <label htmlFor="sku" className="font-bold">
              *SKU
            </label>
            <input
              type="text"
              id="sku"
              placeholder="AAA123"
              className="text-input"
              {...register("sku", {
                required: "SKU is required",
                pattern: {
                  value: /^[A-Z]{3}\d{3}$/,
                  message:
                    "SKU must be 3 letters followed by 3 numbers (e.g., ABC123)",
                },
              })}
            />
            {errors.sku && (
              <span className="text-red-700">{errors.sku.message}</span>
            )}
          </div>

          <div className="flex flex-col gap-1 max-w-[20rem]">
            <label htmlFor="sku" className="font-bold">
              Price
            </label>
            <input
              type="number"
              id="price"
              placeholder="Price"
              className="text-input"
              {...register("price", {
                valueAsNumber: true,
                min: { value: 0, message: "Price cannot be negative" },
              })}
            />
            {errors.price && (
              <span className="text-red-700">{errors.price.message}</span>
            )}
          </div>

          <div className="flex flex-col gap-1 max-w-[20rem]">
            <label htmlFor="published_date" className="font-bold">
              Publication Date
            </label>
            <input
              type="date"
              id="published_date"
              {...register("published_date", {
                validate: (value) => {
                  if (!value) return true;

                  const selected = new Date(value);
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);

                  return selected >= today || "Date cannot be in the past";
                },
              })}
            />
            {errors.published_date && (
              <span className="text-red-700">
                {errors.published_date.message}
              </span>
            )}
          </div>

          <div id="submit-product">
            <SubmitButton>Add product</SubmitButton>
          </div>
        </form>
      </section>
    </>
  );
}
