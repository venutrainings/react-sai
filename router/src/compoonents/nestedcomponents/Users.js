import React , { useEffect}from 'react';
import {connect} from 'react-redux';
import { fetchUsers } from '../redux/Action';

function Users({users,fetchUsers}) {
  useEffect(()=>{
    fetchUsers()
  })
  return (
    <div className='users'>
        {/* <h3 className='header'>Display the users data here:</h3>
      <p className='para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p> */}

<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>NAME</th>
      <th>E-MAIL</th>
      <th>phone</th>
    </tr>
  </thead>
  <tbody>
  {
  users.map((user)=>{
    return <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
    </tr>
  })
}
  </tbody>
</table>



    </div>
  )
}
const mapStateToProps=(state)=>{
return{
  users:state.fetchdata
}
}
const mapDispatchToProps=(dispatch)=>{
return {
  fetchUsers:()=>{
    dispatch(fetchUsers())
  }
}
}

export default connect(mapStateToProps,mapDispatchToProps)(Users);