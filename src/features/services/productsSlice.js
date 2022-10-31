
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("product/fetchProducts", async () => {
    const res = await axios.get('/AcadamicBooks.json');
    return res.data;
});


// single product details for this code 
export const fetchSingleProduct = createAsyncThunk("product/fetchSingleProduct", async (id) => {
    const res = await axios.get('/AcadamicBooks.json');
    const singleProduct = res.data.find(product => product._id === id);
    return singleProduct;
});
// single product details for this code 




const productSlice = createSlice({
    name: "product",
    initialState: {
        isLoading: false,
        product: [],
        error: null,
        productDetails: {}, // single product details for this code 

    },

    reducers: {},



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

        // single product details for this code 

        builder.addCase(fetchSingleProduct.pending, (state) => {
            state.isLoading = true;
            state.productDetails = {};
        });

        builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.productDetails = action.payload;
            state.error = null;

        })

        builder.addCase(fetchSingleProduct.rejected, (state, action) => {
            state.isLoading = true;
            state.productDetails = {};
            state.error = action.error.message;

        });

        // single product details for this code 




    },

});


export default productSlice.reducer;


