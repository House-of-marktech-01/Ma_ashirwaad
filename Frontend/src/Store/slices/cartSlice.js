import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/url";
import { toast } from "react-toastify";

const initialState = {
    loading: false,
    error: null,
    cart: null,
};

export const getCart = createAsyncThunk("cart/getCart", async (_, thunkAPI) => {
    try {
        const res = await axios.get(`${BASE_URL}/cart`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const updateCart = createAsyncThunk("cart/updateCart", 
    async ({ productId, quantity, action }, thunkAPI) => {
        try {
            const res = await axios.put(
                `${BASE_URL}/cart`,
                { productId, quantity, action },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cart = null;
        },
    },
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
                state.error = action.payload;
                toast.error(action.payload?.message || "Error fetching cart");
            })

            .addCase(updateCart.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateCart.fulfilled, (state, action) => {
                state.loading = false;
                state.cart = action.payload.cart;
                toast.success(action.payload.message);
            })
            .addCase(updateCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                toast.error(action.payload?.message || "Error updating cart");
            });
    },
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;
