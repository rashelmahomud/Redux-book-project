
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("product/fetchProducts", async () => {
    const res = await axios.get('/AcadamicBooks.json');
    return res.data;
});

const productSlice = createSlice({
    name: "product",
    initialState: {
        isLoading: false,
        product: [],
        error: null,
    },
    

    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.product = action.payload;
            state.error = null;

        })

        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.isLoading = true;
            state.product = [];
            state.error = action.error.message;

        });

    },

});


export default productSlice.reducer;


