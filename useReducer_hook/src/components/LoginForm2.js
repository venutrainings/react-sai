import React,{useReducer} from 'react';
const InitialState={
    username:'',
    password:'',
    loggedIn:false,
    error:false
};

const reducer=(state,action)=>{
    console.log(state,action);
    switch(action.type){
        case 'SUCCESS':
            return {
                ...state,
                loggedIn:true,
                username:'',
                password:''
            }
        case 'ERROR':
            return {
                ...state,
                error:'Invalid username or password'
            }
        case 'LOGOUT':
            return {
                ...state,
                loggedIn:false,
                error:false
            }
        case 'USERNAME':
            return {
                ...state,
                username:action.value
            }
        case 'PASSWORD':
            return {
                ...state,
                password:action.value
            }
        default:
            return state;
    }
}
function LoginForm2() {
    const [state,dispatch]=useReducer(reducer,InitialState);

    const handleSubmitForm=(e)=>{
        e.preventDefault();
    if(state.username === 'saikumar' && state.password === 'pusam123'){
        console.log('success');
        dispatch({type:'SUCCESS'});
    } else{
        console.log('error')
        dispatch({type:'ERROR'});
    }
    }
    
  return (
    <div className='login-container'>
    <h1 className='header'>Created Login Form using React useReducer Hook</h1>
    {
        state.loggedIn ? 
        <div>
       <h2>You have successfully login</h2>
       <p>Please Returns to the Login page</p>
       <button className='btn-logout' onClick={()=>{
           dispatch({type:'LOGOUT'})
       }}>Logout</button>
   </div>
   :
   
    <form onSubmit={handleSubmitForm} className="form">
        <h2 className='header2'>Login</h2>
        <p className='red'>{state.error}</p>
        <input 
        type="text"
        name='username' 
        placeholder='username'
        value={state.username} 
        onChange={(e)=>dispatch({type:'USERNAME',value:e.target.value})}
        /><br></br><br></br>
        <input 
        type="password"
        name='password' 
        placeholder='password'
        value={state.password} 
        onChange={(e)=>dispatch({type:'PASSWORD',value:e.target.value})}
        /><br></br><br></br>
        <button className='btn-submit'>Submit</button>
    </form>
    }

</div>
);
}

export default LoginForm2;