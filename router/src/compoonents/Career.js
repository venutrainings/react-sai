import React from 'react';
import {useNavigate} from 'react-router-dom';


export default function Career() {
    let navigate=useNavigate();

  return (
     <div  className='career'>
     <h2>Now your are in Career Page</h2>
    <h4>Let's start learning About React router </h4>
  
    <button className='btn-back'  onClick={()=>{
        navigate(-1)
    }}> Back {"<<<.."}
    </button>

  <button className='btn-next' onClick={()=>{
        navigate(1)
    }}>Next {"...>>>"} </button> 


    
</div>
  )
}
