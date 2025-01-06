import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./App.css";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { staleTime: 0 },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="/" />} />
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Route>
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/orders" element />
          <Route path="/wishlist" element />
          <Route path='/cart' element={<Cart />} />
          <Route path="*" element />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
