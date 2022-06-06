
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {buy_apple} from './reux/MobileCounter';
import {buy_nokia} from './reux/MobileNokia'
function App() {
  const {count} =useSelector((state)=>state.mobilestore);
  const {value}=useSelector((state)=>state.mobilesapple)
  const dispatch=useDispatch();

  return (
    <div className="App">
        <h2>Mobile Store</h2>
        <h2>BUY APPLE :{count}</h2>
        <h2>Buy Nokia: {value}</h2>
        <button onClick={()=>dispatch(buy_apple())}>BUY APPLE</button>
        <button onClick={()=>dispatch(buy_nokia())}>BUY Nokia</button>
     
    </div>
  );
}

export default App;
