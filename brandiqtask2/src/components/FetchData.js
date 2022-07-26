import axios from 'axios';
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

    const [updateId,setUpdateId] = useState();
    const [updatename,setUpdatename] = useState();
    const [updateemail,setUpdatemmail] = useState();

    // effect
    useEffect(()=>{

         // console.log(data)
        // clear the input fields 
        //nameRef.current.value = '' ;
        // emailRef.current.value = ''; 
        //setData(Data)

    },[data]);
    // add post 
    const addPost = (e) =>{
        e.preventDefault();
        if(name && email){
            // lets create new post object
            let newPost = {
                "id" : uuidv1(),
                "name":name,
                "email":email
            }
            // merge with the new post with old post
            let posts = [...data,newPost];
            // push the new post to state
            setData(posts);
            // clear the input fields 
            setName();
            setEmail();
            // WRITE TO JSON FILE 
            saveJson(posts)
            
        }
    }
     // delete post 
     const deletePost = (key) =>{
        // Filter  out the data containing id
         let filterData = data.filter(each => each.id !== key);
         // save the rest posts 
          setData(filterData);

        // WRITE TO JSON FILE 
        saveJson(filterData)
    }
   // populated post
    const populatedPost = (key,name,email) =>{
    //   console.log(key);
    //   console.log(name);
    //   console.log(email);
        setUpdateId(key);
        setUpdatename(name);
        setUpdatemmail(email);
 
    }

    // updatedpost 

    const updatedPost = () =>{
        // we already get the values of states from edit  option the we haveto created new update post
        let editPost = {
            "id":updateId,
            "name":updatename,
            "email":updateemail
        } 
        // remove the old post and update newpost with same id  and filter
        let  filterUpdate = data.filter(each => each.id !==updateId);
        // preparing object with edited post and remaining data from the above filterUpdate 

        let posts = [...filterUpdate,editPost];
        setData(posts);
        setUpdateId();
        setUpdatename();
        setUpdatemmail();
        // WRITE TO JSON FILE 
        saveJson(posts)

    }

    // Write to JSON file 
    // its receives all update / after you add , delete , update
     const saveJson = (posts) =>{
           // api url and endpoints from node server / express server 
           const URL = 'http://localhost:5000/write';
           axios.post(URL,posts)
           .then(res => console.log(res))
     }

     // download json file here
      const saveData = (jsonData)=>{
         const fileData = JSON.stringify(jsonData);
         const blob = new Blob([fileData],{type:'text/plain'});
         const url = URL.createObjectURL(blob);
         const link = document.createElement('a');
         link.download = 'newData.josn';
         link.href = url;
         link.click();
      }

  return (
    <div>

        {/* ADD POST  */}
        <h4>ADD NEW RECORD</h4>
        <form style={{display:'flex',flexDirection:'column' , margin:20,padding:20,marginBottom:4}} onSubmit={(e)=>addPost(e)}>
        <input type='text' placeholder='Enter Your Name' style={{marginBottom:5}} onChange={(e)=> setName(e.target.value)} value = {name || ''} ref={nameRef}/>
        <input type='email' placeholder='Enter Your Email-id'  style={{marginBottom:5}} onChange={(e)=> setEmail(e.target.value)} value={email || ''} ref={emailRef} />
        <input type='submit' value ="ADD NEW POST" />
        </form>
            {/* // update post */}
            {/* when the update form got values of name and email state value then it will show this */}
         
            {
                updatename || updateemail ? (
                  <div> 
                  <h4>ADD NEW RECORD</h4>
                  <form className='form-group' style={{display:'flex',flexDirection:'column' , margin:20,padding:20,marginBottom:4}} onSubmit={(e)=>updatedPost(e)}>
                  <input type='text' placeholder='Update Your Name' style={{marginBottom:5}} value={updatename || ''}  onChange={(e) => setUpdatename(e.target.value)} />
                  <input type='email' placeholder='Update Your Email-id'  style={{marginBottom:5}}  value={updateemail || ''} onChange={(e) => setUpdatemmail(e.target.value)} />
                  <input type ="submit" value='UPDATE POST' />
                  </form>
                  </div>
                
                ) : null
            }

        

        <h4>Fetch Data</h4>

        {data ? data.map((each) => 
               <div key={each.id} style={{padding:10,color:'darkblue',border:"1px solid darkred",margin:10}}> 
                 <p> NAME :  {each.name}</p>
                <p> EMAIL : {each.email}</p>
                <button onClick={()=>populatedPost(each.id,each.name,each.email)} style={{marginRight:10}}>Edit</button>
                <button onClick={()=>deletePost(each.id)}>Delete</button>
                </div>
                
            ) : null}
       <div>
         <button onClick={e=> saveData(data)}>download</button>
       </div>
    </div>
  )
}

export default FetchData