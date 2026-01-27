// Checkout.tsx
import { RippleButton } from "@/components/ui/RippleButton";
import { useNavigate } from "react-router";

export default function Checkout() {
  let navigate = useNavigate();

  const handlePlaceOrder = () => {
    setTimeout(() => {
      navigate("/confirmation");
    }, 200);
  };
  return (
    <>
      <section id="checkout-container">
        <h1>Checkout</h1>
        <RippleButton
          onClick={handlePlaceOrder}
          className="w-full lg:w-1/2 font-bold bg-primary-600 text-secondary-200
            mb-6"
        >
          Place order
        </RippleButton>
      </section>
    </>
  );
}
