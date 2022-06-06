import { createSlice } from "@reduxjs/toolkit";

const MobilestoreSlice=createSlice({
    name:'mobilestore',
    initialState:{
      count:500
    
      
    },
    reducers:{
        buy_apple:state=>{
            state.count-=1;
        },
       
    }
})
export const {buy_apple}=MobilestoreSlice.actions;
     
const MobileCounterReducer=MobilestoreSlice.reducer
export default MobileCounterReducer;