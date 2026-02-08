// types/cart.tsx
import type { Product } from "./product";

export interface CartItem {
  id: Product["id"];
  title: Product["title"];
  img_url: Product["img_url"];
  slug: Product["slug"];
  brand?: Product["brand"];
  price: Product["price"];
  color_name?: Product["color_name"];
  selectedColor: Product["color_name"];
  selectedSize: string;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
}
