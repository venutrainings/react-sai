import axios from 'axios';
import React,{useReducer,useEffect} from 'react'

const InitialState={
    loading:true,
    post:{},
    error:''
};
const reducer=(state,action)=>{
    switch(action.type){
        case 'FETCH_SUCCESS':
            return {
                loading:false,
                post:action.payload,
                error:''
            }
        case 'FETCH_FAILURE':
            return {
                loading:false,
                post:{},
                error:'Something went wrong this code please try again'
            }
        default:
            return state;
    };

}
function DataFetching() {
    const [state,dispatch]=useReducer(reducer,InitialState);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/comments/3')
        .then(response=>
 
            dispatch({type:'FETCH_SUCCESS',payload:response.data}))
        .catch(error=>
            dispatch({type:'FETCH_FAILURE'}))
        },[]) 

  return (
   <div className='post-container'>
       <h1>Fetching Data for  particular id :</h1>
                <h4 className='post-header'>ID: <span className='post'>{state.loading ? 'LOADING' : state.post.id}</span></h4>
                <h4 className='post-header2'>NAME: <span className='post'>{state.loading ? 'LOADING' : state.post.name}</span></h4>
                <h4 className='post-header2'>EMAIL: <span className='post'>{state.loading ? 'LOADING' : state.post.email}</span></h4>
                <h4 className='post-header2'>BODY: <span className='post'>{state.loading ? 'LOADING' : state.post.body}</span></h4>
                <p>{state.error ? state.error:null}</p>
   </div>
  )
}

export default DataFetching;