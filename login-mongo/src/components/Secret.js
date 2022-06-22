import React,{useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useCookies} from 'react-cookie';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';


function Secret() {
  const navigate = useNavigate();
  const [cookies,setCookies,removeCookie] = useCookies([]);

  const logOut = () => {
   removeCookie("jwt");
    navigate('/login');
  };

   useEffect(() => {
    const varifyUser = async()=>{
      if(!cookies.jwt){
        navigate('/');
      } else{
        const {data} = await axios.post("http://localhost:5000",{},{
          withCredentials:true
        });
        if(!data.status){
          removeCookie("jwt");
          navigate('/login');
        } else toast(`hi ${data.user}`,{theme:"light"})
        
      }
    };
    
    varifyUser();
   }, [cookies, navigate, removeCookie]);
  return (
    <>
    <div className='private'>
      <h2>logout page</h2>
      <button onClick={logOut}>Logout</button>
    </div>
    <ToastContainer />
    </>
  )
}

export default Secret