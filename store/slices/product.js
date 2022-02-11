import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import httpService from '../../services/httpServices'

export const fetchProducts = createAsyncThunk('products/fetchproducts', async () => {

})

export const addProduct = createAsyncThunk('products/addProduct', async ( { title, content, author } ) => {

})

export const fetchSingleProduct = createAsyncThunk('products/fetchSingleProduct', async (id) => {

})

export const productSlice = createSlice({
    name: "products",
    initialState: {
        items: [],
        status: 'loading',
        product: {},
        error: null
    },
    reducers: {

    },
    extraReducers: {
        [fetchProducts.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.status = 'succeeded';
        },
        [fetchProducts.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },

        [addProduct.pending]: (state, action) => {
            state.status = 'loading';
        },
        [addProduct.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.items.data = [{...action.payload}, ...state.items];
        },
        [addProduct.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },

        [fetchSingleProduct.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchSingleProduct.fulfilled]: (state, action) => {
            state.post = action.payload;
            state.status = 'succeeded';
        },
        [fetchSingleProduct.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },
    }
})

export default productSlice.reducer;