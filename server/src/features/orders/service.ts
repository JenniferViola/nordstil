import * as repo from './repo';
import { OrderPayload } from './types'; // Import your type

export function createOrder(orderData: OrderPayload): number | bigint {
  const orderId = repo.saveOrder(orderData);

  return orderId;
}

export function getOrderById(id: number) {
  const order = repo.findOrderById(id);
  console.log('ORDER OBJECT:', order);
  return order;
}
