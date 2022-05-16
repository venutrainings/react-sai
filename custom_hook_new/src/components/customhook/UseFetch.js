import React, { useEffect, useState } from 'react';
import* as appConstatns from '../utils/Constants';

function UseFetch(path) {
    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(null);
    const [error,setError]=useState(null);
    
      useEffect(()=>{
          setLoading(appConstatns.LoadingMessage)
        fetch(appConstatns.ApiURL+path)
        .then((response)=>response.json()
        )
        .then((data)=>{
            setLoading(false);
            setData(data);
            
        })
        .catch((error)=>{
            setLoading(false);
            setError(appConstatns.ApiError);
            
        })
      },[path])
  return (
   {data,loading,error}
  )
}

export default UseFetch;