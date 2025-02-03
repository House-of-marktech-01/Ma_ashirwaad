import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/url";
import { toast } from "react-toastify";

const initialState = {
    loading: false,
    error: null,
    reviews: [],
    userReviews: [],
    productReviews: [],
};

// Add a new review
export const addReview = createAsyncThunk(
    "review/addReview",
    async (data, thunkAPI) => {
        try {
            const response = await axios.post(`${BASE_URL}/review`, data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            // Return the entire response.data
            return response.data;
        } catch (error) {
            // Properly handle different types of errors
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                return thunkAPI.rejectWithValue(error.response.data);
            } else if (error.request) {
                // The request was made but no response was received
                return thunkAPI.rejectWithValue({ message: "No response from server" });
            } else {
                // Something happened in setting up the request that triggered an Error
                return thunkAPI.rejectWithValue({ message: error.message });
            }
        }
    }
);

// Get all reviews
export const getAllReviews = createAsyncThunk("review/getAllReviews", async (_, thunkAPI) => {
    try {
        const res = await axios.get(`${BASE_URL}/review`);
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

// Get reviews by user
export const getReviewsByUser = createAsyncThunk("review/getReviewsByUser", async (userId, thunkAPI) => {
    try {
        const res = await axios.get(`${BASE_URL}/review/user/${userId}`);
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

// Get reviews by product
export const getReviewsByProduct = createAsyncThunk(
    "review/getReviewsByProduct",
    async (productId, thunkAPI) => {
        try {
            const response = await axios.get(`${BASE_URL}/review/product/${productId}`);
            // Return the entire response.data
            return response.data;
        } catch (error) {
            if (error.response) {
                return thunkAPI.rejectWithValue(error.response.data);
            } else if (error.request) {
                return thunkAPI.rejectWithValue({ message: "No response from server" });
            } else {
                return thunkAPI.rejectWithValue({ message: error.message });
            }
        }
    }
);


// Update review
export const updateReview = createAsyncThunk("review/updateReview", async ({ reviewId, data }, thunkAPI) => {
    try {
        const res = await axios.put(`${BASE_URL}/review/${reviewId}`, data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

// Delete review
export const deleteReview = createAsyncThunk("review/deleteReview", async (reviewId, thunkAPI) => {
    try {
        const res = await axios.delete(`${BASE_URL}/review/${reviewId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        return { ...res.data, reviewId };
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const reviewSlice = createSlice({
    name: "review",
    initialState,
    reducers: {
        clearReviews: (state) => {
            state.reviews = [];
            state.userReviews = [];
            state.productReviews = [];
        },
    },
    extraReducers: (builder) => {
        builder
            // Add Review
            .addCase(addReview.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addReview.fulfilled, (state, action) => {
                state.loading = false;
                // Handle both possible response formats
                const review = action.payload.review || action.payload;
                state.reviews.push(review);
                state.productReviews.push(review);
                toast.success(action.payload.message || "Review added successfully");
            })
            .addCase(addReview.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                toast.error(action.payload?.message || "Error adding review");
            })

            // Get Product Reviews
            .addCase(getReviewsByProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getReviewsByProduct.fulfilled, (state, action) => {
                state.loading = false;
                // Handle the reviews array directly
                state.productReviews = action.payload;
            })
            .addCase(getReviewsByProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                toast.error(action.payload?.message || "Error fetching reviews");
            })
            

            // Update Review
            .addCase(updateReview.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateReview.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.reviews.findIndex(review => review._id === action.payload.review._id);
                if (index !== -1) {
                    state.reviews[index] = action.payload.review;
                }
                toast.success(action.payload.message);
            })
            .addCase(updateReview.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                toast.error(action.payload?.message || "Error updating review");
            })

            // Delete Review
            .addCase(deleteReview.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteReview.fulfilled, (state, action) => {
                state.loading = false;
                state.reviews = state.reviews.filter(review => review._id !== action.payload.reviewId);
                toast.success(action.payload.message);
            })
            .addCase(deleteReview.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                toast.error(action.payload?.message || "Error deleting review");
            });
    },
});

export const { clearReviews } = reviewSlice.actions;
export default reviewSlice.reducer;
