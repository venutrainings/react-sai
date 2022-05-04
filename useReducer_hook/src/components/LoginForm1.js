import React, {useState} from 'react';

function LoginForm1() {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [loggedIn,setLoggedIn]=useState(false);
    const [error,setError]=useState(false);

    const handleSubmitForm=(e)=>{
        e.preventDefault();
      if(username==="saikumar" && password === "pusam123"){
          console.log('success');
        setLoggedIn(true);
        setUsername('');
        setPassword('');
      } else{
          console.log('error');
          setError('invalid username/password');
      }
    };

  return (
      <div className='login-container'>
     <h1 className='header'>Created Login page using useState Hook </h1>
{
    loggedIn ? 
    <div>
    <h2>You have successfully login</h2>
    <p>Returns to the login form</p>
    <button className='btn-logout' onClick={()=>{
        setLoggedIn(false);
        setError(false);
    }}>Logout</button>
</div> 
:
<form onSubmit={handleSubmitForm} autoComplete='off'>
<h2 className='header2'>Login</h2>
<p className='red'>{error}</p>
<input type="text" value={username} name='username' placeholder='username' onChange={(e)=>setUsername(e.target.value)} /><br></br><br></br>
<input type='password' value={password} name='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)} /><br></br><br></br>
<button className='btn-submit'>Submit</button><br></br>
</form>
}
</div>
 );
};

export default LoginForm1;