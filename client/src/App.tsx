import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";

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
