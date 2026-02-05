// types/product.tsx
import type { Category } from "./category";

export interface Product {
  id: number;
  sku: string;
  title: string;
  img_url: string;
  slug: string;
  brand?: string | null;
  price?: number | null;
  description?: string | null;
  featured?: number;
  color_name?: string;
  color_hex?: string;
  published_date?: string;
}

export interface ProductWithCategories extends Product {
  categories: Category[];
}

export type CreateProduct = {
  sku: string;
  title: string;
  img_url: string;

  published_date?: string;
  brand?: string;
  price?: number;
  description?: string;
};
