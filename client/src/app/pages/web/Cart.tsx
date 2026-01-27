// Cart.tsx
import { useCart } from "@/hooks/useCart";
import type { Cart } from "@/types/cart";
import PageTitle from "@/components/layout/shared/PageTitle";
import { Divider } from "@/components/ui/Divider";
import { RippleButton } from "@/components/ui/RippleButton";
import CartCard from "@/components/ui/cart/CartCard";
import { useNavigate } from "react-router";

export default function Cart() {
  const { items } = useCart();
  const { totalItems, totalPrice } = useCart();
  let navigate = useNavigate();

  const handleToCheckout = () => {
    setTimeout(() => {
      navigate("/checkout");
    }, 200);
  };

  return (
    <div className="flex flex-col gap-8">
      <PageTitle title={`Shopping Cart – Nordstil`} />

      <section id="cart-content" className="flex flex-col gap-6">
        <h1 className="text-2xl font-medium">{`Shopping Cart (${totalItems})`}</h1>

        <div id="items-container" className="flex flex-col gap-8">
          {items.map((item) => (
            <CartCard item={item} />
          ))}
        </div>
      </section>
      <div id="place-order" className="flex flex-col gap-4">
        <div id="order-sum" className="flex flex-col gap-2">
          <div id="shipping" className="flex justify-between">
            <p>Shipping:</p>
            <p>49 SEK</p>
          </div>

          <Divider variant="dark"></Divider>

          <div id="price-total" className="flex justify-between font-bold">
            <p>Total:</p>
            <p>{`${totalPrice} SEK`}</p>
          </div>
        </div>
        {items.length < 1 ? (
          <button
            onClick={() => alert("The cart is empty!")}
            className="relative overflow-hidden rounded-lg px-4 py-2 text-sm
              text-center w-full lg:w-1/2 font-bold bg-primary-900/60
              text-secondary-200/70 mb-6"
          >
            To checkout
          </button>
        ) : (
          <RippleButton
            onClick={handleToCheckout}
            className="w-full lg:w-1/2 font-bold bg-primary-600
              text-secondary-200 mb-6"
          >
            To checkout
          </RippleButton>
        )}
      </div>
    </div>
  );
}
