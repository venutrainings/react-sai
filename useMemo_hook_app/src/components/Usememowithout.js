import React,{useState} from 'react'

function Usememowithout() {
    const [count,setCount]=useState(0);
    const [number,setNumber]=useState(5);
 
    const fact=(n)=>{
        let answer=1;
        for(var i=n; i>=1; i--){
             answer = answer * i;
        }
        console.log('factorial function calling ');
        return answer;
    }
const Factorial=fact(number);

  return (
    <div>
        <h1>without using useMemo hook</h1>
        <h2>Factorial Value : {Factorial}</h2>
        <hr></hr>
        <h2>Count : {count}</h2>
        <button onClick={()=>setCount(count+1)}>Increment Count</button>
    </div>
  )
}

export default Usememowithout;