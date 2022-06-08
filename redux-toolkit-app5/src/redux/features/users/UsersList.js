
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate,Link } from 'react-router-dom';


function UsersList() {
    const  users=useSelector((store)=>store.users);
 

    // const navigate=useNavigate()
    // const users=[
    //     {id:1,name:"saikumar",email:"saikumar@gmail.com"},
    //     {id:2,name:"pusam",email:"pusam@gmail.com"},
    // ]
  return (
    <div>
        <Link to='/adduser'> 
        <button>Add User</button>
        </Link>
        <div className='userlist'>
            {
                users.map((user)=>{
                    return <div key={user.id}>
                                <div className='user'>
                                    <h3>{user.name}</h3>
                                    <span>{user.email}</span>

                                    <div className='icons'>
                                        <Link to={`edituser/${user.id}`}><i class="fa-solid fa-pen"></i></Link>
                                        <i class="fa-regular fa-trash-can"></i>
                                    </div>
                                </div>
                                
                            </div>
                })
            }
        </div>
    </div>
  )
}

export default UsersList