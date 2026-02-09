import * as repo from './repo';
import { Order, OrderPayload } from './types';

export function createOrder(orderData: OrderPayload): number | bigint {
  const orderId = repo.saveOrder(orderData);

  return orderId;
}

export function getOrderById(id: number) {
  const order = repo.findOrderById(id);
  return order;
}

export function getAllOrders(): Order[] {
  return repo.findAll();
}
