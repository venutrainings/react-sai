import { configureStore } from "@reduxjs/toolkit";
import MobileCounterReducer from "./MobileCounter";
import MobileReducer from "./MobileNokia";
export const store=configureStore({

   reducer:{
       mobilestore: MobileCounterReducer,
        mobilesapple:MobileReducer
   }
})