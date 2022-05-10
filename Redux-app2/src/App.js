
import './App.css';
import Header from './containers/Header';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import PoductLists from './containers/productLists';
import ProductDetails from './containers/productDetails';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<PoductLists />} />
        <Route path='/product/:productId'  element={<ProductDetails />} />
        <Route> 4040 Not Found</Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
