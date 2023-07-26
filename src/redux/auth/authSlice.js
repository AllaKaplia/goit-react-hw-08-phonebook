import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, register } from "./authOperations";

const initialState = {
    user: {name: null, email: null},
    token: null,
    isLoggedIn: false,
    isRefreshing: false
}

const handleFulfilled = (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder
        .addCase(register.pending, (state) => state)
        .addCase(register.fulfilled, handleFulfilled)
        .addCase(register.rejected, (state) => state)
        .addCase(logIn.fulfilled, handleFulfilled)
        .addCase(logOut.fulfilled, (state) => {
            state.user = {name: null, email: null};
            state.token = null;
            state.isLoggedIn = false;
        })
        .addCase(refreshUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isRefreshing = false;
        })
        .addCase(refreshUser.pending, (state) => {
            state.isRefreshing = true;
        })
        .addCase(refreshUser.rejected, (state) => {
            state.isRefreshing = false;
        })
    }
})

export const authReducer = authSlice.reducer;