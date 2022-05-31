import React, {createContext,useContext,useReducer} from "react";

export const StateContext=createContext();

export const useStateValues=()=>useContext(StateContext);

export  const StateProvider=({reducer,initialState,children})=>{
  return  <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
}

// export  const StateProvider=({reducer,initialState,children})=>(
//      <StateContext.Provider value={useReducer(reducer,initialState)}>
//           {children}
//       </StateContext.Provider>
//   )




// import React, {createContext, useContext, useReducer} from 'react';
// export const StateContext = createContext();
// export const StateProvider = ({reducer, initialState, children}) =>(
//   <StateContext.Provider value={useReducer(reducer, initialState)}>
//     {children}
//   </StateContext.Provider>
// );
// export const useStateValue = () => useContext(StateContext);