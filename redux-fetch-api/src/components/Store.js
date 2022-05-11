import { createStore,applyMiddleware } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userReducer } from "./FetchData";


export const store=createStore(userReducer,composeWithDevTools(applyMiddleware(thunk)));
