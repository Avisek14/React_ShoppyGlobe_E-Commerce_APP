// Cart slice - manages all cart state
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    // Add product or increase quantity if already exists
    addToCart: (state, action) => {
      const existing = state.find(item => item.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    // Remove product from cart
    removeFromCart: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
    // Increase quantity
    increaseQuantity: (state, action) => {
      const item = state.find(item => item.id === action.payload);
      if (item) item.quantity += 1;
    },
    // Decrease quantity - minimum 1
    decreaseQuantity: (state, action) => {
      const item = state.find(item => item.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    // Clear entire cart after order placed
    clearCart: () => [],
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;