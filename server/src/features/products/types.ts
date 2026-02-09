import type { Category } from '../categories/types';

export interface Product {
  id: number;
  sku: string;
  title: string;
  img_url: string;
  slug: string;
  brand?: string | null;
  price: number;
  description?: string | null;
  featured?: boolean; // Changed from number
  color_name?: string;
  color_hex?: string;
  published_date?: string | null;
  is_published?: boolean; // Changed from number
}

export interface ProductWithCategories extends Product {
  categories: Category[];
}

//For creating a new product
export interface CreateProduct {
  sku: string;
  title: string;
  img_url: string;
  brand?: string;
  price: number;
  description?: string;
  color_name?: string;
  color_hex?: string;
  published_date?: string;
  is_published?: boolean;
  featured?: boolean;
  category_ids?: number[];
}
