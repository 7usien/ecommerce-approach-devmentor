import { createSlice } from '@reduxjs/toolkit';

  
const initialState = {
  products: [],
};

const productsSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products = action.payload;
    },
  },
});

export default productsSlice.reducer;
export const { addProduct } = productsSlice.actions;
