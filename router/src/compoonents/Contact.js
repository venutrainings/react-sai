import React from 'react';
import {Link, useNavigate,useParams} from 'react-router-dom';



function Contact() {
    let navigate=useNavigate();
    // let {username}=useParams();
   
  return (
    <div className='contact-container'>
        <div className='contact '>
     <h1>This page is used for..</h1> 
    <h2>Now your are in Contact Page</h2>
    <h4>Let's start learning About React router </h4>
    <button onClick={()=>navigate('/about')}>Go Back To About page</button>
  <div>
  <Link to='/saikumar' className='link1'>SAIKUMAR</Link>
  <h2>ABOUT CARD 1:</h2>
  <p>loreum In the above example, fnResize method called, for browser width or height change. So that this method call, may impact our performance.
So by using throttling concept, we have to limit the fnResize method calls.</p>

  </div>
  <div>
  <Link to='/pusam' className='link2'>PUSAM</Link>
  <h2>ABOUT CARD 2:</h2>
  <p>loreum In the above example, fnResize method called, for browser width or height change. So that this method call, may impact our performance.
So by using throttling concept, we have to limit the fnResize method calls.</p>
<button className='btn-back'  onClick={()=>{
        navigate(-1)
    }}> Back 
    </button>

  <button className='btn-next' onClick={()=>{
        navigate(1)
    }}>Next </button>
</div>
    </div>
  
</div>
  )
}

export default Contact;