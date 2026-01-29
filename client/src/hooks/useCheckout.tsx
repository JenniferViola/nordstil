// useCheckout.tsx

const BASE_URL = import.meta.env.VITE_API_URL;

// TO DO: Fixa interface/type för customer, hur?
export default function useCheckout(customer:) {
  fetch(`${BASE_URL}/customers`, {
    method: "POST",
    headers: {
      "Content Type": "application/json",
    },
    body: JSON.stringify(customer),
  }).then((resp) => {
    console.log("Customer saved");
  });
}
