import ProductGrid from "../components/ProductGrid";

function ThemeTest() {
  return (
    <div className="grid gap-8">
      {/* ---- HEADINGS ---- */}
      <ProductGrid />

      {/* ---- HEADINGS ---- */}

      <h1>h1 Heading</h1>
      <h2>h2 Heading</h2>
      <h3>h3 Heading</h3>

      <p>This is a paragraph to test the theme styles.</p>
      <button className="btn-primary mt-4">Button</button>
    </div>
  );
}

export default ThemeTest;
