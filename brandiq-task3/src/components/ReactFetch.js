import axios from 'axios';
import React, {useState} from 'react';
import {useForm, Contoller} from 'react-hook-form';



import fs from 'fs';

function ReactFetch() {
    const {register,handleSubmit,formState:{errors},reset} = useForm();
 

const [data,setData] = useState([]);

     const onSubmit = (data) =>{
        console.log(JSON.stringify(data));
        reset();
     
         TextInput([data]);
     }

   const TextInput =(jsonData) =>{
    let  url = 'http://localhost:3000/data.json'

fetch(url,{ 
       method:'POST',
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        Authorization:'Barear 976f9d976a54effb7542419bf7fd698fd6e349ea8b283c7f2e19819bf87e1a36 '
       },
       body:JSON.stringify(jsonData)
    })
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        // setData(myJson)
      })
     
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
        
            
             <div style={{marginTop:20,textAlign:'center'}}>
                <h4>Get JSON data</h4>
                <>{
                    data.map((each,index) => {
                        return <div key={index} style={{background:'darkgrey',padding:30,border:'1px solid red'}}>
                            <p>NAME : {each.name}</p>
                            <p> EMAIL : {each.email}</p>
                            <p> CITY : {each.city}</p>
                            <p> ADDRESS : {each.address1}</p>
                            <p>PHONE : {each.phone}</p>
                        </div>
                    })
                }</>
             </div>
 
    </div>
  )
}

export default ReactFetch;