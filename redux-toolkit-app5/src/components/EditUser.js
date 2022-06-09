import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import TextField from './TextField';
import {editUser} from '../redux/features/users/UserSlice'

function EditUser() {
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector(store => store.users);
  const navigate = useNavigate();
  const existingUser = users.filter(user => user.id === params.id);
  const {name,email} = existingUser;
  const [values, setValues] = useState({
    name,
    email
  });

  const EditHandler = () => {
    setValues({ name: '', email: '' });
    dispatch(editUser({
      id: params.id,
      name: values.name,
      email: values.email
    }));
    navigate('/');
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

export default EditUser;