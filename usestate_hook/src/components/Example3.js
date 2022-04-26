import React,{useState} from 'react';
import './exampl3.css';


function Example3() {
    const [bike,setBike]=useState({
        "brandname":"",
        "milage":"",
        "model":"",
        "year":""
    })
    const fnClick=()=>{
        setBike(prevState=>({
            "brandname":"HONDA SHINE",
            "milage":"62KM/hr",
            "model":"BlACK",
            "year":2018 
        })
        )
    }
    const fnChange=()=>{
        setBike({
            "brandname":"GLAMOUR",
            "milage":"62-70 KM/hr",
            "model":"BLUE",
            "year":2017 
        })
    }
  return (
    <div className='container'>
        <h1 className='header'>Hi, this is sai  i have bought a new <span>{bike.brandname}</span>!</h1>
        <h2>its given good milage: <span>{bike.milage}</span>  and </h2>
        <h3>it's  <span>{bike.model}</span> model bike and  bought in <span>{bike.year}</span>.</h3>
        <button onClick={fnClick} >Add Specication to my bike</button>
        <button onClick={fnChange}>Update to new bike version</button>

    </div>
  )
}

export default Example3;