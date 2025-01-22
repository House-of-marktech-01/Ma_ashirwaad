import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/url";
import { toast } from "react-toastify";

const initialState = {
    loading: false,
    error: null,
    wishlist: [],
};

export const getWishlist = createAsyncThunk("wishlist/getWishlist", async (_, thunkAPI) => {
    try {
        const res = await axios.get(`${BASE_URL}/wishlist`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const updateWishlist = createAsyncThunk("wishlist/updateWishlist", async (data, thunkAPI) => {
    try {
        const res = await axios.put(`${BASE_URL}/wishlist`, data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        clearWishlist: (state) => {
            state.wishlist = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getWishlist.pending, (state) => {
                state.loading = true;
            })
            .addCase(getWishlist.fulfilled, (state, action) => {
                state.loading = false;
                state.wishlist = action.payload.products;
            })
            .addCase(getWishlist.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                toast.error(action.payload?.message || "Error fetching wishlist");
            })

            .addCase(updateWishlist.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateWishlist.fulfilled, (state, action) => {
                state.loading = false;
                state.wishlist = action.payload.wishlist.products;
                toast.success(action.payload.message);
            })
            .addCase(updateWishlist.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                toast.error(action.payload?.message || "Error updating wishlist");
            });
    },
});

export const { clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
