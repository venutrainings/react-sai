import React,{useState,useRef,useEffect} from 'react';

function Example4() {
    const [inputValue,setInputValue]=useState('');
    const PreviousValue=useRef('');
    useEffect(()=>{
        PreviousValue.current=inputValue;
    },[inputValue])
  return (
    <div>
        <h1>UseRef Hook used to print the Previous values</h1>
        <input type="text" value={inputValue} placeholder="Enter the values here" onChange={e=>setInputValue(e.target.value)} />
        <p>Current Value:{inputValue}</p>
        <p>Print Previous Value:{PreviousValue.current}</p>
    </div>
  )
}

export default Example4;