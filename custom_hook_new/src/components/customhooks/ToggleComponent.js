import React from 'react';
import useToggle from './useToggle';

function ToggleComponent() {
    const [value,Togglevalue]=useToggle(false);
   
  return (
    <div>
        <h1>ToggleComponent used a useToggle custom hook</h1>
        <h1>{value.toString()}</h1>
        <button onClick={Togglevalue}>Toggle</button>
        <button onClick={()=>Togglevalue(true)}>Make True</button>
        <button onClick={()=>Togglevalue(false)}>Make False</button>
    </div>
  )
}

export default ToggleComponent;