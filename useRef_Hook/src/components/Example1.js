import React, {useState,useEffect,useRef} from 'react'

function Example1() {
    const [inital,setInitial]=useState('');
    // hold the value here using useRef
      const count=useRef(0);
      useEffect(()=>{
          count.current=count.current+1;
      })
  return (
    <div> 
        <h1>Track the Application re-renders using useRef </h1>
        <input type="text" value={inital}  onChange={e=>setInitial(e.target.value)} />
        <h1>count:{count.current}</h1>
    </div>
  )
}

export default Example1;