
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import CreatePost from './components/createPost';
import UserPost from './components/userPost';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <h2>How to fetch Post And Edit</h2>
      <Header></Header>
        <Routes>
          <Route path='/userpost' element={<UserPost />} />
          <Route path='/createpost' element={<CreatePost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
