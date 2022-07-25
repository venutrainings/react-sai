import React , {useState} from 'react';
// import json from '../data.json';
import axios from 'axios';
import {useForm} from 'react-hook-form';
import fs from "fs"; 
function Sample() {
 
 const {register,handleSubmit,formState:{errors},setValue,watch,setError}= useForm({
  mode:'onSubmit',
    defaultValues:{
        name:'',
        email:''
    }
 });

 const [jsondata,setJsondata] = useState(require("../data.json"));
  // const [data,setData] = useState([]);
  //  const [isloading,setIsloading] = useState(false);
  //  const [formdata,setFormdata] = useState(data)

  window.onbeforeunload = () => {
    console.log("Page Reloaded");
  
    fs.writeFile("data.json", JSON.stringify(jsondata), (ex) => {
      if (ex) throw ex.message;
  
      console.log("State copying successful.");
    });
  };


  const onSubmit = (data, e ) =>{
  e.preventDefault();
    console.log(data);
   setJsondata(data);

  //   setData(data);
  //   setFormdata(data);
  //   setValue('email','',{shouldValidate:true})
  //   setValue('name','',{shouldValidate:true});

  //     setFormdata({name:'',email:''})
  }
 //  const name = watch('name')    
  return (
    <div>
        <h4>simple validation</h4>

        <div style={{background:'darkred' , padding:10,color:'white',marginBottom:10}}>
        {/* <prev>{JSON.stringify(formdata,undefined,2)}</prev>  */}

        </div>
      <>
      {
              json.length
            } 
      </>
        {/* <table>
          <thead>
            <tr>
              <th>Phone</th>
            <th>Email</th>
            </tr>
          </thead>
          <tbody>
           
            <tr>
              <td>{json.name}</td>
              <td>{json.email}</td>
            </tr>
          </tbody>
        </table> */}
      
        <form onSubmit={handleSubmit(onSubmit)}>
           <div className='form-group mt-30 mb-3'>
            <label className='form-label'>NAME</label>
            <input type='text' placeholder = 'Enter Name'defaultValue={formdata.name} className='form-control' {...register('name',{
                required:true,
              validate:(value) => {
                  
                if(value !==''){
                        setError('name',{type:'manual',message:'please'})
                     }
           
            } , 
          } )}
                
                 />
            <small className='form-text text-danger'>{errors.name?.type === 'required' && <p>Fill this name field is a required!</p> } </small>
           </div>
           <div className='form-group mb-5'>
            <label className='form-label'>Email</label>

           <input type='email' placeholder = 'Enter Name' defaultValue={formdata.email} className='form-control' {...register('email',{
            required:true,
            // validate:(value) => value === name || 'names not matached '
            // validate:(value) => {
              
            //   if(value !==''){
            //   setValue("email",'', {shouldValidate:false})
            //   }
            //  }
          
          
          })} />
            <small className='form-text text-danger'>{errors.email?.type === 'required' && <p>Fill this email field is a required!</p> } </small>
           </div>
           <div className='form-group'>
          
            <input type='submit' value='Submit' className='form-control btn btn-info' />
           </div>
           
        </form>

    </div>
  )
}

export default Sample