import axios from "axios";
export const deletecard=(id)=>{
    return {
        type:'DLETE_USER',
        id
    }
}
export const fetchUsers=()=>{
   return (dispatch)=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(({data})=>{
        
     return    dispatch({
            type:'FETCH_USER',payload:data
        })
    }
   )
   } 
}