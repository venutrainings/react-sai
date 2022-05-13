import React from 'react';
import {Link} from 'react-router-dom';
// import Image from '../src/images/1.png';
function Navbar() {
  return (
        <div className='container-nav'>
            <nav className='navbar'>
               <div>
               <i class="fa-brands fa-forumbee"></i><span>SAIKUMAR</span>
               {/* <img src={Image} alt='img' className='img' /><span>React</span> */}
               </div>
                <ul className='nav-list'>
                    <Link to='/'><li><span>Home</span></li></Link>
                    <Link to='/dashboard'><li><span>Dashboard</span></li></Link>
                    <Link to='/about'><li><span>About</span></li></Link>
                </ul>
            </nav>
        </div>
  )
}

export default Navbar;