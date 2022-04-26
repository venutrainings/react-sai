import React,{useState} from 'react';


function Example1() {
    const [color,setColor]=useState('');
  return (
    <div>
        <h1>Hi, i have a {color}! dress</h1>
        <button onClick={()=>setColor('red')}>Click</button>
        <button onClick={()=>setColor('blue')}>Click</button>
        <button onClick={()=>setColor('yellow')}>Click</button>
        <button onClick={()=>setColor('white')}>Click</button>
        <button onClick={()=>setColor('green')}>Click</button>
    </div>
  )
}

export default Example1;