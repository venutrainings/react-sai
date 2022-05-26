import React,{useEffect} from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import {connect} from 'react-redux';
import { deletecard, fetchUsers } from './redux/Action';



function Card({user,deleteUser,fetch,fetchUsers}) {
  let navigate=useNavigate();

 const fnDelete=()=>{
let id=user.id
 deleteUser(id);
   navigate('/career')
 }
 useEffect(()=>{
  fetchUsers()
 },[])

    // const navigate=useNavigate();
  return (
    
    <div className='card'>
      {/* <p>{user.id}</p>
      <p>{user.title}</p>
      <p>{user.body}</p>
      <button onClick={fnDelete}>Delete</button> */}

      <div>
        {
          fetch.length
        }
      </div>
 {/* <h2>{user.id}</h2>
 <h4>{user.name}</h4>
 <h4>{user.body}</h4>
      */}
        {/* <h3 className='header'>Card items are listed here:<span>{user_name}</span></h3>
    <div>
    <button  className='btn1' onClick={()=>{
        navigate(-1)
    }}> Back 
    </button>

  <button className='btn2' onClick={()=>{
        navigate(1)
    }}>Next </button>
    </div> */}



    </div>
  )
}
const mapStateToProps=(state,ownProps)=>{

 const  title=ownProps.userId
  return {
      user:state.users.find((user)=>user.title !== title),
      fetch:state.fetchdata
  }
}
const mapDispatchToProps=(dispatch)=>{
  return  {
    deleteUser:(id)=>{dispatch(deletecard(id))},
    fetchuser:()=>{dispatch(fetchUsers())}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Card);