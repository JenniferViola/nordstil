// orders/types.ts
export interface OrderItem {
  id: number;
  quantity: number;
  price: number;
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
    newsletter: number;
  };
  items: OrderItem[];
  total_amount: number;
}

export interface Order {
  id: number;
  order_date: string;
  total_price: number;
  customer_id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  street: string;
  postalCode: string;
  city: string;
  item_count: number;
  total_amount: number;
}
