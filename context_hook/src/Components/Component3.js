import React,{useContext} from 'react';
import Component4 from '../Component4';
import { fetchContext } from './Component1';
const Component3 = () => {
    const data=useContext(fetchContext);
  return (
    <div className='container'>
        {data.length > 0 ? (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>USER NAME</th>
                    <th>E-MAIL</th>
                    <th>ADDRESS</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((val,index)=>{
                    return <Component4 data={val} key={index} />


                        // return <tr key={index}>
                        //     <td>{val.id}</td>
                        //     <td>{val.name}</td>
                        //     <td>{val.username}</td>
                        //     <td>{val.email}</td>
                        //     <td>{val.address.street}</td>
                        // </tr>                                                                                                                                                       
                    })
                }
            </tbody>
        </table>
        )
         : (<div>No data Found</div>)}
    </div>
  )
}

export default Component3