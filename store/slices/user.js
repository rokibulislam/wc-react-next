import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import httpService from '../../services/httpServices'

export const register = createAsyncThunk('users/register', async ({ username, email, password  }) => {

})

export const login = createAsyncThunk('users/login', async ({  email, password  }) => {

})

export const userSlice = createSlice({
    name: "users",
    initialState: {
        loading: false,
        user: null,
        error: null
    },
    reducers: {
        logout: (state, action) => {
            state.user = null;
        },

        setUSER:( state, action) => {
            state.user = action.payload;
        }
    },
    extraReducers: {
        [register.pending]: (state, action) => {
            state.loading = true;
        },
       
        [register.fulfilled]: (state, action) => {
            state.loading = false;
            state.user = action.payload.data.user;
            // httpService.setTokenToLocalStorage(action.payload.data.token)
            // httpService.setAuthToken(action.payload.data.token)
        },
       
        [register.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },

        [login.pending]: (state, action) => {
            state.loading = true;
        },
        [login.fulfilled]: (state, action) => {
            state.loading = false;
            state.user = action.payload.data.user;
            // httpService.setTokenToLocalStorage(action.payload.data.token);
            // httpService.setAuthToken(action.payload.data.token)
        },
        [login.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
    }
})

export const { logout, setUSER } = userSlice.actions

export default userSlice.reducer;