import React from 'react';
import useFetch from './useFetch';


function Sample2customHook() {
    const [data]=useFetch('https://jsonplaceholder.typicode.com/users');
  return (
    <div className='bg-container'>
        
        <div className='table-contaier'>
            <h1>Fetching JSON data using useFetch its custom hook here</h1>
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
    </div>
  )
}

export default Sample2customHook;