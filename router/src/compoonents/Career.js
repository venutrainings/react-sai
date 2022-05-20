import React from 'react';
import {useNavigate} from 'react-router-dom';


export default function Career() {
    let navigate=useNavigate();

  return (
     <center>
    <h2>Now your are in Career Page</h2>
    <h4>Let's start learning About React router </h4>
  
    <button onClick={()=>{
        navigate('/Contact')
    }}>Go Back to Contact</button>
      <button onClick={()=>{
        navigate(-2)
    }}>Go Back to 2pages</button>
      <button onClick={()=>{
        navigate(-1)
    }}>Go Back to 1 page</button>
       <button onClick={()=>{
        navigate(1)
    }}>Go Forward to 1 page</button>
    <button onClick={()=>{
        navigate(2)
    }}>Go Forward to 2 page</button>
</center>
  )
}
