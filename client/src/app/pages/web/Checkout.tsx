// Checkout.tsx
import PageTitle from "@/components/layout/shared/PageTitle";
import CartCard from "@/components/ui/cart/CartCard";
import { Divider } from "@/components/ui/Divider";
import { RippleButton } from "@/components/ui/RippleButton";
import { useCart } from "@/components/context/CartContext";
import { usePlaceOrder } from "@/hooks/usePlaceOrder";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import type { CustomerInfo, OrderPayload } from "@/types/order";
import { SlExclamation } from "react-icons/sl";

export default function Checkout() {
  const { items, totalItems, totalPrice, updateQuantity, removeItem } =
    useCart();

  const { placeOrder, isSubmitting } = usePlaceOrder();

  let navigate = useNavigate();

  const shipping = 49;
  const orderTotal = totalPrice + shipping;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CustomerInfo>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      street: "",
      postalCode: "",
      city: "",
      newsletter: false,
    },
  });

  const onSubmit: SubmitHandler<CustomerInfo> = (data) => {
    const order: OrderPayload = {
      customer: data,
      items,
      total_amount: totalPrice,
    };

    placeOrder(order);
  };

  if (items.length === 0) {
    navigate("/cart");
  }

  return (
    <div
      className="flex flex-col gap-8 w-full max-w-[50rem] mx-auto
        justify-center"
    >
      <PageTitle title={`Checkout – Nordstil`} />

      <>
        <section id="checkout-content" className={"flex flex-col gap-8 w-full"}>
          <h1 className="text-2xl font-medium">{`Checkout ${items.length > 0 ? `(${totalItems})` : ``}`}</h1>
          <div id="items-container" className="flex flex-col gap-6">
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
                classNameImg="w-[5rem]"
                classNameCard="text-sm"
              />
            ))}
          </div>
        </section>

        <section
          id="customer-info"
          className="flex flex-col gap-8 max-w-[50rem]"
        >
          <h1 className="text-xl">Customer details</h1>

          <Divider variant="dark"></Divider>

          <form
            className="flex flex-col gap-8 text-sm"
            onSubmit={handleSubmit(onSubmit)}
          >
            <fieldset className="flex flex-col gap-6 md:flex-row md:w-full">
              <div className="flex flex-col gap-6 w-full">
                <div className="flex flex-col gap-1 max-w-[22rem]">
                  <label htmlFor="first-name" className="font-bold">
                    *First name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    placeholder="First name"
                    className="text-input"
                    {...register("firstName", { required: true })}
                  />
                  {errors.firstName && (
                    <span
                      className="text-red-600 text-xs flex items-center gap-1"
                    >
                      <SlExclamation /> Required
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1 max-w-[22rem]">
                  <label htmlFor="last-name" className="font-bold">
                    *Last name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    placeholder="Last name"
                    className="text-input"
                    {...register("lastName", { required: true })}
                  />
                  {errors.lastName && (
                    <span
                      className="text-red-600 text-xs flex items-center gap-1"
                    >
                      <SlExclamation /> Required
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-6 w-full">
                <div className="flex flex-col gap-1 max-w-[20rem]">
                  <label htmlFor="email" className="font-bold">
                    *E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="E-mail"
                    className="text-input"
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                  />
                  {errors.email && (
                    <span
                      className="text-red-600 text-xs flex items-center gap-1"
                    >
                      <SlExclamation /> Required
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-1 max-w-[20rem]">
                  <label htmlFor="phone" className="font-bold">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Phone number"
                    className="text-input"
                    {...register("phone")}
                  />
                </div>
              </div>
            </fieldset>

            <fieldset
              className="rounded-sm border border-primary-800/30 px-4 pb-6 pt-4
                max-w-[50rem]"
            >
              <legend className="font-bold px-1.5 -ml-2">Adress</legend>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1 max-w-[25rem]">
                  <label htmlFor="street" className="font-bold">
                    *Street
                  </label>
                  <input
                    type="text"
                    id="street"
                    placeholder="Street"
                    className="text-input"
                    {...register("street", { required: true })}
                  />
                  {errors.street && (
                    <span
                      className="text-red-600 text-xs flex items-center gap-1"
                    >
                      <SlExclamation /> Required
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1 max-w-[12rem]">
                  <label htmlFor="postal-code" className="font-bold">
                    *Postal code
                  </label>

                  <input
                    type="text"
                    id="postal-code"
                    className="text-input"
                    {...register("postalCode", { required: true })}
                  />
                  {errors.postalCode && (
                    <span
                      className="text-red-600 text-xs flex items-center gap-1"
                    >
                      <SlExclamation /> Required
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1 max-w-[20rem]">
                  <label htmlFor="city" className="font-bold">
                    *City
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="text-input"
                    {...register("city", { required: true })}
                  />
                  {errors.city && (
                    <span
                      className="text-red-600 text-xs flex items-center gap-1"
                    >
                      <SlExclamation /> Required
                    </span>
                  )}
                </div>
              </div>
            </fieldset>

            <div className="flex gap-2 text-base -mt-2">
              <input
                type="checkbox"
                id="newsletter"
                {...register("newsletter")}
              />
              <label htmlFor="newsletter" className="font-bold">
                Subscribe to newsletter
              </label>
            </div>

            <div id="order-total" className="flex flex-col gap-4">
              <div id="order-sum" className="flex flex-col gap-2">
                <div id="shipping" className="flex justify-between">
                  <p>Shipping:</p>
                  <p>49 SEK</p>
                </div>

                <Divider variant="dark"></Divider>

                <div
                  id="price-total"
                  className="flex justify-between font-bold"
                >
                  <p>Total:</p>
                  <p>{`${orderTotal} SEK`}</p>
                </div>
              </div>

              <div className="flex justify-center">
                <RippleButton
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full lg:max-w-1/2 text-md font-bold
                    bg-primary-600 text-secondary-200 mb-6"
                >
                  {isSubmitting ? "Processing..." : "Place Order"}
                </RippleButton>
              </div>
            </div>
          </form>
        </section>
      </>
    </div>
  );
}
