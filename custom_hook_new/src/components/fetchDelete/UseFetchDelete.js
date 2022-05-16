import React,{useState,useEffect} from 'react';
import * as appConstatns from '../utils/Constants'

function UseFetchDelete(path) {
    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(null);
    const [error,setError]=useState(null);

    useEffect(() => {
        setLoading(appConstatns.LoadingMessage);
        fetch(appConstatns.ApiURL+path,appConstatns.Deleteoptions)
        .then((resposnse)=>resposnse.json())
        .then((data)=>{
            console.log(data);
            setLoading(false);
            setData(data);
        })
        .catch((error)=>{
            loading(false);
            setError(appConstatns.ApiError);
        })

    }, [path])
    


  return (
    {data,loading,error}
  )
}

export default UseFetchDelete