import React,{useState,useEffect, useRef} from 'react'

function Example5() {
    const [inputVal,setInputVal]=useState('');
    const [countvalue,setCountvalue]=useState('');

    const count=useRef(0);
    const inputElement=useRef();
    const PreviousValue=useRef('');

    useEffect(()=>{
        count.current=count.current+1
    })
    useEffect(()=>{
        PreviousValue.current=inputVal;
    })

    const FocusInput=()=>{
        inputElement.current.focus();
    }

    
  return (  
    <div>
        <h1>Using useRef Hook we can handle foucus, and print PreviousValues,persist the re-renders </h1>
        <p>print the entered values here:</p>
        <input type="text" ref={inputElement} value={inputVal} placeholder='Please enter the values here' onChange={e=>setInputVal(e.target.value)} /><br></br><br></br>
        <h1>count the no of values you entered here:s</h1>
        <input type="text" ref={inputElement}  value={countvalue} onChange={e=>setCountvalue(e.target.value)}  placeholder='type value here' /> <br></br><br></br>
        <button onClick={FocusInput}>InputFoucus</button>
        <p>Print First Input values here:{inputVal}</p>
        <p>Print Second Input values:{countvalue}</p>
        <p>Print the Count rendered input values:{count.current}</p>

        <p>Print the Previous entered values here:{PreviousValue.current}</p>
         

    </div>
  )
}

export default Example5