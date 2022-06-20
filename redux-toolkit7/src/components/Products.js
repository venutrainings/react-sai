import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getproduct} from '../redux/features/ProductSlice';
import 'bootstrap/dist/css/bootstrap.min.css';


function Products() {
    const {products} = useSelector((state)=>state);
    const  dispatch = useDispatch();
    console.log(products);
  return (
    <>
    <div className='container'>
        <h3>Get Products here </h3>
        <button onClick={()=>dispatch(getproduct())}>Get Product</button>
        </div>
        <hr></hr>

  
        
             
      {
          products.product.map((each) => (
          <div className='row'>
              <div className='main-div col-md-4'>
           <div className='img-div'>
            <img src={each.image} className="img" alt=''></img>
           </div>
             <h1 className='head1'>{each.title}</h1>
             <p className='para'>{each.description}</p>
             <h3 className='head3'>{each.price}</h3>
           </div>
          </div>
          ))
      }
        

    
    </>
  )
}

export default Products;

{/* <div className="card col-md-4">
<img src={each.image} className="card-img-top" alt="..." />
<div className="card-body">
   <h5 className="card-title">{each.title}</h5>
   <p className="card-text">{each.description}</p>
   <p className="card-text">{each.price}</p>
</div>
</div> */}