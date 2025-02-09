import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/url";
import { toast } from "react-toastify";
import { createSelector } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    products: [],
    currentProduct: null,
    categoryProduct:[]
};

// Get single product
export const getProduct = createAsyncThunk("product/getProduct", async (id, thunkAPI) => {
    try {
        const res = await axios.get(`${BASE_URL}/product/${id}`);
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

// Get all products
export const getAllProducts = createAsyncThunk("product/getAllProducts", async (_, thunkAPI) => {
    try {
        const res = await axios.get(`${BASE_URL}/product`);
        console.log(res.data);
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

// Add this new thunk
export const getProductByCategory = createAsyncThunk("product/getProductByCategory", async (id, thunkAPI) => {
    try {
        const res = await axios.get(`${BASE_URL}/product/category/${id}`);
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        clearProducts: (state) => {
            state.products = [];
            state.currentProduct = null;
            state.categoryProduct = [];
        },
        clearCurrentProduct: (state) => {
            state.currentProduct = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // Get Single Product
            .addCase(getProduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(getProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.currentProduct = action.payload;
            })
            .addCase(getProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                toast.error(action.payload?.message || "Error fetching product");
            })

            // Get All Products
            .addCase(getAllProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                toast.error(action.payload?.message || "Error fetching products");
            })

            // Add these new cases
            .addCase(getProductByCategory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getProductByCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.categoryProduct = action.payload;
                state.error = null;
            })
            .addCase(getProductByCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.categoryProduct = [];
            });
    },
});

export const { clearProducts, clearCurrentProduct } = productSlice.actions;
export default productSlice.reducer;
