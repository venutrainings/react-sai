import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {fetchpost,deletepost} from './redux/postSlice';
import {toast} from 'react-toastify';

function Posts() {
  const [id,setId] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const {postlist,loading} = useSelector((state)=>state.posts);
 
console.log(postlist)
const handleFetch=(e)=>{
  e.preventDefault();
//  console.log(id);
  if(!id){
    toast.error('please enter valid id number here');
    // alert('please enter valid id number here');
  } else{
    dispatch(fetchpost({id}))
  }
}
 

  return (
    <>
    <div className='row mt-4 d-flex align-items-center justify-content-center'>
      <div  className='col-md-8'>
        <form action=''>
          <div  className="mb-3">
            <label  className="form-label">Search By ID</label>
            <input type="number" value={id} onChange={(e)=>setId(e.target.value)}  className="form-control" id="id" placeholder="Please enter id number here..." />
          </div>
         
          <button type="button"  className="btn btn-primary" onClick={handleFetch} >Fetch Post</button>
          <button type="button"  className="btn btn-success ms-2" onClick={()=>navigate('/getposts')}>Get Post</button>
          <button type="button" className="btn btn-primary ms-2"  onClick={()=>navigate('/createpost')}>Create Post</button>
        </form>

        {/* <div  classNameName='table-container'>
        <table>
               <thead>
                 <tr>
                    <th>ID</th>
                    <th>TITTLE</th>
                    <th>BODY</th>
                    <th>Operations</th>
                 </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>{postlist.id}</td>
                     <td>{postlist.title}</td>
                     <td>{postlist.body}</td>
                     <button type="button"  className="btn btn-primary">Edit</button>
                     <button type="button"  className="btn btn-danger">Delete</button>
                  </tr>
               </tbody>
            </table>
        </div> */}
     
      </div>
    </div>
    <div className='container'>
    <>
    {
        loading ? (
          <div className="spinner-border text-secondary" role="status">
  <span className ="visually-hidden">Loading...</span>
</div>
        ) : (
          (
             <>
             {
              postlist.id && (
                <>
                <div className='container ml-8'>
                  <div className="card col-md-8 mt-4 ">
                    <div className="card-body">
                      <h4 className="card-title">{postlist.id}</h4>
                      <h5 className="card-title">{postlist.title}</h5>
                       <p className="card-text">{postlist.body}</p>
                      <div className='d-flex align-items-end justify-content-end'>
                          <button className="btn btn-primary">Edit</button>
                          <button  className="btn btn-danger ms-4" onClick={()=>
                              dispatch(deletepost({id:postlist.id}))
                          }>Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
                </>
              )
             }
             </>
             )
          
    
        )
      }
    
    </>
    </div>
    </>
   
  )
}

export default Posts