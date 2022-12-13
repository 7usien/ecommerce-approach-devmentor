import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogged: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    isLoggedInOut: (state, action) => {
      state.isLogged = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { isLoggedInOut } = authSlice.actions;
