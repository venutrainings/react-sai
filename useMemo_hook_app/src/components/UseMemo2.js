
import React,{useCallback, useMemo, useState} from 'react';

function UseMemo2() {
    const [count,setCount]=useState(0);
    const [value,setValue]=useState('');
    const [number,setNumber]=useState(5);
    const [todos,setTodos]=useState([]);

    //const Calculation=ExpensiveCalculation(count);
    
    const Factorial = fact(number);
    const Calculation=useMemo(
                                ()=>{
                                        return  ExpensiveCalculation(count);
                                },[count]
                            );
                                   
    // const addTodo=()=>{
    //     setTodos([...todos,"NewTodo"]);  // value='NewTodo' you are give string value with NewTodo every time it display NewTodo.
    // }
    const addTodo=useCallback(()=>{
        console.log('addTodo function calling.....');
        if(value !==''){
            setTodos([...todos,value]);
            setValue('');
        } else{
            alert('Please Enter any value OR number');
        }
    },[value])

  return (

    <div className='container'>
        <h1 className='header1'>using useMemo with two states count and todos </h1>
        <div>
            <h1 className='header2'>Display Todos using useCallback Hook  text value here:</h1>
            {
                todos.map((todo,index)=>{
                    return <p key={index}>{todo}</p>
                })
            }
             <input type="text" value={value} placeholder='Please Enter any number or text here' onChange={(e)=>setValue(e.target.value)} />
            <button onClick={addTodo}>addTodo</button>
        </div>
        <div>
            <h1 className='header2'>increamnet count values using useMemo hook for return values  here:</h1>
            <h2 className='header3'>Count: <span>{count}</span></h2>
            <button onClick={()=>setCount(count+1)}>Increment Count</button>
            <h1 className='header2'>ExpensiveCalculation</h1>
            <h2 className='header3'>Calculation value:<span>{Calculation}</span></h2><br></br>
            <h1 className='header2'>Factorial Calculatin using useMemo hook</h1>
            <h2 className='header3'>Factorial value:<span>{Factorial }</span></h2>
            <button onClick={()=>setNumber(number+1)}>Increment Factorial value</button>
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
const fact=(n)=>{
    let answer=1;
    for(var i=n; i>=1; i--){
         answer = answer * i;
    }
    console.log('factorial function calling ');
    return answer;
}
export default UseMemo2;