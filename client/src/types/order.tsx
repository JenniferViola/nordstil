// types/order.ts

export interface OrderItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  img_url: string;
  slug: string;
  brand?: string;
  color_name?: string;
  selectedColor: string;
  selectedSize: string;
}

export interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  street: string;
  postalCode: string;
  city: string;
  newsletter: boolean;
}

export interface OrderPayload {
  customer: CustomerInfo;
  items: OrderItem[];
  total_amount: number;
}

export interface FetchedOrder {
  id: number;
  order_date: string;
  total_price: number;
  customer_id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  street: string;
  postal_code: string;
  city: string;
  items: OrderItem[];
  item_count: number;
  total_amount: number;
}
