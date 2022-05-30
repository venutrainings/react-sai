import React from 'react';
import './Product.css';

function Product() {
  return (
    <div className='product'>
        <div className='product-info'>
            <p>Title</p>
            <p className='product-price'>
                <small>$</small>
                <strong>30</strong>
            </p>
            <div className='product-rating'>
                ⭐⭐⭐⭐⭐
            </div>
        </div>
        <img src='https://clockwise.software/img/blog/e-commerce-website-cost/header-background.png' alt=''className='' />
            <button>ADD TO BASKET</button>

    </div>
  )
}

export default Product;