import React, { useState } from 'react';
import Box from '../box/Box';


function Box2() {
  const [name,setName]=useState('SAIKUMAR')
  const [name1,setName1]=useState('vinay kumar')
  return (
    <div>
        <h1>Share data from parent to child</h1>
        <button onClick={()=>setName('vijay kumar')} >click</button>
        <Box name={name} /> 
        <button onClick={()=>setName1('Durgamma and Raghava')} >click</button>
        <Box name={name1} />
    </div>
  )
}

export default Box2
