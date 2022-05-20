import React,{useNavigate} from 'react-router-dom';

function NotFound() {
  let navigate=useNavigate()
  return (
    <center>
      <h2> 4O4 NOT FOUND please try agin later.....</h2>
      <h2>please return back to the Home page </h2>
      <button onClick={()=>{
        navigate('/')
      }}>Home</button>

    </center>
  )
}

export default NotFound