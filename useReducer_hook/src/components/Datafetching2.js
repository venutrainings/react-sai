import axios from 'axios';
import React,{useReducer,useEffect} from 'react'

const InitialState={

    post:{},
  
};
const reducer=(state,action)=>{
    switch(action.type){
        case 'FETCH_SUCCESS':
            return {
          
                post:action.payload
            
            }
        case 'FETCH_FAILURE':
            return {
            
                post:{}
               
            }
        default:
            return state;
    };

}
function DataFetching2() {
    const [state,dispatch]=useReducer(reducer,InitialState);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/comments/')
        .then(response=>
 
            dispatch({type:'FETCH_SUCCESS',payload:response.data}))
        .catch(error=>
            dispatch({type:'FETCH_FAILURE'}))
        },[]) 

  return (
   <div className='post-container2'>
        <h1 className='header_post'>Fetching API Data using axios with useReducer Hook</h1>
        {
          state.post.length > 0 ? 
          (<table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>BODY</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.post.map((val,index)=>{
                            return <tr key={index}>
                                    <td>{val.id}</td>
                                    <td>{val.name}</td>
                                    <td>{val.email}</td>
                                    <td>{val.body}</td>
                            </tr>
                        })
                    }
                </tbody>
          </table>
          )
           : (<h1>No data found</h1>)
        }        
          
   </div>
  )
}

export default DataFetching2;


