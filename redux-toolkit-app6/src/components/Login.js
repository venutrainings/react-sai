import React,{useState,useEffect} from 'react';
import {FaSignInAlt} from 'react-icons/fa';

function Login() {
    const [formData,setFormData] = useState({
        name:'',
        email:'',
      
    })

// const onChange=(e)=>{
//     e.preventDefault();
//     setFormData(
//         (prevState)=>({
//             ...prevState,
//             [e.target.name]:e.target.value
//         })
//     )
// }

    const submitLogin=(e)=>{
        e.preventDefault();
      setFormData({
        email:'',password:''
      })
      console.log(formData.email)
    }

  return (
 <>
    <section className='heading'>
        <h1><FaSignInAlt /> Login</h1>
        <p>Please login  account to start setting goals </p>
    </section>
    <section>
        <form onSubmit={submitLogin}>
           
            <div className='form-group'>
                <input type='email' name='email' id='email' className='form-control' value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})} placeholder='Enter Your Email' />
            </div>
            <div className='form-group'>
                <input type='password' name='password' id='password' className='form-control' value={formData.password} onChange={(e)=>setFormData({...formData,password:e.target.value})} placeholder='Enter Password' />
            </div>
   
            <div className='form-group'>
                <button type='submit' className='btn btn-block'>Submit</button>
            </div>
        </form>
    </section>
 
 </>
  )
}

export default Login;