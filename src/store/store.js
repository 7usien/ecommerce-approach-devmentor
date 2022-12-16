import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './slices/productsSlice';
import authSlice from './slices/authSlice';
import shoppingCartSlice from './slices/shoppingCartSlice';

const store = configureStore({
  reducer: {
    productsSlice,
    authSlice,
    shoppingCartSlice,
  },
});

export default store;
