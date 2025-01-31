// Example action and reducer for wishlistSlice
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishlist: [],
  loading: false,
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    getWishlist: (state) => {
      state.loading = true;
    },
    setWishlist: (state, action) => {
      state.loading = false;
      state.wishlist = action.payload;
    },
    addToWishlist: (state, action) => {
      const productExists = state.wishlist.some(
        (product) => product.id === action.payload.id
      );
      if (!productExists) {
        state.wishlist.push(action.payload);
      }
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

export const {
  getWishlist,
  setWishlist,
  addToWishlist,
  removeFromWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
