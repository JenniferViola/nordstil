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
      <PageTitle title="Admin - Orders" />
      <section id="categories-container">
        <div className="max-w-7xl flex flex-col gap-4 overflow-x-auto">
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
            className="w-full text-[0.8rem] max-w-7xl border-separate
              border-spacing-y-2 rounded-lg"
          >
            <thead>
              <tr className="bg-[#f4f6f5]">
                <th
                  className="text-left py-[0.5rem] px-[0.5rem] border-b
                    border-[#4d5d53]/15 font-medium whitespace-nowrap"
                >
                  ID
                </th>

                <th
                  className="text-left py-[0.5rem] px-[0.5rem] border-b
                    border-[#4d5d53]/15 font-medium whitespace-nowrap"
                >
                  E-mail
                </th>
                <th
                  className="text-left py-[0.5rem] px-[0.5rem] border-b
                    border-[#4d5d53]/15 font-medium whitespace-nowrap"
                >
                  Order Date
                </th>
                <th
                  className="text-left py-[0.5rem] px-[0.5rem] border-b
                    border-[#4d5d53]/15 font-medium whitespace-nowrap"
                >
                  Order Items
                </th>
                <th
                  className="text-left py-[0.5rem] px-[0.5rem] border-b
                    border-[#4d5d53]/15 font-medium whitespace-nowrap"
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
                  className="hover:translate-0.5 transition-all
                    hover:bg-[#f4f6f5]"
                >
                  <td
                    className="p-1 border-b border-[#4d5d53]/15 px-[0.5rem]
                      font-medium transition-all whitespace-nowrap
                      cursor-pointer"
                  >
                    {order.id}
                  </td>
                  <td
                    className="p-1 border-b border-[#4d5d53]/15 px-[0.5rem]
                      transition-all whitespace-nowrap"
                  >
                    {order.email}
                  </td>
                  <td
                    className="p-1 border-b border-[#4d5d53]/15 px-[0.5rem]
                      transition-all whitespace-nowrap"
                  >
                    {order.order_date}
                  </td>
                  <td
                    className="p-1 border-b border-[#4d5d53]/15 px-[0.5rem]
                      transition-all whitespace-nowrap"
                  >
                    {order.item_count}
                  </td>
                  <td
                    className="p-1 border-b border-[#4d5d53]/15 px-[0.5rem]
                      transition-all whitespace-nowrap"
                  >
                    {order.total_amount} SEK
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
