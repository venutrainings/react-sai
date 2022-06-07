import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {createPost} from '../redux/features/postSlice';
import {useDispatch,useSelector} from 'react-redux';

function CreatePost() {

    const {post,loading} = useSelector((state)=>state.post);
    const dispatch=useDispatch();
    const navigate=useNavigate();
   const [values,setValues]=useState({
       title:'',
       body:''
   })

    const CreatePost=(e)=>{
        e.preventDefault();
        dispatch(createPost({values}));
      setValues({
          title:'',
          body:''
      })
    }


  return (
    <div>
        <h2>Create Post Here:</h2>
        <input type='text' value={values.title} onChange={(e)=>setValues({...values,title:e.target.value})} /> <br /><br />
        <textarea type='text' value={values.body} onChange={(e)=>setValues({...values,body:e.target.value})} /> <br /><br />
        <button onClick={CreatePost
        }>Create Post</button>
        <button onClick={()=>
            navigate('/userpost')
        } >Go BaCK</button>

        <div className='display-createpost'>
            {
                post.map((user)=>{
                    return <div>
                        <p><b>USER ID</b> : {user.id}</p>
                        <p><b>USER TITLE</b>: {user.title}</p>
                        <p><b>USER BODY</b> : {user.body}</p>
                        </div>
                })
            }
        </div>
    </div>
  )
}

export default CreatePost