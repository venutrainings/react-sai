import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUser } from '../redux/features/users/UserSlice';
import TextField from './TextField';
// uuidv4 used create random id 
import { v4 as uuidv4 } from 'uuid';

function AddUser() {

    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [values,setValues]=useState({
        name:'',
        email:''
    })

    const AddHandler=(e)=>{
            e.preventDefault();
           dispatch(addUser({
             id:uuidv4(),
             name:values.name,
             email:values.email
           }))
        setValues({name:'',email:''});
        navigate('/');
    }
  return (
    <div>
        <TextField 
        label='name'
        input={{type:'text',placeholder:'Saikumar'}}
        value={values.name}
        onChange={(e)=>setValues({...values,name:e.target.value})}
        />
        <TextField 
        label='email'
        input={{type:'email',placeholder:'saikumar@gamil.com'}}
        value={values.email}
        onChange={(e)=>setValues({...values,email:e.target.value})}
        />
        <button onClick={AddHandler}>Submit</button>
    </div>
  )
}

export default AddUser