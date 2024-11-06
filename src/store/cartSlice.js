

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart', 
  initialState, 
  reducers: {
    // Add item to cart or increase quantity if already in cart
    addItem: (state, action) => {
      const itemExists = state.items.find(item => item.id === action.payload.id);
      if (itemExists) {
        itemExists.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    // Remove item from cart by id
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    // Increase quantity of specific item
    incrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
    },
    // Decrease quantity or remove item if quantity is 1
    decrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item && item.quantity === 1) {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      } else if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    }
  }
});


export const { addItem, removeItem, incrementQuantity, decrementQuantity } = cartSlice.actions;


export default cartSlice.reducer;
