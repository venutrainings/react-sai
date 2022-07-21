import React from 'react';
import ReactDOM from 'react-dom';
import { set, useForm } from 'react-hook-form';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));






const Custom =()=>{
    const {register,setError,formState:{errors},handleSubmit} = useForm();
    const initialValues = {
          firstname:'bill'
    }

    const confirmpassword = register('confirmpassword')
    const onSubmit=(data)=>{
//console.log(JSON.stringify(data))
alert(JSON.stringify(data))
    }
    return (
        <div>
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <div className='form-group mt-20'>
                    <label className='form-label'>Password</label>
                    <input type='password' placeholder='please enter password' name="password" className='form-control' {...register('password',{required:{
                        value:true,message:'please enter the passwordd field'
                    }})} />
                    <small className='form-text text-danger'>{errors.password?.message}</small>
                </div>
                <div className='form-group mb-3'>
                    <label className='form-label'>Confirm Password</label>
                    <input type='password' placeholder='please enter password' name="confirmpassword" className='form-control' 
                    onChange={(e)=>{
                        confirmpassword.onChange(e);
                        setError('confirmpassword',{type:'custom',message:'please re-enter password'})
                    }}
                       
                  />  
                  <small className='text-danger'>{errors.confirmpassword?.message}</small>
                </div>

                <div className='form-group mb-3'>
                    <label className='form-label'>FIRST NAME</label>
                    <input type='text' placeholder='please enter password' name="firstname" defaultValue={initialValues.firstname} className='form-control' {...register('firstname',{
                    //     required:{
                    //     value:true,message:'please enter the first name field'
                    // },
                    validate:
                        (value)=> value !== 'bill'
                     } )} />
                    {/* <small className='form-text text-danger'>{errors.firstname?.message}</small> */}
                    {errors.firstName && <p>Your name is not bill</p>}

                </div>










                <div className='form-group mb-3'>
                    <input type='submit' value="submit" />
                </div>
            </form>

        </div>
    )
}
export default Custom;
// export default function Custom() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     setError,
//   } = useForm();

//   const onSubmit = (data) => {
   
//     if (data.username === 'bill') {
//       alert(JSON.stringify(data));
//     } else {
//       alert('There is error');
//       setError('username', 'validate');
//     }
//   };

//   console.log(errors);

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div>
//           <label htmlFor="username">User Name</label>
//           <input placeholder="Bill" {...register('username')} />
//         </div>

//         <div>
//           <label htmlFor="lastName">Last Name</label>
//           <input placeholder="Luo" {...register('lastName')} />
//         </div>

//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             placeholder="bluebill1049@hotmail.com"
//             type="text"
//             {...register('email')}
//           />
//         </div>

//         <div style={{ color: 'red' }}>
//           {Object.keys(errors).length > 0 &&
//             'There are errors, check your console.'}
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }