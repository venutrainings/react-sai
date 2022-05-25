import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import RootReducer from "./RootReducer";

export const store=createStore(RootReducer,composeWithDevTools(applyMiddleware(thunk,logger)))