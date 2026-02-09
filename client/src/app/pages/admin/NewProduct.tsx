// admin/NewProduct.tsx
import PageTitle from "@/components/layout/shared/PageTitle";
import { SubmitButton } from "@/components/ui/admin/Button";
import { useAddProduct } from "@/hooks/useAddProduct";
import type { CreateProduct } from "@/types/product";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { SlExclamation } from "react-icons/sl";
import useCategories from "@/hooks/useCategories";

type NewProductFormData = {
  title: string;
  img_url: string;
  sku: string;
  published_date?: string;
  description?: string;
  brand?: string;
  price: number;
  color_name?: string;
  color_hex?: string;
  is_published: boolean;
  featured: boolean;
  category_ids?: number[];
};

export default function NewProduct() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<NewProductFormData>({
    defaultValues: {
      is_published: false,
      featured: false,
      color_hex: "#FFFFFF",
      color_name: "White",
    },
  });

  const { addProduct } = useAddProduct();
  const navigate = useNavigate();
  const categories = useCategories();
  const colorHex = watch("color_hex");
  const isPublished = watch("is_published");

  const onSubmit: SubmitHandler<NewProductFormData> = (data) => {
    const payload: CreateProduct = {
      ...data,
      published_date: data.is_published ? data.published_date : undefined,
      brand: data.brand || undefined,
      description: data.description || undefined,
      price: data.price ?? undefined,
      color_name: data.color_name || undefined,
      color_hex: data.color_hex || undefined,
    };

    addProduct(payload);
    navigate("/admin/products");
  };

  return (
    <>
      <PageTitle title="Admin - New Product" />
      <section id="new-product-container" className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold text-slate-900">New Product</h1>
        <form
          className="flex flex-col gap-8 text-sm"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Title */}
          <div className="flex flex-col gap-1 max-w-[22rem]">
            <label htmlFor="title" className="font-bold">
              *Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Title"
              className={`text-input
                ${errors.title ? "border-red-500 focus:border-red-500" : ""}`}
              maxLength={25}
              {...register("title", {
                required: "Title is required",
                maxLength: {
                  value: 25,
                  message: "Title cannot exceed 25 characters",
                },
                minLength: {
                  value: 3,
                  message: "Title must be more than 3 characters",
                },
              })}
            />
            {errors.title && (
              <span className="text-red-600 text-xs flex items-center gap-1">
                <SlExclamation /> {errors.title.message}
              </span>
            )}
          </div>

          {/* Description */}
          <div className="flex flex-col gap-1 max-w-[22rem]">
            <label htmlFor="description" className="font-bold">
              Product Description
            </label>
            <textarea
              id="description"
              rows={4}
              maxLength={250}
              placeholder="Description"
              className={`text-input
                ${errors.description ? "border-red-500 focus:border-red-500" : ""}`}
              {...register("description", {
                maxLength: {
                  value: 250,
                  message: `Description cannot exceed 250 characters`,
                },
              })}
            />
            {errors.description && (
              <span className="text-red-600 text-xs flex items-center gap-1">
                <SlExclamation /> {errors.description.message}
              </span>
            )}
          </div>

          {/* Image URL */}
          <div className="flex flex-col gap-1 max-w-[22rem]">
            <label htmlFor="img_url" className="font-bold">
              *Image URL
            </label>
            <input
              type="text"
              id="img_url"
              placeholder="Image URL"
              className={`text-input
                ${errors.img_url ? "border-red-500 focus:border-red-500" : ""}`}
              {...register("img_url", { required: "Image URL is required" })}
            />
            {errors.img_url && (
              <span className="text-red-600 text-xs flex items-center gap-1">
                <SlExclamation /> {errors.img_url.message}
              </span>
            )}
          </div>

          {/* Brand */}
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

          {/* SKU */}
          <div className="flex flex-col gap-1 max-w-[20rem]">
            <label htmlFor="sku" className="font-bold">
              *SKU
            </label>
            <input
              type="text"
              id="sku"
              placeholder="AAA123"
              className={`text-input
                ${errors.sku ? "border-red-500 focus:border-red-500" : ""}`}
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
              <span className="text-red-600 text-xs flex items-center gap-1">
                <SlExclamation /> {errors.sku.message}
              </span>
            )}
          </div>

          {/* Price */}
          <div className="flex flex-col gap-1 max-w-[20rem]">
            <label htmlFor="price" className="font-bold">
              *Price
            </label>
            <input
              type="number"
              id="price"
              placeholder="Price"
              className={`text-input
                ${errors.price ? "border-red-500 focus:border-red-500" : ""}`}
              {...register("price", {
                required: "Price is required",
                valueAsNumber: true,
                min: { value: 0, message: "Price cannot be negative" },
              })}
            />
            {errors.price && (
              <span className="text-red-600 text-xs flex items-center gap-1">
                <SlExclamation /> {errors.price.message}
              </span>
            )}
          </div>

          {/* Color Name */}
          <div className="flex flex-col gap-1 max-w-[20rem]">
            <label htmlFor="color_name" className="font-bold">
              Color Name
            </label>
            <input
              type="text"
              id="color_name"
              placeholder="White"
              className="text-input"
              {...register("color_name")}
            />
          </div>

          {/* Color Hex */}
          <div className="flex flex-col gap-1 max-w-[20rem]">
            <label htmlFor="color_hex" className="font-bold">
              Color Code
            </label>
            <div className="flex gap-2 items-center">
              <input
                type="color"
                id="color_hex_picker"
                value={colorHex}
                className="h-10 w-16 cursor-pointer rounded border
                  border-slate-300"
                onChange={(e) => setValue("color_hex", e.target.value)}
              />
              <input
                type="text"
                id="color_hex"
                placeholder="#FFFFFF"
                className="text-input flex-1 uppercase"
                {...register("color_hex", {
                  pattern: {
                    value: /^#[0-9A-Fa-f]{6}$/,
                    message: "Must be a valid hex color (e.g., #FFFFFF)",
                  },
                })}
              />
            </div>
            {errors.color_hex && (
              <span className="text-red-600 text-xs flex items-center gap-1">
                <SlExclamation /> {errors.color_hex.message}
              </span>
            )}
          </div>

          {/* Category Selection */}
          <div className="flex flex-col gap-1 max-w-[20rem]">
            <label htmlFor="category_ids" className="font-bold">
              Categories
            </label>
            <select
              id="category_ids"
              multiple
              className="text-input min-h-[100px]"
              {...register("category_ids")}
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.title}
                </option>
              ))}
            </select>
            <span className="text-xs text-slate-600">
              Hold Ctrl/Cmd to select multiple categories
            </span>
          </div>

          {/* Published Checkbox */}
          <div className="flex gap-2 items-center max-w-[20rem]">
            <input
              type="checkbox"
              id="is_published"
              {...register("is_published")}
            />
            <label htmlFor="is_published" className="font-bold">
              Publish Product
            </label>
          </div>

          {/* Publication Date */}
          {isPublished && (
            <div className="flex flex-col gap-1 max-w-[20rem]">
              <label htmlFor="published_date" className="font-bold">
                *Publication Date
              </label>
              <input
                type="date"
                id="published_date"
                className={`text-input
                ${errors.published_date ? "border-red-500 focus:border-red-500" : ""}`}
                defaultValue={new Date().toISOString().split("T")[0]}
                {...register("published_date", {
                  required: isPublished
                    ? "Publication date is required when publishing"
                    : false,
                  validate: (value) => {
                    if (!value || !isPublished) return true;

                    const selected = new Date(value);
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);

                    return selected >= today || "Date cannot be in the past";
                  },
                })}
              />
              {errors.published_date && (
                <span className="text-red-600 text-xs flex items-center gap-1">
                  <SlExclamation /> {errors.published_date.message}
                </span>
              )}
            </div>
          )}

          {/* Feature Checkbox */}
          <div className="flex gap-2 items-center max-w-[20rem]">
            <input type="checkbox" id="featured" {...register("featured")} />
            <label htmlFor="featured" className="font-bold">
              Feature Product
            </label>
          </div>

          <div id="submit-product">
            <SubmitButton>
              <span className="mr-2 text-sm">+</span> Add product
            </SubmitButton>
          </div>
        </form>
      </section>
    </>
  );
}
