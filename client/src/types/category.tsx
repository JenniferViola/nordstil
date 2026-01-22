import type { Product } from "./product";

export interface Category {
  id: number;
  title: string;
  slug: string;
  img_url?: string | null;
  description?: string | null;
}

export interface CategoryWithProducts extends Category {
  products: Product[];
}
