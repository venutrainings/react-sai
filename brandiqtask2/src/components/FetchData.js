import React,{useState,useEffect,useRef} from 'react';
import { v1 as uuidv1 } from 'uuid';
import Data from '../data.json';


function FetchData() {
    // ref

    const nameRef = useRef();
    const emailRef = useRef();
    // state
    const [data,setData] = useState(Data);

    // temp state
    const [name,setName] = useState();
    const [email,setEmail] = useState();

    // const [updateId,setUpdateId] = useState();
    const [updatename,setUpdatename] = useState();
    const [updateemail,setUpdatemmail] = useState();

    // effect
    useEffect(()=>{
       
    },[data]);
    // add post 
    const addPost = () =>{
        if(name && email){
            // lets create new post object
            let newPost = {
                "id" : uuidv1(),
                "name":name,
                "email":email
            }
            let posts = [...data,newPost];
            setData(posts);
            
        }
    }
     // delete post 
     const deletePost = (key) =>{
        
    }
   // populated post
    const populatedPost = (key,name,email) =>{
    //   console.log(key);
    //   console.log(name);
    //   console.log(email);
    }

    // updatedpost 

    const updatedPost = () =>{

    }

    // Write to JSON file 
     const saveJson = ({posts}) =>{

     }






  return (
    <div>

        {/* ADD POST  */}
        <h4>ADD NEW RECORD</h4>
        <form style={{display:'flex',flexDirection:'column' , margin:20,padding:20,marginBottom:4}} onSubmit={addPost}>
        <input type='text' placeholder='Enter Your Name' style={{marginBottom:5}} onChange={(e)=> setName(e.target.value)} value = {name || ''} ref={nameRef}/>
        <input type='email' placeholder='Enter Your Email-id'  style={{marginBottom:5}} onChange={(e)=> setEmail(e.target.value)} value={email || ''} ref={emailRef} />
        <input type='submit' value ="ADD NEW POST" />
        </form>
            {/* // update post */}
        <h4>ADD NEW RECORD</h4>
        <form className='form-group' style={{display:'flex',flexDirection:'column' , margin:20,padding:20,marginBottom:4}} onSubmit={updatedPost}>
        <input type='text' placeholder='Enter Your Name' style={{marginBottom:5}} value={updatename || ''}  onChange={(e) => setUpdatename(e.target.value)} />
        <input type='email' placeholder='Enter Your Email-id'  style={{marginBottom:5}}  value={updateemail || ''} onChange={(e) => setUpdatemmail(e.target.value)} />
        <input type ="submit" value='UPDATE POST' />
        </form>
    


        <h4>Fetch Data</h4>

        {data ? data.map((each) => 
               <div key={each.id} style={{padding:10,color:'darkblue',border:"1px solid darkred",margin:10}}> 
                 <p> NAME :  {each.name}</p>
                <p> EMAIL : {each.email}</p>
                <button onClick={()=>populatedPost(each.id,each.name,each.email)}>Edit</button>
                <button onClick={()=>deletePost(each.id)}>Delete</button>
                </div>
                
            ) : null}
        
     

    </div>
  )
}

export default FetchData