import type { Category } from "./category";

export interface Product {
  id: number;
  sku: string;
  published_date?: string | null;
  title: string;
  brand: string;
  price?: number;
  description?: string;
  img_url: string;
  color_name: string;
  color_hex: string;
  slug: string;
}

export interface ProductWithCategories extends Product {
  categories: Category[];
}
