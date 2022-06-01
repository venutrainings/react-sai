import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Checkout from './components/Checkout';
import Login from './components/Login';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
        <Route path ='/login' element={<Login />} />
      </Routes>

    </BrowserRouter>
      

      
    </div>
  );
}

export default App;