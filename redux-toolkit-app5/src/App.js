
import { Route,Routes } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import UsersList from './redux/features/users/UsersList';

function App() {
  return (
    <div className="App">
  
     <h2>CRUD OPERATIONS WITH REDUX TOOLKIT WITH INPUT DATA</h2>
     <Routes>
     <Route path='/' element={<UsersList />}  />
     <Route path='/adduser' element={<AddUser />}  />
     <Route path='/edituser/:id' element={<EditUser />}  />
     </Routes>
   
    </div>
  );
}

export default App;
