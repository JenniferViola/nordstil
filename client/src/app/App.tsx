// App.tsx
import { BrowserRouter, Routes, Route } from "react-router";
import { CartProvider } from "../components/features/cart/Provider";
import "./App.css";
import WebLayout from "../components/layout/web/Layout";
import AdminLayout from "../components/layout/admin/Layout";
import WebRoutes from "./routes/WebRoutes";
import AdminRoutes from "./routes/AdminRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <CartProvider>
              <WebLayout>
                <WebRoutes />
              </WebLayout>
            </CartProvider>
          }
        />

        <Route
          path="/admin/*"
          element={
            <AdminLayout>
              <AdminRoutes />
            </AdminLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
