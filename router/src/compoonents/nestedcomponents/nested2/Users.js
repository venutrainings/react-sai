import React from 'react';
import {Outlet, useNavigate} from 'react-router-dom';

function UsersList({users}) {

    const navigate=useNavigate();
  return (
    <div className='userslist'>
        <h1 className='header'>Nested Routers in this we are display the child routers of userlist and admin component</h1>
        <h2 className='header'>Child component : UserDeatials Component</h2>
        
        <button onClick={()=>{
                                 navigate('/userslist/saikumar')
                            }}>USERS</button>

<h2 className='header'>Child component : ADMIN Component</h2>

        <button onClick={()=>{
                            navigate('/userslist/admin')
                        }}>Admin </button>
          <div>
            <h2>state values:</h2>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>AGE</th>

                </tr>
              </thead>
              <tbody>
                {
                    users.map(user=>{
                      return <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>

                        <td>{user.age}</td>

                      </tr>
                    })
                }
              </tbody>
            </table>
            
              
          </div>

        <Outlet />
    </div>
  )
}

export default UsersList;