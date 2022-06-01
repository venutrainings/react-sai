import React, {useState} from 'react';
import './Login.css';
import {Link,useNavigate} from 'react-router-dom';
import StorefrontIcon from '@mui/icons-material/Storefront';
import {auth} from '../Firebase';
function Login() {
    const navigate=useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const signIn=(e)=>{
        e.preventDefault();
        auth
            .singInWithEmailAndPassword(email,password)
            .then(auth=>{
                navigate('/')
            })
            .catch((error)=>{
                alert(error.message)
            })
    }
    const register=(e)=>{
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth)=>{
                if(auth){
                    navigate('/')
                }
            })
            .catch((error)=>{
                alert(error.message)
            })
    }

  return (
    <div className='login'>
      <Link to='/' style={{textDecoration:'none'}}>
        <div className='login_logo'>
            <StorefrontIcon className='login_logoImage' />
            <span className='login-logoTitle'>eSHOP</span>
        </div>
      </Link>

        <div className='login_container'>
            <h1>Sign_in</h1>

            <form>
                <h5>E-MAIL</h5>
                <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} />
                <h5>PASSWORD</h5>
                <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                <button type='submit' className='login_signInbtn' onClick={signIn}>Sign-In</button>
             </form>

            <p>
                By signing-in agree to the eSHOP website conditions of use and sale. Please see our Security Privacy Notice and Our Cookies Notice and our Interested-Based ad Notice.
            </p>
            <button className='create-accoutn-btn' onClick={register}>Create Your e-shop Account</button>

        </div>
    </div>
  )
}

export default Login;