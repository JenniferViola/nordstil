// ProductDetails.jsx

export default function ProductDetails(product) {
  return (
    <>
      <section id="product-details" className="grid gap-4">
        <div id="image-container">
          <img src={product.img_url} alt={product.title} />
        </div>
        <div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <button className="btn">Add to basket</button>
        </div>
      </section>
      <section id="similar-products">
        <h1>Similar Products</h1>
      </section>
    </>
  );
}
