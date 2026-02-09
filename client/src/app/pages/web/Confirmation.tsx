// Confirmation.tsx
import { Divider } from "@/components/ui/Divider";
import OrderItemCard from "@/components/ui/orders/OrderItemCard";
import { useOrderById } from "@/hooks/useOrderById";
import { NavLink, useParams } from "react-router";
import { useEffect } from "react";
import { useCart } from "@/components/context/CartContext";

export default function Confirmation() {
  const { id } = useParams<{ id: string }>();
  const { order, loading, error } = useOrderById(id);
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);

  if (loading) return <p>Loading your receipt...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <section
        id="order-confirmation"
        className="flex flex-col gap-6 lg:gap-8 mt-8 w-full max-w-[50rem]
          mx-auto justify-center"
      >
        <div className="text-center flex flex-col gap-4 lg:gap-2 mx-4 mb-2">
          {/* Optional: Add confetti effect? */}
          <h1 className="font-bold">Success! 🎉</h1>

          <h2>Thank you for your order, {order?.first_name}!</h2>
        </div>

        <div
          className="text-sm flex flex-col lg:flex-row lg:justify-between gap-1"
        >
          <p>
            <span className="font-bold">Order ID:</span> #00000{order?.id}
          </p>
          <p>
            <span className="font-bold">Order Date: </span>
            {order?.order_date}
          </p>
        </div>

        <div id="items-container" className="flex flex-col gap-8">
          {order?.items.map((item) => (
            <OrderItemCard
              key={item.id}
              item={item}
              classNameImg="w-[6rem] min-w-[6rem]"
              classNameCard="text-base w-full"
            />
          ))}
        </div>

        <div id="order-total" className="flex flex-col gap-4">
          <div id="order-sum" className="flex flex-col gap-2">
            <div id="shipping" className="flex justify-between">
              <p>Shipping:</p>
              <p>49 SEK</p>
            </div>

            <Divider variant="dark" />

            <div id="price-total" className="flex justify-between font-bold">
              <p>Total:</p>
              <p>{`${order?.total_amount} SEK`}</p>
            </div>
          </div>
        </div>
        <div id="customer-details" className="flex flex-col gap-1">
          <h3 className="font-bold text-lg mb-2">Delivery Details</h3>
          <Divider variant="dark" className="mb-2" />
          <div className="flex flex-col gap-1 text-sm">
            <div className="flex flex-col gap-1">
              <p>
                <span className="font-bold">Name:</span> {order?.first_name}{" "}
                {order?.last_name}
              </p>
              <p>
                <span className="font-bold">Address:</span> {order?.street},{" "}
                {order?.postal_code}, {order?.city}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p>
                <span className="font-bold">E-mail:</span> {order?.email}
              </p>
              <p>
                <span className="font-bold">Phone:</span> {order?.phone}
              </p>
            </div>
          </div>
        </div>
        <Divider variant="dark" />
        <div className="flex flex-col gap-8">
          <div className="text-center text-sm">
            <p>
              A confirmation email has been sent to:{" "}
              <span className="font-bold">{order?.email}</span>
            </p>
          </div>
          <div className="text-center text-xs mb-4 lg:mb-2">
            <p>
              If you have any questions regarding your order, please contact our
              <span className="font-extrabold">
                <NavLink to={"/"}> support team.</NavLink>
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
