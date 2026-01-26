import type { Category } from '../categories/types';

export interface Product {
  id: number;
  sku: string;
  published_date: string;
  title: string;
  brand: string;
  price: number;
  description: string;
  img_url: string;
  slug: string;
}

export interface ProductWithCategories extends Product {
  categories: Category[];
}
