
import { useDispatch, useSelector } from 'react-redux';
import React,{useState} from 'react';
import './App.css';
import {buy_apple, incrementByAmount} from './reux/MobileCounter';
import {buy_nokia,IncrementByAmount} from './reux/MobileNokia'
function App() {
  const {count,amount} =useSelector((state)=>state.mobilestore);
  const {value,paynokia}=useSelector((state)=>state.mobilesapple)
  const dispatch=useDispatch();
  const [pay,setPay]=useState(0);
  const [payapple,setPayapple]=useState(0);
  return (
    <div className="App">
        <h3>Mobile Store</h3>

        <h3>Purchage Apple phones here:</h3>
        <h4>Total available <b>APPLE</b> Mobiles are:{count}</h4>
        <h4>BUY_ APPLE with amount of Rs: 40,000/-  for {payapple} item : {amount}/- </h4>
        <button onClick={()=>dispatch(buy_apple())}>SELECT APPLE</button>
        <button onClick={()=>{
          dispatch(incrementByAmount(40000));
          setPayapple(payapple+1);
        }}>BUY APPLE</button>

        <hr></hr> <br></br>

        <h3>Purchage Nokia phones here:</h3>
        <h4>Total available <b>NOKIA</b> Mobiles are: {value}</h4>
        <h4>BUY_ NOKIA with amount of Rs: 20,000/-  for {pay} item : {paynokia}/- </h4>
        <button onClick={()=>dispatch(buy_nokia())}>SELECT NOKIA</button>
        <button onClick={()=>{
          dispatch(IncrementByAmount(20000));
          setPay(pay+1);
        }
        }>BUY NOKIA</button>
  
    </div>
  );
}

export default App;
