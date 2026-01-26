// types/cart.tsx
import type { Product } from "./product";

export interface CartItem {
  id: Product["id"];
  title: Product["title"];
  price: Product["price"];
  img_url: Product["img_url"];
  color_name: Product["color_name"];
  slug: Product["slug"];
  quantity: number;
}

export interface Cart {
  items: CartItem[];
}
