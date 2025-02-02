import { createSlice } from '@reduxjs/toolkit';


const countSlice = createSlice({
  name: 'count',
  initialState: {
    items: {},
  },
  reducers: {
    increment: (state, action) => {
      const { id } = action.payload;
      if (!state.items[id]) {
        state.items[id] = 1;
      } else {
        state.items[id] += 1;
      }
    },
    decrement: (state, action) => {
      const { id } = action.payload;
      if (state.items[id] && state.items[id] > 1) {
        state.items[id] -= 1;
      }
    },
  },
});

export const { increment, decrement } = countSlice.actions;
export default countSlice.reducer;
