import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import ProductComponent from './productComponent';
import {setproducts} from '../redux/actions/ProductActions';


function PoductLists() {
    const products=useSelector((state)=>state)
    const dispatch=useDispatch();
    const fetchProducts= async ()=>{
        const response = await axios.get('https://fakestoreapi.com/products').catch(error=>{
            console.log('error ',error)
        })
       // console.log(response.data);
       dispatch(setproducts(response.data))
    }
    useEffect(()=>{
        fetchProducts();
    },[])
    console.log("products ",products);

  return (
    <div className='ui grid container'> 
       <ProductComponent />
    </div>
  )
}

export default PoductLists;