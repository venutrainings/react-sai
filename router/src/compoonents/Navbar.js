import React, { useEffect } from 'react';
import { Link ,NavLink,useNavigate,useHistory,Outlet} from 'react-router-dom';

function Navbar() {
  

    
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         navigate('/career')
    //     },5000)
     
    // },[])
    // setTimeout(()=>{
    //     navigate('/career')
    // },5000)
    // setTimeout(()=>{
    //     navigate('/about')
    // },10000)
    // setTimeout(()=>{
    //     navigate('/')
    // },10000)
  return (
       <div className='navbar-container'>
    
            <nav className='nav-bar'>
            <ul>
                <Link to='/' className='link'><li>Home</li></Link>
                <Link to='/about' className='link'><li>About</li></Link>
                <Link to='/contact' className='link'><li>Contact</li></Link>
                <Link to='/career' className='link'><li>Career</li></Link>
                <Link to='/model' className='link'><li>Model</li></Link>
                 {/* <NavLink to='/about' ><li>About</li></NavLink>
                <NavLink to='/contact'><li>Contact</li></NavLink>
                <NavLink to='/career'><li>Career</li></NavLink> */}
            </ul>
            </nav>
           
       </div>
    )
}

export default Navbar;