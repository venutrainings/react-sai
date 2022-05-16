import {useState} from 'react';

function useToggle(defaultValue) {
    const [value,setValue]=useState(defaultValue);

    function Togglevalue(value){
        setValue((currentvalue)=>
        typeof value === 'boolean' ? value : !currentvalue
            )
    }

  return [value,Togglevalue];
}

export default useToggle