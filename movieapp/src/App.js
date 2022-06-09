
import { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [movies,setMovies]=useState([]);
  const [searchValue,setSearchValue] = useState('');
  
 
  return (
   <div className='container-fluid movies-app' >
        <div className='row d-flex align-items-center mt-4 mb-4'>
          <MovieListHeading heading='Movies' />
          <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>

      <div className="row">
        <MovieList movies={movies} />
      </div>
  </div>
  );
}

export default App;
