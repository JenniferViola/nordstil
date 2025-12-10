import ProductGrid from "../components/ProductGrid";
import Hero from "../components/Hero";

function ThemeTest() {
  return (
    <section>
      <Hero />
      <ProductGrid />
      <h1>h1 Heading</h1>
      <h2>h2 Heading</h2>
      <h3>h3 Heading</h3>

      <p>This is a paragraph to test the theme styles.</p>
      <button className="btn-primary mt-4">Button</button>
    </section>
  );
}

export default ThemeTest;
