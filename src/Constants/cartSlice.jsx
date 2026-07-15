

import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    data: [],
  },
  reducers: {

    // ✅ Add item
    addItem: (state, action) => {
      state.data.push(action.payload);
    },

    // ✅ Remove single item
    removeItem: (state, action) => {
      state.data = state.data.filter(
        (item) => item.id !== action.payload
      );
    },

    // ✅ Clear full cart
    clearCart: (state) => {
      state.data = [];
    }

  }
})


export const { addItem, removeItem, clearCart } = cartSlice.actions

export default cartSlice.reducer