import { createSlice } from "@reduxjs/toolkit";
import { useToast } from "./useToast";

const { addToCartToast, removeFromCartToast, clearCartToast, existingItemToast } = useToast();
const cartslice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
          existingItem.quantity += 1;
          existingItemToast()
      } else {
        state.items.push({ ...product, quantity: 1 });
        addToCartToast();
      }
    },
    removeFromCart(state, action) {
        state.items = state.items.filter((item) => item.id !== action.payload);
        removeFromCartToast();
    },
    clearCart(state) {
        state.items = [];
        clearCartToast()
    },
  },
});
export const { addToCart, removeFromCart, clearCart } = cartslice.actions;
export default cartslice.reducer;
