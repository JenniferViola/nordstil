// orders/repo.ts
import db from '../../data/db';
import { OrderPayload } from './types'; // Import your type

export function saveOrder(data: OrderPayload): number | bigint {
  const { customer, items, total_amount } = data;

  // Wrap everything in a transaction
  const transaction = db.transaction(() => {
    const customerStmt = db.prepare(`
        INSERT INTO customers (first_name, last_name, email, phone, street, postal_code, city, newsletter) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?) 
        ON CONFLICT(email) DO UPDATE SET email=excluded.email 
        RETURNING id
    `);

    const customerRow = customerStmt.get(
      customer.firstName,
      customer.lastName,
      customer.email,
      customer.phone || null,
      customer.street,
      customer.postalCode,
      customer.city,
      customer.newsletter ? 1 : 0,
    ) as { id: number };

    const customerId = customerRow.id;

    // Insert order
    const orderStmt = db.prepare(`
        INSERT INTO orders (customer_id, total_amount) 
        VALUES (?, ?)
        `);

    const orderResult = orderStmt.run(customerId, total_amount);

    const orderId = orderResult.lastInsertRowid;

    // 3. Insert each Item
    const itemStmt = db.prepare(`
      INSERT INTO order_items (order_id, product_id, quantity, price)
      VALUES (?, ?, ?, ?)
    `);

    for (const item of items) {
      itemStmt.run(orderId, item.id, item.quantity, item.price);
    }

    return orderId;
  });

  // Execute the transaction
  return transaction();
}

export function findOrderById(id: number) {
  // 1. Get the Order and Customer info
  const order = db
    .prepare(
      `
    SELECT orders.*, 
    customers.first_name, customers.last_name, 
    customers.email, customers.phone, 
    customers.street, customers.postal_code, customers.city 
    FROM orders 
    JOIN customers ON orders.customer_id = customers.id 
    WHERE orders.id = ?
  `,
    )
    .get(id);

  if (!order) return null;

  // 2. Get the Items and Product titles
  const items = db
    .prepare(
      `
    SELECT order_items.*, products.title, products.img_url
    FROM order_items
    JOIN products ON order_items.product_id = products.id
    WHERE order_items.order_id = ?
  `,
    )
    .all(id);

  // 3. Combine them
  return { ...order, items };
}
