import React,{useState,useMemo} from 'react'

function WithUseMemo() {
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
   // Without useMemo its rendered at early first time browser rednered and when any other get updated it will rendered again and again  
//const Factorial=fact(number);
//with useMemo its rendered early fisrt time during when the browser loaded at a time and when it can be update that time only it rendered .

const Factorial=useMemo(
    ()=>{
        fact(number)
    },[number]
)


return (
    <div>
        <h1>without using useMemo hook</h1>
        <h2>Factorial Value : {Factorial}</h2>
        <button onClick={()=>setNumber(number+1)}>Factorial Increment Number</button>
        <hr></hr>
        <h2>Count : {count}</h2>
        <button onClick={()=>setCount(count+1)}>Increment Count</button>
    </div>
  )
}

export default WithUseMemo;