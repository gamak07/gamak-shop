import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "./store";

import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import ProductDetail from "./pages/ProductDetail";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
import Saved from "./pages/Saved";
import Signup from "./features/authentication/SignupForm";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import LoginForm from "./features/authentication/LoginForm";
import Checkout from "./features/payment/Checkout";
import ProtectedRoute from "./ui/ProtectedRoute";
import NotFound from "./ui/NotFound";
import Order from "./pages/Order";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { staleTime: 0 },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route element={<ProtectedRoute />}>
                <Route path="/account" element={<Account />} />
                <Route path="/saved" element={<Saved />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/orders" element={<Order />} />
              </Route>

              <Route index element={<Navigate replace to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/products" element={<Product />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/products/:productId" element={<ProductDetail />} />
              <Route path="/category/:categoryName" element={<Category />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<LoginForm />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
