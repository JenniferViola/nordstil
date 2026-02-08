// types/order.ts

export interface OrderItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  img_url: string;
  slug?: string;
  brand?: string;
  color_name?: string;
  selectedColor?: string;
  selectedSize?: string;
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

// Sent to the backend
export interface OrderPayload {
  customer: CustomerInfo;
  items: OrderItem[];
  total_amount: number;
}

// Fetched from the backend

export interface FetchedOrder {
  id: number;
  customer_id: number;
  order_date: string;
  total_amount: number;
}
