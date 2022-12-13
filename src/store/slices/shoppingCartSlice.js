import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: initialState,
  reducers: {},
});

export default shoppingCartSlice.reducer;
export const {} = shoppingCartSlice.actions;
