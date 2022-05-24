import React from 'react';
import { useParams,useNavigate } from 'react-router-dom';



function Card() {
    const {user_name}=useParams();
    const navigate=useNavigate();
  return (
    
    <div>
     
        <h3 className='header'>Card items are listed here:<span>{user_name}</span></h3>
    <div>
    <button  className='btn1' onClick={()=>{
        navigate(-1)
    }}> Back 
    </button>

  <button className='btn2' onClick={()=>{
        navigate(1)
    }}>Next </button>
    </div>
    </div>
  )
}

export default Card;