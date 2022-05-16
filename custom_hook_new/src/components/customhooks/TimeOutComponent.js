import React,{useState} from 'react';
import useTimeout from './useTimeout';

function TimeOutComponent() {
    cosnt [count,setCount]=useState(10);
    const {clear,reset}=useTimeout(()=>setCount(0),1000);
  return (
    <div>
        <h2>count: {count}</h2>
        <button onClick={()=>setCount(count+1)}>Increment Count</button>

    </div>
  )
}

export default TimeOutComponent;