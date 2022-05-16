import React from 'react';
import * as appConstatns from '../utils/Constants'
import UseFetch from './UseFetch';
function Users() {
    const {data:Users,loading,error} = UseFetch(appConstatns.userPath);
  return (
    <div>
        { loading && <p>Loading..</p>}
        {Users !== null && (<table>
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
                    Users.map((user,index)=>{
                        return <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.status}</td>
                                </tr>
                    })
                }
            </tbody>
        </table>)}
        {error && <p>{error}</p>}
    </div>
  )
}

export default Users