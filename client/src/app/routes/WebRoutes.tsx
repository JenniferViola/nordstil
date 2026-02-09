// WebRoutes.tsx
import { Routes, Route } from "react-router";
import Index from "../pages/web/Index";
import ProductDetails from "../pages/web/ProductDetails";
import Search from "../pages/web/Search";
import Cart from "../pages/web/Cart";
import Checkout from "../pages/web/Checkout";
import Confirmation from "../pages/web/Confirmation";
import NotFound from "../pages/web/NotFound";
import Magazine from "../pages/web/Magazine";

export default function WebRoutes() {
  return (
    <Routes>
      <Route index element={<Index />} />
      <Route path="products/:slug" element={<ProductDetails />} />
      <Route path="search" element={<Search />} />
      <Route path="cart" element={<Cart />} />
      <Route path="confirmation/:id" element={<Confirmation />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="magazine" element={<Magazine />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
