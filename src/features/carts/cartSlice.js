


import { createSlice } from "@reduxjs/toolkit";
import { useToast } from "./useToast";

const { addToCartToast, removeFromCartToast, clearCartToast, existingItemToast } = useToast();

const initialState = {
  items: JSON.parse(localStorage.getItem('guestCart')) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart(state, action) {
      state.cart = action.payload
      localStorage.setItem('guestCart', JSON.stringify(action.payload))
    },
    addToCart(state, action) {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItemToast();
      } else {
        state.items.push({ ...product, quantity: 1 });
        localStorage.setItem('guestCart', JSON.stringify(state.items));
        addToCartToast();
      }
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem('guestCart', JSON.stringify(state.items));
      removeFromCartToast();
    },
    clearCart(state) {
      state.items = [];
      localStorage.setItem('guestCart', JSON.stringify(state.items));
      clearCartToast();
    },
  },
});

export const { addToCart, removeFromCart, clearCart, setCart } = cartSlice.actions;
export default cartSlice.reducer;
