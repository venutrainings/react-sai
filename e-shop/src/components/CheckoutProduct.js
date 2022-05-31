import React from 'react';
import './CheckoutProduct.css'

function CheckoutProduct() {
  return (
    <div className='checkoutProduct'>
        <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/20-free-things-you-need-to-do-after-launching-your-ecommerce-website-5e664bcb60da5-1520x800.png"  alt='' className='checkoutProduct_image' />

        <div className='checkoutProduct_info'>
            <p className='checkoutProduct_title'>
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops price:109.95,description Your perfect pack for everyday use and walks in the forest.
            </p>
            <p className='checkoutProduct_price'>
                <small>$</small>
                <strong>200</strong>
            </p>
            <div className='checkoutProduct_rating'>
                ⭐⭐
            </div>
            <button>Remove from Basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct