import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import WebLayout from "./components/layout/web/Layout";
import Index from "./pages/web/Index";
import NotFound from "./pages/web/NotFound";
import ProductDetails from "./pages/web/ProductDetails";
import Search from "./pages/web/Search";
import Cart from "./pages/web/Cart";
import Favorites from "./pages/web/Favorites";

function App() {
  return (
    <BrowserRouter>
      <WebLayout>
        <Routes>
          <Route index element={<Index />} />
          <Route path="/products/:slug" element={<ProductDetails />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </WebLayout>
    </BrowserRouter>
  );
}

export default App;
