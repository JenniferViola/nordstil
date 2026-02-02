// types/order.tsx

export interface OrderItem {
  product_id: number;
  title: string;
  price: number;
  quantity: number;
  img_url: string;
}

export interface OrderPayloadItem {
  id: number;
  quantity: number;
  price: number;
}

export interface FetchedOrder {
  id: number;
  order_date: string;
  total_amount: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  street: string;
  postal_code: string;
  city: string;
  items: OrderItem[];
}

export interface OrderPayload {
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    street: string;
    postalCode: string;
    city: string;
    newsletter: boolean;
  };
  items: OrderPayloadItem[]; // Use the simpler item type here
  total_amount: number;
}
