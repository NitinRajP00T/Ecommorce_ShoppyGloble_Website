import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
// configure store for central store

const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});

export default store;