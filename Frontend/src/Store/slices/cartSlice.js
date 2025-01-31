import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  cart: {
    products: []
  },
  loading: false,
  error: null
};

export const getCart = createAsyncThunk(
  'cart/getCart',
  async () => {
    // In a real app, this would be an API call
    const cartData = localStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : { products: [] };
  }
);

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async (productData) => {
    // In a real app, this would be an API call
    const cartData = localStorage.getItem('cart');
    const cart = cartData ? JSON.parse(cartData) : { products: [] };
    
    const existingProductIndex = cart.products.findIndex(
      item => item.product._id === productData.product._id && item.size === productData.size
    );

    if (existingProductIndex >= 0) {
      cart.products[existingProductIndex].quantity += productData.quantity;
    } else {
      cart.products.push(productData);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    return cart;
  }
);

export const updateCart = createAsyncThunk(
  'cart/updateCart',
  async ({ productId, quantity, action }) => {
    // In a real app, this would be an API call
    const cartData = localStorage.getItem('cart');
    const cart = cartData ? JSON.parse(cartData) : { products: [] };

    if (action === 'remove') {
      cart.products = cart.products.filter(item => item.product._id !== productId);
    } else {
      const productIndex = cart.products.findIndex(item => item.product._id === productId);
      if (productIndex >= 0) {
        if (action === 'add') {
          cart.products[productIndex].quantity += quantity;
        } else if (action === 'decrease') {
          cart.products[productIndex].quantity = Math.max(1, cart.products[productIndex].quantity - quantity);
        }
      }
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    return cart;
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
      })
      .addCase(getCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
      })
      .addCase(updateCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default cartSlice.reducer;