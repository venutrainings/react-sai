import React,{useState,useEffect} from 'react';
import {FaUser} from 'react-icons/fa';
import {toast} from 'react-toastify';
import {useSelector,useDispatch} from 'react-redux';
import {reset,register} from '../feauters/auth/AuthSlice';

function Register() {
    const {user,isError,isLoading,isSuccess,message} = useSelector((state)=>state.auth);
    const [formData,setFormData] = useState({
        name:'',
        email:'',
        password:'',
        password2:''
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
const submitFormData=(e)=>{
    e.preventDefault();
    if(password !== password2){
        toast.error('Passwords does not match');
    }
    const userData={
        name,password,email
    }
    dispatch(register({
        name, email,password
    }))

}
  return (
 <>
    <section className='heading'>
        <h1><FaUser /> Register</h1>
        <p>Please create an account</p>
    </section>
    <section>
        <form onSubmit={submitFormData}>
            <div className='form-group'>
                <input type='text' name='name' id='name' className='form-control' value={formData.name} onChange={(e)=>setFormData({...formData,name:e.target.value})} placeholder='Enter Your Name' />
            </div>
            <div className='form-group'>
                <input type='email' name='email' id='email' className='form-control' value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})} placeholder='Enter Your Email' />
            </div>
            <div className='form-group'>
                <input type='password' name='password' id='password' className='form-control' value={formData.password} onChange={(e)=>setFormData({...formData,password:e.target.value})} placeholder='Enter Password' />
            </div>
            <div className='form-group'>
                <input type='password2' name='password2' id='password2' className='form-control' value={formData.password2} onChange={(e)=>setFormData({...formData,password2:e.target.value})} placeholder='Confirm Password' />
            </div>
            <div className='form-group'>
                <button type='submit' className='btn btn-block'>Submit</button>
            </div>
        </form>
    </section>
 
 </>
  )
}

export default Register;