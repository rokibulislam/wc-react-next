import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import httpService from '../../services/httpServices'

export const fetchCart = createAsyncThunk('cart/fetchCart', async () => {

})

export const clearCart = createAsyncThunk('cart/clearCart', async () => {

})

export const productSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        status: 'loading',
        product: {},
        error: null
    },
    reducers: {

    },
    extraReducers: {
        [fetchCart.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchCart.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.status = 'succeeded';
        },
        [fetchCart.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },

        [clearCart.pending]: (state, action) => {
            state.status = 'loading';
        },
        [clearCart.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.items.data = [{...action.payload}, ...state.items];
        },
        [clearCart.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        }
    }
})

export default productSlice.reducer;