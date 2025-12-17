export interface Product {
  id: number;
  sku: string;
  published_date?: string | null;
  title: string;
  brand: string;
  price?: number;
  description?: string;
  img_url: string;
  slug: string;
}

// Need to add categories later
