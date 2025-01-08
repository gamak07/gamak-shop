import { createSlice } from "@reduxjs/toolkit";
import { useToast } from "./useToast";

const { addToCartToast, removeFromCartToast, clearCartToast, existingItemToast } = useToast();
const savedSlice = createSlice({
  name: "saved",
  initialState: {
    items: [],
  },

  reducers: {
    addToSaved(state, action) {
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
    removeFromSaved(state, action) {
        state.items = state.items.filter((item) => item.id !== action.payload);
        removeFromCartToast();
    },
    clearSaved(state) {
        state.items = [];
        clearCartToast()
    },
  },
});
export const { addToSaved, removeFromSaved, clearSaved } = savedSlice.actions;
export default savedSlice.reducer;
