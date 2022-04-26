import React, { createRef,useRef,useState } from 'react';
import './add2num.css';

function Add2Num() {
    const [sum,setSum]=useState(0);
    const [color,setColor]=useState('');
    const ref1=createRef();
    const ref2=useRef();
    const fnAdd=()=>{
        let color="";
        let result=Number(ref1.current.value)+Number(ref2.current.value);
        if(sum > 100){
            color="red";
        } else{
            color="blue";
        }
        setColor(color);
        setSum(result);
    }
  return (
    <div className='container'>
        <h2 className='header'>Add Two Numbers here</h2>
        <input type="text" ref={ref1} placeholder="please enters numbers"/><input type="text" placeholder="please enters numbers" ref={ref2}/><button onClick={fnAdd}>ADD</button>
        <div><span style={{color:color}}>{sum}</span></div>
        <b className={sum >100 ? 'color-red' : 'color-blue'}>{sum}</b>
    </div>
  )
}

export default Add2Num;


