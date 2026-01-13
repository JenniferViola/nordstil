// Cart.tsx
const userCart: string[] = ["Item 1", "Item 2", "Item 3"];

export default function Cart() {
  return (
    <>
      <h1>Shopping Cart</h1>
      <ul></ul>
      {userCart.map((cartItem) => (
        <li key={cartItem}>{cartItem}</li>
      ))}
    </>
  );
}
