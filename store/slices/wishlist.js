import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import httpService from '../../services/httpServices'

export const fetchItems = createAsyncThunk('wishlists/fetchItems', async () => {

})

export const addItem = createAsyncThunk('wishlists/addItem', async ( { title, content, author } ) => {

})

export const removeItem = createAsyncThunk('wishlists/removeItem', async ( { title, content, author } ) => {

})

export const productSlice = createSlice({
    name: "wishlists",
    initialState: {
        items: [],
        status: 'loading',
        product: {},
        error: null
    },
    reducers: {

    },
    extraReducers: {
        [fetchItems.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchItems.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.status = 'succeeded';
        },
        [fetchItems.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },

        [addItem.pending]: (state, action) => {
            state.status = 'loading';
        },
        [addItem.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.items.data = [{...action.payload}, ...state.items];
        },
        [addItem.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },

        [removeItem.pending]: (state, action) => {
            state.status = 'loading';
        },
        [removeItem.fulfilled]: (state, action) => {
            state.post = action.payload;
            state.status = 'succeeded';
        },
        [removeItem.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },
    }
})

export default productSlice.reducer;