import axios from 'axios';
import React, {useState} from 'react';
import {useForm, Contoller} from 'react-hook-form';
// import Data from '../data.json';

function FetchApi() {
    const {register,handleSubmit,formState:{errors},reset} = useForm();
    const [data,setData] = useState();
     const onSubmit = (data) =>{
        console.log(data);
        setData(data);
        saveJson([data]);
        reset();
     }

     const saveJson = (post)=>{
        const URL = 'http://localhost:4000/write';
        axios.post(URL,post).then(res => console.log(res))
     }

  return (
    <div>
        <h4>Fetch Api Data</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form- group mt-4 mb-3'>
                <label className='form-label'>Name</label>
                 <input className='form-control' type='text' placeholder='enter name' {...register('name',{
                    required:{
                        value:true, message:'This name field is a required'
                    }
                 })} />
                 <smalll className="form-text text-danger" >{errors.name?.message}</smalll>
            </div>
            <div className='form-group mb-3'>
                <label className='form-label'>Email</label>
                <input className='form-control' type='email' placeholder='enter email' {...register('email',{
                    required:{
                        value:true, message:'This email field is a required'
                    }
                 })} />
                 <smalll className="form-text text-danger" >{errors.email?.message}</smalll>
            </div>
            <div className='form-group mb-3'>
                <label className='form-label'>City</label>
                <input className='form-control' type='text' placeholder='enter city' {...register('city',{
                    required:{
                        value:true, message:'This city field is a required'
                    }
                 })} />
                 <smalll className="form-text text-danger" >{errors.city?.message}</smalll>
            </div>
            <div className='form-group mb-3' >
                <label className='form-label'>Address</label>
                <textarea className='form-control' type='text' placeholder='enter address1' {...register('address1',{
                    required:{
                        value:true, message:'This name field is a required'
                    }
                 })} />
                 <smalll className="form-text text-danger" >{errors.address1?.message}</smalll>
            </div>
            <div className='form-group mb-3'>
                <label className='form-label'>Phone</label>
                <input className='form-control' type='number' placeholder='enter phone' {...register('phone',{
                    required:{
                        value:true, message:'This phone field is a required'
                    }
                 })} />
                 <smalll className="form-text text-danger" >{errors.phone?.message}</smalll>
            </div>
            <input type = 'submit' value='Submit' className='form-control btn btn-info '/> 
           
        </form>
        <div>
            
               {/* {
                Data.map((each)=>{
                    return <div key={each.id} style={{marginTop:20,textAlign:'center',border:'1px solid darkred'}}>
                        <p>NAME : {each.name}</p>
                        <p>EMAIL :  {each.email}</p>
                    </div>
                })
               } */}
  <div style={{marginTop:20,textAlign:'center',border:'1px solid darkred'}}>
                        <p>NAME : {data.name}</p>
                        <p>EMAIL :  {data.email}</p>
                        <p>CITY :  {data.city}</p>
                        <p>ADDRESS:  {data.address1}</p>
                        <p>PHONE:  {data.phone}</p>
                    </div>
            
        </div>
    </div>
  )
}

export default FetchApi




//   fetch('https://jsonplaceholder.typicode.com/users',{
//     method:'POST',
//     body:JSON.stringify({
//         id:'',
//         name:'',
//         email:'',
//         address1:'',
//         phone:''
//     }),
//     headers:{
//         'content-type':'application/json',
//         Access :'application/json',
//         Authorization:'Bearer 976f9d976a54effb7542419bf7fd698fd6e349ea8b283c7f2e19819bf87e1a36'
//     }
//  }).then(response => response.json).then(json => console.log(json))