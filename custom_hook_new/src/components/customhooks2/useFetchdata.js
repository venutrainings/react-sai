import React, { useEffect, useState } from 'react';
import* as appConstatns from '../utils/Constants';

function useFetchdata(path) {
    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(null);
    const [error,setError]=useState(null);
    
    useEffect(()=>{
        setError(appConstatns.LoadingMessage);
        fetch(appConstatns.ApiURL+path,appConstatns.Postoptions)
        .then((response)=>response.json())
        .then((data)=>{
            setLoading(false);
            setData(data);
            console.log(data)
        })
        .catch((err)=>{
            setLoading(false);
            setError(appConstatns.ApiError);
        })

    },[path])
  return (
    {data,loading,error}
  )
}

export default useFetchdata