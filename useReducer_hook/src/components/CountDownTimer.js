import React, {useState,useRef,useEffect} from 'react';

function CountDownTimer() {
    const [val,setVal]=useState(100);
    const [pause,setPause]=useState(false);
    const intervalRef=useRef();

    const Decrese=()=>{
        setVal((prevState)=>prevState-1);
    }
    useEffect(()=>{
        intervalRef.current=setInterval(Decrese,1000);
        return ()=>clearInterval(intervalRef.current);
    },[])
    const handleClick=()=>{
        if(!pause){
            clearInterval(intervalRef.current);
        } else{
        intervalRef.current=setInterval(Decrese,1000);
        }
        setPause((prevStat)=>!prevStat);
    }
    
  return (
    <div id='container'> 
        <h1 className='count-header1'>countdown timer in seconds using with the help of useRef,useState,UseEffect</h1>
        <h1 className='count-header2'>count:<span><b>{val}</b></span></h1>
        <button className='btn' onClick={handleClick}>{!pause ? 'Run' : 'Pause'}</button>
      
    </div>
  )
}

export default CountDownTimer;