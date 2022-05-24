import React, { useEffect } from 'react';
import {Link, Outlet, useNavigate} from 'react-router-dom';
import ModelPortal from './ModelPortal';

function About() {
  let navigate=useNavigate();
    // useEffect(()=>{
    //   navigate('/')
    // },[])
  //  setTimeout(()=>{
  //    navigate('/')
  //  },[3000])

  return (
    <div className='about'>
      <div>
        <ModelPortal />
      </div>
        <h2>About page now </h2>
        <p>React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started</p>
        <button onClick={()=>{
        navigate('/Contact')
    }}>Go Back to Contact</button> 
       
     <div className='btn-container'>
     <button className='btn-back' onClick={()=>{
        navigate(-1)
    }}>Back {"<<<"}</button>
       <button  className='btn-next' onClick={()=>{
        navigate(1)
    }}>Next {">>>"}</button>
     </div>

   
    </div>
  )
}

export default About;