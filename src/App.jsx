import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import "./App.css";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import { Provider } from "react-redux";
import { store } from "./store";
import Account from "./pages/Account";
import Saved from "./pages/Saved";

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
              <Route index element={<Navigate replace to="/" />} />
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Product />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/products/:productId" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path='/account' element={<Account />} />
              <Route path="/saved" element={<Saved />} />
              <Route path="/orders" element />
            </Route>
            <Route path="*" element />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
