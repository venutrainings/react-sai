import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { connect } from 'react-redux';


 function Career({users}) {
    let navigate=useNavigate();

  return (
     <div  className='career'>
     {/* <h2>Now your are in Career Page</h2>
    <h4>Let's start learning About React router </h4>
  
    <button className='btn-back'  onClick={()=>{
        navigate(-1)
    }}> Back {"<<<.."}
    </button>

  <button className='btn-next' onClick={()=>{
        navigate(1)
    }}>Next {"...>>>"} </button>  */}



<>
{
users.map(user=>{
  return <div key={user.id}>
    <h1>{user.id}</h1>
      <Link to={`/${user.title}`}>{user.title}</Link> <br></br> 
     {/* <Link to={`/userslist/${user.name}`}>{user.name}</Link>  */}
    {/* <button onClick={()=>
        // navigate(`/${user.name}`)
        navigate(`/userslist/${user.name}`)
    }>{user.name}</button> */}
    <p>{user.body}</p>
  </div>
})
}

</>

    
</div>
  )
}
const mapStateToProps=(state)=>{
  return {
    users:state.users
  }
}
export default connect(mapStateToProps)(Career);