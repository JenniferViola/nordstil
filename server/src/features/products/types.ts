import type { Category } from '../categories/types';

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
