import React,{useNavigate} from 'react-router-dom';

function NotFound() {
  let navigate=useNavigate()
  return (
    <div className='not-found'>
      <h2> 4O4 NOT FOUND please try agin later.....</h2>
      <h2>please return back to the Home page </h2>
      <button onClick={()=>{
        navigate('/')
      }}>Home</button>
  <button onClick={()=>{
        navigate(-1)
    }}>Go Back to 1 page</button>
       <button onClick={()=>{
        navigate(1)
    }}>Go Forward to 1 page</button>
    </div>
  )
}

export default NotFound