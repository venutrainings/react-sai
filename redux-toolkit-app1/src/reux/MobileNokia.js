import { createSlice } from "@reduxjs/toolkit";

const MobilestoreappleSlice=createSlice({
    name:'mobilesapple',
    initialState:{
      value:500
    
      
    },
    reducers:{
      
        buy_nokia:state=>{
            state.value-=1;
        },

    }
})
export const {buy_nokia}=MobilestoreappleSlice.actions;
     
const MobileReducer=MobilestoreappleSlice.reducer
export default MobileReducer;