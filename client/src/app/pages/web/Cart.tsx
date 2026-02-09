// Cart.tsx
import { useCart } from "@/components/context/CartContext";
import type { Cart } from "@/types/cart";
import PageTitle from "@/components/layout/shared/PageTitle";
import { Divider } from "@/components/ui/Divider";
import { RippleButton } from "@/components/ui/RippleButton";
import CartCard from "@/components/ui/cart/CartCard";
import { useNavigate } from "react-router";

export default function Cart() {
  const { items, totalItems, totalPrice, updateQuantity, removeItem } =
    useCart();

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
            justify-center gap-12"
        >
          <div className="flex flex-col gap-2 text-sm">
            <h2>Your shopping cart is empty!</h2>
            <p>Fill it with products to continue.</p>
          </div>
          <div>
            <RippleButton
              onClick={handleContinueShopping}
              className="w-full md:w-lg font-bold bg-primary-600
                text-secondary-200"
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
        <h1 className="text-2xl">{`Shopping Cart ${items.length > 0 ? `(${totalItems})` : ``}`}</h1>
        <div id="items-container" className="flex flex-col gap-8">
          {items.map((item) => (
            <CartCard
              key={item.id}
              item={item}
              handleRemove={() =>
                removeItem(item.id, item.selectedSize, item.selectedColor)
              }
              handleAdd={() =>
                updateQuantity(
                  item.id,
                  item.selectedSize,
                  item.selectedColor,
                  item.quantity + 1,
                )
              }
              handleSubtract={() => {
                if (item.quantity > 1) {
                  updateQuantity(
                    item.id,
                    item.selectedSize,
                    item.selectedColor,
                    item.quantity - 1,
                  );
                } else {
                  removeItem(item.id, item.selectedSize, item.selectedColor);
                }
              }}
              classNameImg="w-[8rem]"
              classNameCard="text-base"
            />
          ))}
        </div>
        <div id="order-total" className="flex flex-col gap-4 max-w-[50rem]">
          <div id="order-sum" className="flex flex-col gap-2">
            <Divider variant="dark"></Divider>

            <div id="price-total" className="flex justify-between font-bold">
              <p>Total:</p>
              <p>{`${totalPrice} SEK`}</p>
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
