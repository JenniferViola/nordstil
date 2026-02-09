import { Request, Response, NextFunction } from 'express';
import * as service from './service';
import { OrderPayload } from './types'; // Import your type

export function postOrder(req: Request, res: Response, next: NextFunction) {
  try {
    console.log('Controller got:', req.body);

    const orderData: OrderPayload = req.body;
    const newOrderId = service.createOrder(orderData);

    res.status(201).json({
      message: 'Order placed successfully!',
      orderId: newOrderId,
    });
  } catch (err) {
    next(err);
  }
}

export function getOrder(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const order = service.getOrderById(Number(id));

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (err) {
    next(err);
  }
}

export async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    let orders;
    orders = service.getAllOrders();

    res.json(orders);
  } catch (err) {
    next(err);
  }
}
