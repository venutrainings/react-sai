import React from 'react';
import {useForm} from 'react-hook-form';



function ContactInfo() {
    const {register,handleSubmit,formState:{errors},setError,setValue} = useForm({
        defaultValues:{
            password:'',
            confirmpassword:'',
            test:''
        },
        criteriaMode:'all'
    }); 
    const onSubmit = (data) =>{
        // console.log(data);
        console.log(JSON.stringify(data));
        alert(JSON.stringify(data));
    } 
    console.log(errors);
  const password=  register('password');
 const confirmpassword=register('confirmpassword');
  return (
    <div>
        <h2>confirm passwords </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-group mt-20'mb-3>
            <label className='form-label'>Password</label>
            <input type='password' placeholder='please enter your password' className='form-control'name='password' {...register('password',{required:{
                value:true, message:'Please Fill the password field'
            }})} />
            <small className='form-text text-danger'>{errors.password?.message}</small>
        </div>
        <div className='form-group mt-20 mb-3'>
          <label className='form-label'>confirm Password</label>
          <input type = 'password' placeholder='please Re-enter your password..' className='form-control' onChange={
            (e) =>{  
      
              confirmpassword.onChange(e);
            //   if(e.target.value === password ) 
             
              setError('confirmpassword',{type:'manual',message:'confirm password'})
            }
          } />
          <small className='form-text text-danger'>{errors.confirmpassword && <p>{errors.confirmpassword.message}</p>}</small>
        </div>
        
        <div className='form-group mb-3'>
            <button onClick={()=>{
               // setError('test' , {type:'focus'} ,{shouldFocus:true})
             //  setError('test',{type:'custom', message:'something went wrong.'}) //single error
             setError ('password',{
                // types:{
                //     minLength:'write min length char',
                //     message:'something went wrong '
                // }
                type:'server side' , message:'server return'
             },{shouldFocus:true})
            }}>setErrors</button>
            <small className='form-text text-danger' style={{display:'block'}}>{errors.test?.message}</small>
            {/* <small className='form-text text-danger' style={{display:'block'}}>{errors.test?.types?.message}</small>

            <small className='form-text text-danger' style={{display:'block'}}>{errors.test?.types?.minLength}</small> */}

        </div>
      <div className='form-group mt-10'>
      <input type= 'submit' className=' form-control btn btn-primary' value='Submit' />
      </div>
        </form>
    </div>
  )
}

export default ContactInfo