// Cart.tsx
import { useCart } from "@/hooks/useCart";
import type { Cart } from "@/types/cart";
import PageTitle from "@/components/layout/shared/PageTitle";
import { Divider } from "@/components/ui/Divider";
import { RippleButton } from "@/components/ui/RippleButton";
import CartCard from "@/components/ui/cart/CartCard";
import { useNavigate } from "react-router";

export default function Cart() {
  const { items, totalItems, totalPrice, updateQuantity, removeItem } =
    useCart();

  const shipping = 49;
  const orderTotal = totalPrice + shipping;

  let navigate = useNavigate();

  const handleToCheckout = () => {
    setTimeout(() => {
      navigate("/checkout");
    }, 200);
  };

  const handleContinueShopping = () => {
    setTimeout(() => {
      navigate("/search");
    }, 200);
  };

  if (items.length === 0) {
    return (
      <>
        <PageTitle title={`Shopping Cart – Nordstil`} />

        <div
          id="cart-empty"
          className="flex flex-col text-center h-[25rem] w-full mx-auto
            justify-center gap-8"
        >
          <div className="flex flex-col gap-2 text-sm">
            <h2>Your shopping cart is empty!</h2>
            <p>Fill it with products to continue.</p>
          </div>
          <div
            className="flex flex-col gap-8 absolute bottom-5 left-0 w-full
              items-center"
          >
            <Divider variant="dark"></Divider>
            <RippleButton
              onClick={handleContinueShopping}
              className="w-full md:w-lg font-bold bg-primary-600
                text-secondary-200 mb-6"
            >
              Continue shopping
            </RippleButton>
          </div>
        </div>
      </>
    );
  }

  return (
    <div
      className="flex flex-col gap-8 w-full max-w-[50rem] mx-auto
        justify-center"
    >
      <PageTitle title={`Shopping Cart – Nordstil`} />

      <section id="cart-content" className="flex flex-col gap-8">
        <h1 className="text-2xl font-medium">{`Shopping Cart ${items.length > 0 ? `(${totalItems})` : ``}`}</h1>
        <div id="items-container" className="flex flex-col gap-8">
          {items.map((item) => (
            <CartCard
              key={item.id}
              item={item}
              handleRemove={() => removeItem(item.id)}
              handleAdd={() => updateQuantity(item.id, item.quantity + 1)}
              handleSubtract={() => {
                if (item.quantity > 1) {
                  updateQuantity(item.id, item.quantity - 1);
                } else {
                  removeItem(item.id);
                }
              }}
              classNameImg="w-[8rem]"
              classNameCard="text-base"
            />
          ))}
        </div>
        <div id="order-total" className="flex flex-col gap-4 max-w-[50rem]">
          <div id="order-sum" className="flex flex-col gap-2">
            <div id="shipping" className="flex justify-between">
              <p>Shipping:</p>
              <p>49 SEK</p>
            </div>

            <Divider variant="dark"></Divider>

            <div id="price-total" className="flex justify-between font-bold">
              <p>Total:</p>
              <p>{`${orderTotal} SEK`}</p>
            </div>
          </div>
          <div className="flex justify-center">
            <RippleButton
              onClick={handleToCheckout}
              className="w-full lg:w-1/2 text-md font-bold bg-primary-600
                text-secondary-200 mb-6"
            >
              To checkout
            </RippleButton>
          </div>
        </div>
      </section>
    </div>
  );
}
