// orders/types.ts
export interface OrderItem {
  id: number;
  quantity: number;
  price: number;
}

// The Request Body from Frontend (DTO)
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
