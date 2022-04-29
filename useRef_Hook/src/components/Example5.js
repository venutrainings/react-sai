import React,{useState,useEffect, useRef} from 'react'

function Example5() {
    const [inputVal,setInputVal]=useState('');
    const [countvalue,setCountvalue]=useState('');

    const count=useRef(null);
    const inputElement=useRef();
    const PreviousValue=useRef('');

    useEffect(()=>{
        count.current=count.current+1
    })
    useEffect(()=>{
        PreviousValue.current=inputVal;
    },[inputVal]);

    const FocusInput=()=>{
        inputElement.current.focus();
    }

    
  return (  
    <div className='container'>
        <h1 className='header1'>Using useRef Hook we can handle foucus, and print PreviousValues,persist the re-renders </h1>
        <h2 className='header2'>print the entered values here:</h2>
        <input type="text" ref={inputElement} value={inputVal} placeholder='Please enter the values here' onChange={e=>setInputVal(e.target.value)} /><br></br><br></br>
        <h2 className='header2'>count the no of values and print the values you entered here:</h2>
        <input type="text" ref={inputElement}  value={countvalue} onChange={e=>setCountvalue(e.target.value)}  placeholder='type value here' /> <br></br><br></br>
        <button onClick={FocusInput}>InputFoucus</button>
        <p className='print-values' >Print First Input values here:<span>{inputVal}</span></p>
        <p className='print-values'>Print Second Input values:<span>{countvalue}</span></p>
        <p className='print-values'>Print the Count rendered input values:<span>{count.current}</span></p>
        <p className='print-values'>Print the Previous entered values here:<span>{PreviousValue.current}</span></p>
    </div>
  )
}

export default Example5