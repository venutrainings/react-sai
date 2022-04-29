
import React, {useRef} from 'react'

function Example3() {
    const inputElement=useRef(0);
 const FocusInput=()=>{
    inputElement.current.focus();
 }
  return (
    <div>
        <input type="text" ref={inputElement} />
        <input type="password" ref={inputElement} />
        <button onClick={FocusInput}>Focus Input</button>
    </div>
  )
}

export default Example3















