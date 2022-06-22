
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Secret from './components/Secret';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (

 <BrowserRouter>
    <Routes>
      <Route path='/' element={<Secret />} />
      <Route path='/register' element={<RegisterForm />} />
      <Route path='/login' element={<LoginForm />} />
    </Routes>
 </BrowserRouter>

  );
}

export default App;
