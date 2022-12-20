import { createSlice } from '@reduxjs/toolkit';
import { set, ref } from 'firebase/database';
import { db } from '../../firebase/firebase';

const initialState = [
  //
];

//

const shoppingCartSlice = createSlice({
  name: 'shoppingCartSlice',
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => action.payload,
  },
});

let Totalstate = [];
export const addToCartAsync = (product, uid) => (dispatch, getState) => {
  Totalstate.push({ ...product });

  set(ref(db, `users/${uid}`), Totalstate).then(() => {
    dispatch(addToCart(product));
  });

  console.log(Totalstate);
};

export default shoppingCartSlice.reducer;
export const { addToCart } = shoppingCartSlice.actions;
