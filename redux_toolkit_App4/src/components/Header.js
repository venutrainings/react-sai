import React from 'react';
import {useNavigate} from 'react-router-dom';

function Header() {
    const navigate=useNavigate();
  return (
    <div className='header'>
        <button onClick={()=>
        navigate('/userpost')}>UserPost</button>
        <button onClick={()=>
        navigate('/createpost')}>Create Post</button>
    </div>
  )
}

export default Header