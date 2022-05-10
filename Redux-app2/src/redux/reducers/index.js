import { combineReducers } from "redux";
import { productReducer, selectedReducer } from "./productReducer";

const reducers=combineReducers({
    allproducts:productReducer,
    product:selectedReducer
})
export default reducers;