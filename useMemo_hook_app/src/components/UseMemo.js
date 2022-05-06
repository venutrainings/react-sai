
import React,{useMemo, useState} from 'react'

function UseMemo() {
    const [count,setCount]=useState(0);
    const [todos,setTodos]=useState([]);
    // without useMemo re-rendered again and again
    //const Calculation=ExpensiveCalculation(count);

    // using useMemo rendered and when get updated its re - rendered
    // const Calculation=useMemo(()=>ExpensiveCalculation(count),[count])
    const Calculation=useMemo(
        ()=>{
          return  ExpensiveCalculation(count);
        },[count]
    );
    

    const addTodo=()=>{
        setTodos([...todos,"NewTodo"]);
    }

  return (

    <div>
        <h1>using useMemo with two states count and todos </h1>
        <div>
            <h1>Display Todos value here:</h1>
            {
                todos.map((todo,index)=>{
                    return <p key={index}>{todo}</p>
                })
            }
            <button onClick={addTodo}>addTodo</button>
        </div>
        <div>
            <h2>increamnet count values here</h2>
            <h2>Count: {count}</h2>
            <button onClick={()=>setCount(count+1)}>Increment Count</button>
            <h2>ExpensiveCalculation</h2>
            <h2>Calculation value:{Calculation}</h2>
        </div>
    </div>
  )
}

const ExpensiveCalculation=(number)=>{
    for(var i=0;i<100;i++){
        number += 1;
    }
    console.log('ExpensiveCalculation function calling..');
    return number;
}
export default UseMemo;