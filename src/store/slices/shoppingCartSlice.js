import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { set, ref } from 'firebase/database';
import { db } from '../../firebase/firebase';
import { useDispatch } from 'react-redux';

const initialState = [
  //
];

//

const shoppingCartSlice = createSlice({
  name: 'shoppingCartSlice',
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      state = state.push(action.payload);
    },
  },
});

export const addToCartAsync = (product, uid) => (dispatch, getState) => {
  const state = structuredClone(getState().shoppingCartSlice);
  console.log(state);

  set(ref(db, `users/${uid}`), state).then(() => {
    dispatch(addToCart(product));
  });
};

export default shoppingCartSlice.reducer;
export const { addToCart } = shoppingCartSlice.actions;
