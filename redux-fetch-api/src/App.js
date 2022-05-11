
import './App.css';
import {connect } from "react-redux";
import {useEffect} from 'react';
import { fetchUsers } from './components/FetchData';


function App({userData,fetchUsers} ) {
  useEffect(()=>{
    fetchUsers();
  },[])
  return (
    userData.lodaing ? (<h2>loading..</h2>) : userData.error ? (<h2>{userData.error}</h2>) :  (<div>
      <h2>Fetching the json data using Redux </h2>
      <div className='table-container'>
        <>
          { userData.length > 0  ? (
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Username</th>
                 <th>E-mail</th>
                 <th>Phone</th>
                 <th>Address</th>
               </tr>
            </thead>
            <tbody>
              {
                userData.map((value,index)=>{
                  return  <tr key={index}>
                    <td>{value.id}</td>
                    <td>{value.name}</td>
                    <td>{value.username}</td>
                    <td>{value.email}</td>
                    <td>{value.phone}</td>
                    <td>{value.address.street}</td>

                  </tr>
                })
              }
            </tbody>
          </table>
          ) : (<h2>no data  found </h2>) }
        </>
      </div>
    </div>)
  );
}

const mapStateToProps=(state)=>{
  return {
    userData:state.users
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
      fetchUsers:()=>{
        dispatch(fetchUsers())
      }
  }
}
export default  connect(mapStateToProps,mapDispatchToProps)(App);
