import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../utils/url';

const initialState = {
  wishlist: [],
  loading: false,
};

export const addToWishlist = createAsyncThunk('wishlist/addToWishlist', async (product, thunkAPI) => {
    try {
        const response = await axios.put(`${BASE_URL}/wishlist`, { productId: product._id, action: 'add' },{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return response.data.wishlist; // Return updated wishlist
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});


export const getWishlist = createAsyncThunk('wishlist/getWishlist', async (_, thunkAPI) => {
    try {
        const response = await axios.get(`${BASE_URL}/wishlist`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});
const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
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
  extraReducers: (builder) => {
    builder
      .addCase(addToWishlist.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.loading = false;
        state.wishlist = action.payload;
      })
      .addCase(addToWishlist.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getWishlist.pending, (state) => {
        state.loading = true;
      })
      .addCase(getWishlist.fulfilled, (state, action) => {
        state.loading = false;
        state.wishlist = action.payload;
      })
      .addCase(getWishlist.rejected, (state) => {
        state.loading = false;
      });
  }
});

export const {
  setWishlist,
  addToWishlist: reduxAddToWishlist,
  removeFromWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
