import React, {useReducer} from 'react';

const InitialState={
    count:0
}
const ACTIONS={
    INCREAMENT:'increament',
    RESET:'reset',
    DECREAMENT:'decreament'

}
const reducer=(state,action)=>{
    switch(action.type){
        case ACTIONS.INCREAMENT:
          return {count:state.count+1};
        case ACTIONS.RESET:
          return InitialState;
        case ACTIONS.DECREAMENT:
          return {count:state.count-1};
        default:
        throw new Error()
          //return state;
      }
}

function Example1() {
    const [state,dispatch]=useReducer(reducer,InitialState);
    return (
      <div className="App">
        <h1>Count the numbers like Increase and decreament and Reset to Zero at initial state.</h1>
          <h2>count:{state.count}</h2>
          <button onClick={()=>
          dispatch({type:ACTIONS.INCREAMENT})}
          >+</button>
         <button onClick={()=>dispatch({type:ACTIONS.RESET})}>Reset</button>
          <button onClick={()=>
          dispatch({type:ACTIONS.DECREAMENT})}
          >-</button>
      </div>
    );
}

export default Example1