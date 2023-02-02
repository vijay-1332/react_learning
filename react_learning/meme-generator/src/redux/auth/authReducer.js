import { createSlice } from '@reduxjs/toolkit'
export const authSlice=createSlice({
    name:'auth',
    initialState: {
       isAuthorize:false
    },
    reducers:{
        AUTH_LOGIN:(state)=>{
                state.isAuthorize=true
        },
        AUTH_LOGOUT:(state)=>{
            state.isAuthorize=false
    }

    }
})
export const {AUTH_LOGIN,AUTH_LOGOUT}=authSlice.actions
export const authStatus = (state)=>state.auth.isAuthorize
export default authSlice.reducer