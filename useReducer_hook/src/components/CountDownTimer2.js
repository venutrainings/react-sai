
import React,{useState,useRef,useEffect} from 'react'

function CountDownTimer2() {
    const [count,setCount]=useState(0);
    const [isrunning,setIsrunning]=useState(false);
    const inputElementRef=useRef(0);
    
    const tick=()=>{
        setCount((prevState)=>prevState+1);
   
    }

useEffect(()=>{
    if(!isrunning){
       return;
    } 
    inputElementRef.current=setInterval(tick,1000);
    return ()=>{clearInterval(inputElementRef.current);
            inputElementRef.current=0
    }
},[isrunning]);


  return (
    <div id='container'>
        <h1 className='count-header1'>set countDown Timer like stop watch using stop and start and reset buttonswith the help of useRef,useState,UseEffect</h1>
        <h2 className='count-header2'>count : <span>{count}</span></h2>
        <button className='btn-start' onClick={()=>{
            setCount((prevState)=>prevState);
           setIsrunning(true);
        }}>start</button>
        <button className='btn-stop' onClick={()=>{
              setCount((prevState)=>prevState);
              setIsrunning(false);
        }}>stop</button>
        <button className='btn-reset' onClick={()=>{
             setCount(0);
             setIsrunning(false);
        }}>reset</button> 
    </div>
  )
}

export default CountDownTimer2;