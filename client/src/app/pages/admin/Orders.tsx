// admin/Orders.tsx
import PageTitle from "@/components/layout/shared/PageTitle";
import useOrders from "@/hooks/useOrders";
import { useState, useEffect } from "react";
import type { FetchedOrder } from "@/types/order";

export default function Orders() {
  const fetchedOrders = useOrders();
  const [orders, setOrders] = useState<FetchedOrder[]>([]);

  useEffect(() => {
    if (fetchedOrders) {
      setOrders(fetchedOrders);
    }
  }, [fetchedOrders]);

  return (
    <>
      <PageTitle title="Admin - Categories" />
      <section id="categories-container">
        <div className="max-w-7xl flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-semibold text-slate-900">
                Orders Overview
              </h1>
              <p className="text-sm text-slate-500 mt-1">
                All customer orders in the databse.
              </p>
            </div>
          </div>
          <table
            className="w-full max-w-7xl border-separate border-spacing-y-2
              rounded-lg"
          >
            <thead>
              <tr className="bg-[#f4f6f5]">
                <th
                  className="text-left py-[0.5rem] px-[0.5rem] border-b
                    border-[#4d5d53]/15 font-medium"
                >
                  Order ID
                </th>

                <th
                  className="text-left py-[0.5rem] px-[0.5rem] border-b
                    border-[#4d5d53]/15 font-medium"
                >
                  Customer ID
                </th>
                <th
                  className="text-left py-[0.5rem] px-[0.5rem] border-b
                    border-[#4d5d53]/15 font-medium"
                >
                  Order Date
                </th>

                <th
                  className="text-left py-[0.5rem] px-[0.5rem] border-b
                    border-[#4d5d53]/15 font-medium"
                >
                  Order Total
                </th>

                <th className="border-b border-[#4d5d53]/15"></th>
              </tr>
            </thead>

            <tbody className="transition-all">
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="text-[0.8rem] hover:translate-0.5 transition-all
                    hover:bg-[#f4f6f5]"
                >
                  <td
                    className="p-1 border-b border-[#4d5d53]/15 px-[0.5rem]
                      font-medium transition-all cursor-pointer"
                  >
                    {order.id}
                  </td>

                  <td
                    className="p-1 border-b border-[#4d5d53]/15 px-[0.5rem]
                      transition-all"
                  >
                    {order.customer_id}
                  </td>
                  <td
                    className="p-1 border-b border-[#4d5d53]/15 px-[0.5rem]
                      transition-all"
                  >
                    {order.order_date}
                  </td>
                  <td
                    className="p-1 border-b border-[#4d5d53]/15 px-[0.5rem]
                      transition-all"
                  >
                    {order.total_amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
