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
  customer_id: number;
  order_date: string;
  total_amount: number;
}
