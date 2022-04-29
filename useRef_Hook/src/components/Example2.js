import React,{useState,useEffect,useRef} from 'react'

const Example2 = () => {
    const [increament,setIncreament]=useState('');
    const count=useRef(0);
   useEffect(()=>{
      count.current= count.current+1;
   })
  return (

    <div>
        <h1>Example track the re-renders here</h1>
        <form >
            <label>
            <input type="text" value={increament} onChange={e=>setIncreament(e.target.value)} />
           
         </label>
            <button type ="number" onClick={()=>setIncreament(increament+1)}>Submit</button>
        </form>
        <h1>Display the count value here:{count.current}</h1>
    </div>
  )
}

export default Example2;