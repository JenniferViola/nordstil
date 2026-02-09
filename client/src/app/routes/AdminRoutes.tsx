// AdminRoutes.tsx
import { Routes, Route } from "react-router";
import Index from "../pages/admin/Index";
import Products from "../pages/admin/Products";
import NewProduct from "../pages/admin/NewProduct";
import Categories from "../pages/admin/Categories";
import Orders from "../pages/admin/Orders";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route index element={<Index />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/new" element={<NewProduct />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/orders" element={<Orders />} />
    </Routes>
  );
}
