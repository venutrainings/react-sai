import React from 'react';
import {Link, useNavigate,useParams} from 'react-router-dom';



function Contact() {
    let navigate=useNavigate();
    // let {username}=useParams();
   
  return (
    <center>
        <center>
     <h1>This page is used for..</h1> 
    <h2>Now your are in Contact Page</h2>
    <h4>Let's start learning About React router </h4>
    <button onClick={()=>navigate('/about')}>Go Back To About page</button>
  <div>
  <Link to='/card/saikumar'>SAIKUMAR</Link>
  <h2>Sai</h2>
  <p>loreum In the above example, fnResize method called, for browser width or height change. So that this method call, may impact our performance.
So by using throttling concept, we have to limit the fnResize method calls.</p>

  </div>
  <div>
  <Link to='/card/pusam'>PUSAM</Link>
  <h2>Sai</h2>
  <p>loreum In the above example, fnResize method called, for browser width or height change. So that this method call, may impact our performance.
So by using throttling concept, we have to limit the fnResize method calls.</p>

  </div>
    </center>

</center>
  )
}

export default Contact;