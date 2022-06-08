import { createSlice } from "@reduxjs/toolkit";

const MobilestoreSlice=createSlice({
    name:'mobilestore',
    initialState:{
      count:500,
      amount:0
    },
    reducers:{
        buy_apple:state=>{
            state.count-=1;
        },
        incrementByAmount:(state, action) =>{
            state.amount += action.payload
          }
    },
  
})
export const {buy_apple,incrementByAmount}=MobilestoreSlice.actions;
     
const MobileCounterReducer=MobilestoreSlice.reducer
export default MobileCounterReducer;