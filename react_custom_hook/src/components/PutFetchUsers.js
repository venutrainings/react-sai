import React, { useState,useEffect } from 'react'

function PutFetchUsers() {
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [inputdata,setInputData]=useState({
      
        name:"",
        email:"",
        gender:"",
        status:""
    })
    const fetchData=(url)=>{
        fetch(url)
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            setLoading(false);
            setData(data);
        })
    }
  useEffect(()=>{
      fetchData('https://gorest.co.in/public/v2/users/')
  },[])
    
    const handleSubmitNow=(url, inputdata)=>{
                let options={
                    method:'PUT',
                    body:JSON.stringify(inputdata),
                    headers:{
                        'Content-type':'application/json',
                        Accept:'application/json',
                        AuthoriZation:'Bearer 976f9d976a54effb7542419bf7fd698fd6e349ea8b283c7f2e19819bf87e1a36'
                    }
                }
                fetch(url,options);
                console.log(inputdata)
            }
const handleSubmit=(e)=>{
    e.preventDefault();
    handleSubmitNow();
}

    handleSubmitNow('https://gorest.co.in/public/v2/users/3145',inputdata);
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-4">
            <div className='input-container'>
                <h2 className='header'>Access the input data here:</h2>
               <form onSubmit={handleSubmit} className='form-control'>
                   
                    <label id='name'>NAME: </label>
                    <input type="text" name="name" onChange={(e)=>setInputData({...inputdata,name:e.target.value})}/>
                    <label id='email'>E-mail: </label>
                    <input type="email" name="email" onChange={(e)=>setInputData({...inputdata,email:e.target.value})}/>
                    <label id='gender'>Gender: </label>
                    <input type="text" name="genger" onChange={(e)=>setInputData({...inputdata,gender:e.target.value})}/>
                    <label id='status'>Status: </label>
                    <input type="text" name="status" onChange={(e)=>setInputData({...inputdata,status:e.target.value})}/>
                    <input type='submit'value='Submit' className='btn' />
               </form>
            </div>
      </div>
      <div className="col-md-8">
        <div className='table-container'>
            <h2 className='header'>Get the Fetching Data here: </h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>E-MAIL</th>
                        <th>GENDER</th>
                        <th>STATUS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((val,index)=>{
                            return <tr key={index}>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.email}</td>
                                <td>{val.gender}</td>
                                 <td>{val.status}</td>
                                 </tr>
                        })
                    }
                </tbody>
            </table>

        </div>
      </div>
     
    </div>
  </div>
  )
}

export default PutFetchUsers;