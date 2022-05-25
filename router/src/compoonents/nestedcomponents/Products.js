import React from 'react';
import {Link,Outlet} from 'react-router-dom';


function Products() {
  return (
    <div className='products'>
        <h4>Display the nested components here:</h4>
        <h2>Products of two components Lists and Users</h2>
        <div>
            <Link to='users' className='link'>Users</Link>
            <Link to='lists' className='link'>Lists</Link>
        <Outlet />
        </div>
    </div>
  )
}

export default Products