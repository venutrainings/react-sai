import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getproduct = createAsyncThunk(
    'products/getproduct', async ()=>{
    const res =await axios.get('https://fakestoreapi.com/products')
    const result = await res.data;
    return result;
})

 const prouductsSlice = createSlice({
    name:'products',
    initialState:{
        product:[],
        loading:false,
        error:''
    },
    extraReducers:(builder)=>{
        builder
            .addCase(getproduct.pending,(state)=>{
                state.loading = true;
            })
            .addCase(getproduct.fulfilled,(state,{payload})=>{
                state.loading = false;
                state.product = payload;
                state.error = '';
            })
            .addCase(getproduct.rejected,(state,{payload} )=>{
                state.loading = false;
                state.error = payload;
            })
    }
})

export default prouductsSlice.reducer;
