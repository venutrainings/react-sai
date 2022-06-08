import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import TextField from './TextField'

function EditUser() {
    const users=useSelector((store)=>store.users)
    const params=useParams();
    console.log(params);
    const navigate=useNavigate();
    const existingUser=users.filter((user)=>user.id === params.id);
    const {name,email} = existingUser[0];
    const [values,setValues]=useState({
        name,
        email
    });

    const EditHandler=(e)=>{
            e.preventDefault();
           
        setValues({name:'',email:''});
        navigate('/')
    }
  return (
    <div>
        <h3>Edit User Details here:</h3>
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
        <button onClick={EditHandler}>Edit</button>
    </div>
  )
}

export default EditUser