import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/url";
import { toast } from "react-toastify";

const initialState = {
    loading: false,
    error: null,
    orders: [],
    currentOrder: null,
};

export const placeOrder = createAsyncThunk("order/placeOrder", async (orderData, thunkAPI) => {
    try {
        const res = await axios.post(`${BASE_URL}/order/place-order`, orderData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const verifyPayment = createAsyncThunk("order/verifyPayment", async (paymentData, thunkAPI) => {
    try {
        const res = await axios.post(`${BASE_URL}/order/verify-payment`, paymentData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const getOrders = createAsyncThunk("order/getOrders", async (_, thunkAPI) => {
    try {
        const res = await axios.get(`${BASE_URL}/order/get-orders`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const getOrder = createAsyncThunk("order/getOrder", async (orderId, thunkAPI) => {
    try {
        const res = await axios.get(`${BASE_URL}/order/get-order/${orderId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        clearCurrentOrder: (state) => {
            state.currentOrder = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(placeOrder.pending, (state) => {
                state.loading = true;
            })
            .addCase(placeOrder.fulfilled, (state, action) => {
                state.loading = false;
                state.currentOrder = action.payload.order;
                toast.success(action.payload.message);
            })
            .addCase(placeOrder.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                toast.error(action.payload.message);
            })

            .addCase(verifyPayment.pending, (state) => {
                state.loading = true;
            })
            .addCase(verifyPayment.fulfilled, (state, action) => {
                state.loading = false;
                state.currentOrder = action.payload.order;
                toast.success(action.payload.message);
            })
            .addCase(verifyPayment.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                toast.error(action.payload.message);
            })

            .addCase(getOrders.pending, (state) => {
                state.loading = true;
            })
            .addCase(getOrders.fulfilled, (state, action) => {
                state.loading = false;
                state.orders = action.payload;
            })
            .addCase(getOrders.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                toast.error(action.payload.message);
            })

            .addCase(getOrder.pending, (state) => {
                state.loading = true;
            })
            .addCase(getOrder.fulfilled, (state, action) => {
                state.loading = false;
                state.currentOrder = action.payload;
            })
            .addCase(getOrder.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                toast.error(action.payload.message);
            });
    },
});

export const { clearCurrentOrder } = orderSlice.actions;
export default orderSlice.reducer;
