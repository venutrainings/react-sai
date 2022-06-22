
import React,{useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import {ToastContainer,toast} from 'react-toastify';
import axios from 'axios';

function LoginForm() {
    const navigate = useNavigate();
    const [values,setValues] = useState({
        email:'',
        password:''
    })

    const generateError = (err) =>
    toast.error(err, {
      position:'top-left',
    });
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5000/login",
        {
          ...values,
        },
        { withCredentials: true }
      );
      if (data) {
        if (data.errors) {
          const { email, password} = data.errors;
          if (email) generateError(email);
          else if (password) generateError(password);
        } else {
          navigate('/');
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className='container'>
        <h2>Register Account</h2>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <div>
                <label htmlFor='email'>Email</label>
                <input type="email" name='email' value={values.email} placeholder='enter your email' onChange={(e)=>setValues({...values,email:e.target.value})} />
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input type="password" name='password'value={values.password} placeholder='enter your password' onChange={(e)=>setValues({...values,password:e.target.value})}  />
            </div>
            <button type='submit'>Submit</button>
            <span>Already have an Account?
                <Link to='/register'>Register</Link>
            </span>
        </form>
        <ToastContainer /> 
    </div>
  )
}

export default LoginForm;