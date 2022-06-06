import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./Reducers";
export const store=configureStore({
    reducer:{
        books:booksReducer
    }
})