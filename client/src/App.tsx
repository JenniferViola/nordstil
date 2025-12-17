import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Layout from "./components/layout/layout";
import Index from "./pages/index";
import ProductDetails from "./pages/productDetails";
import Cart from "./pages/cart";
import Favorites from "./pages/favorites";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Index />} />
          <Route path="/products/:slug" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
