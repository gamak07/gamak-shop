import {lazy, Suspense} from 'react'

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "./store";

const Home = lazy(() => import("./pages/Home"));
const Product = lazy(() => import("./pages/Product"));
const About = lazy(() => import("./pages/About"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Category = lazy(() => import("./pages/Category"));
const Cart = lazy(() => import("./pages/Cart"));
const Account = lazy(() => import("./pages/Account"));
const Saved = lazy(() => import("./pages/Saved"));
const Signup = lazy(() => import("./features/authentication/SignupForm"));
const LoginForm = lazy(() => import("./features/authentication/LoginForm"));
const Checkout = lazy(() => import("./features/payment/Checkout"));
const Order = lazy(() => import("./pages/Order"));

import AppLayout from "./ui/AppLayout";


import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import ProtectedRoute from "./ui/ProtectedRoute";

import NotFound from "./ui/NotFound";
import Loading from "./ui/Loading";

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
        <Suspense fallback={<Loading />}/>
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
