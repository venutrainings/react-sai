import { createStore,applyMiddleware } from "redux";
import axios from "axios";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

//const middleware=[thunk];
//action type:
const ActionTypes={
    FETCH_REQUEST:"fetch_request",
    FETCH_REQUEST_SUCCESS:"fetch_request_success",
    FETCH_REQUEST_FAILURE:"fetch_request_failure"
}
//actionsfor fetch users details
const fetchRequest=()=>{
    return {
        type:ActionTypes.FETCH_REQUEST
    }
}
const fetchRequestSuccess=(users)=>{
    return {
        type:ActionTypes.FETCH_REQUEST_SUCCESS,
        payload:users

    }
}
const fetchRequestFailure=(error)=>{
    return {
        type:ActionTypes.FETCH_REQUEST_FAILURE,
        payload:error

    }
}

// initialize state
const initialState={
    users:[],
    loading:false,
    error:""
}

  export const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case ActionTypes.FETCH_REQUEST:
            return {...state,loading:true}
        case ActionTypes.FETCH_REQUEST_SUCCESS:
            return {loading:false,users:action.payload,error:""}
        case ActionTypes.FETCH_REQUEST_FAILURE:
            return {loading:false,error:action.payload,users:[]}
        default:
            return state;
    }
}
export const fetchUsers=()=>{
    return (dispatch)=>{
        dispatch(fetchRequest)
        axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
                const users=response.data;
                dispatch(fetchRequestSuccess(users))
                console.log(response)
        })  
        .catch((error)=>{
            const errormsg=error.errorMassage;
            dispatch(fetchRequestFailure(errormsg))
        })  

    }
}

// export const store=createStore(userReducer,composeWithDevTools(applyMiddleware(middleware)));
// store.subscribe(()=>{
//     console.log("display the state from the reducers ",store.getState())
// })
// store.dispatch(FetchUsersData);