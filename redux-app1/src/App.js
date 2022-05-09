import { connect } from 'react-redux';
import { IncAction,DecAction,ResetAction,IncfiveAction,DecfiveAction  } from './Actions';

import './App.css';

function App({local_variable,IncAction,DecAction,ResetAction,IncfiveAction,DecfiveAction }) {
  return (
    <div className="App">
        <h1>Using Redux to display the count values </h1>
        <h2>count the value: {local_variable}</h2>
        <h3>Based on Action type is "INCREMENT, ....",   payload: "no payload value here "</h3>
        <button onClick={IncAction}>increment</button><br></br><br></br>
        <button onClick={DecAction}>decremnt</button><br></br><br></br>
        <button onClick={ResetAction}>reset</button><br></br><br></br>
        <h3>Based on Action type is "INCREMENTFIVE,DECREMENTFIVE",  payload:"value"</h3>
        <button onClick={()=>IncfiveAction(5)}>increment five</button><br></br><br></br>
        <button onClick={()=>DecfiveAction(5)}>Decrement five</button><br></br><br></br>

    </div>
  );
}
const mapStateToProps=state=>({
local_variable:state
})
export default connect(mapStateToProps,{IncAction,DecAction,ResetAction,IncfiveAction,DecfiveAction})(App);
