import React from 'react';
import './Header.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StoreIcon from '@mui/icons-material/Store';
import SearchIcon from '@mui/icons-material/Search';


function Header() {
  return (
    <div className='header'>
        <div className='header-logo'>
            <StoreIcon className='header-logoImage' fontSize='large' />
            <h2 className='header-logoTitle'>eSHop</h2>
        </div>
        <div className="header-search">
            <input type='text' className='header-searchInput'></input>
            <SearchIcon className='search-icon'/>
        </div>
       <div className="header-nav">
            <div className="nav-item">
                <span className="nav-itemLineOne">Hello Guest</span>
                <span className="nav-itemLineTwo">Sign In</span>
            </div>
            <div className="nav-item">
                <span className="nav-itemLineOne">Your</span>
                <span className="nav-itemLineTwo">Shop</span>
            </div>
        <div className="nav-itemBasket">
            <ShoppingBasketIcon  />
            <span className="nav-itemLineTwo nav-basketCount">0</span>
           
        </div>
       </div>

    </div>
  )
}

export default Header