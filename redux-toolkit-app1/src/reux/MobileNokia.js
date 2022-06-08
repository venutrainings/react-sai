import { createSlice } from "@reduxjs/toolkit";

const MobilestoreappleSlice=createSlice({
    name:'mobilesapple',
    initialState:{
      value:500,
      paynokia:0
      
    },
    reducers:{
      
        buy_nokia:state=>{
            state.value-=1;
        },
        IncrementByAmount:(state, action) =>{
            state.paynokia += action.payload;
          }
    }
})
export const {buy_nokia, IncrementByAmount}=MobilestoreappleSlice.actions;
     
const MobileReducer=MobilestoreappleSlice.reducer
export default MobileReducer;