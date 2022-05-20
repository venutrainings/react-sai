
import './App.css';
import Navbar from './compoonents/Navbar';
import { BrowserRouter,Routes,Route, Link, Outlet } from 'react-router-dom';
import Home from './compoonents/Home';
import About from './compoonents/About';
import Career from './compoonents/Career';
import Contact from './compoonents/Contact';
import NotFound from './compoonents/NotFound';
import Footer from './compoonents/Footer';
import Card from './compoonents/Card';

function App() {
  return (
  <BrowserRouter >
    <div className="App">
     <Navbar /> 
     
     </div>
     <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/about' element={<About/>} />
     <Route path='/contact' element={<Contact/>} /> 
     <Route path='/career' element={<Career />} />
     <Route path='/card/:user_name' element={<Card />} />
     <Route path='*' element={<NotFound />} />

     </Routes>
        <hr></hr>
      <div style={{textAlign:'center'}}><Footer /></div>
  </BrowserRouter>
  );
}

export default App;
