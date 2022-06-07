
import React,{useState} from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import {getPost,deletePost,setEdit, updatePost} from '../redux/features/postSlice';


function UserPost() {
const {post}=useSelector((state)=>state.post);
const [id,setId] = useState('');
const [titletext,setTitletext]=useState('');
const [bodytext,setBodytext]=useState('');

const dispatch=useDispatch();

 const fetchPost=()=>{
    if(!id){
        window.alert('Please Enter Id');
    } else{
        dispatch(getPost({id}));
        setId('');
    }
 }   

  return (
    <div>
        <div className='getpost'>
        <h2>fetching  post here: </h2>
        <input type='number' min='1' max='100' placeholder='Enter id here....' value={id} onChange={(e)=>setId(e.target.value)} />
        <button onClick={fetchPost}>Fetch Post</button>
        </div>

        <div className='display_post'>
           {
               post.map((user)=>{
                   return <div key={user.id}>
                                <p><b>USER ID</b> : {user.id}</p>
                        <p><b>USER TITLE</b>: {user.title}</p>
                        <p><b>USER BODY</b> : {user.body}</p>
                      
                                    <input type='text' value={titletext} placeholder='Enter Title Name...' onChange={(e)=>setTitletext(e.target.value )} /> <br></br><br></br>
                                    <textarea  type='text' value={bodytext} placeholder = 'Enter body post....' onChange={(e)=>setBodytext(e.target.value )}  /> <br></br><br></br>
                    
                                    <button onClick={()=>
                                        dispatch(deletePost({id:user.id}))
                                     }>Delete</button>

                                    <button onClick={(e)=>{
                                        e.preventDefault();
                                        dispatch(updatePost({
                                            id:user.id,title:titletext,body:bodytext
                                        }))
                                        setTitletext('');
                                        setBodytext('');
                                    }

                                    }>Edit</button>

                        </div>

               }
               )
           }
        </div>
    </div>
  )
}

export default UserPost;