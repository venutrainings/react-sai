import React, { useEffect } from 'react';
import {Link, Outlet, useNavigate} from 'react-router-dom';

function About() {
  let navigate=useNavigate();
    // useEffect(()=>{
    //   navigate('/')
    // },[])
  //  setTimeout(()=>{
  //    navigate('/')
  //  },[3000])

  return (
    <center>
        <h2>About page now </h2>
        <p>React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started</p>
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

export default About;