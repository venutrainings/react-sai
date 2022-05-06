import React, { useEffect,useState } from 'react';

function Sample1CustomHook() {
    const [data,setData]=useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>
            res.json()
        )
        
        .then((data)=>{
            console.log(data);
            setData(data);
        })
      
    },[])
  return (
    <div>
        <h2>Fetching json data using custom hooks with useState,useEffect</h2>
        {
            data.length > 0 ? 
            (<table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>USER NAME</th>
                        <th>E-MAIL</th>
                        <th>PHONE-NUMBER</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((value,index)=>{
                            return <tr key={index}>
                                <td>{value.id}</td>
                                <td>{value.username}</td>
                                <td>{value.email}</td>
                                <td>{value.phone}</td>
                            </tr>
                        }
                         
                        )
                    }
                </tbody>
            </table>) 
            
            : <h1>No data found here....</h1>
        }
    </div>
  )
}

export default Sample1CustomHook;