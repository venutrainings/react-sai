
import './App.css';
import Navbar from './Navbar';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashbord';
import About from './pages/About';
import PageNotFound from './pages/PageNotFound';
import Footer from './Footer';

function App() {
  return (
    <div className='container'>
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/about' element={<About />} />
       <Route path='/*' element={<PageNotFound/>} /> 

      </Routes>
      </Router>
      <hr></hr>
      <Footer />
    </div>
  );
}

export default App;
