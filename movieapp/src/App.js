
import { useEffect, useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';

function App() {
  const [movies,setMovies]=useState([]);
  const [searchValue,setSearchValue] = useState('');
  const [favourites,setFavourites] = useState([]);

  const saveToLocalStorage = (items) =>{
    localStorage.setItem('react-app-movie-favourites',items)
  }

  const hadleAddFavourite=(movie)=>{
    const newAddFavourite = [...favourites,movie];
    setFavourites(newAddFavourite);
    saveToLocalStorage(newAddFavourite);
  }

  

  const hadleRemoveFavourite=(movie)=>{
    const newRemoveFavourite=favourites.filter((favourite)=> favourite.omdbID !== movie.omdbID);
    setFavourites(newRemoveFavourite);
    saveToLocalStorage(newRemoveFavourite);
  }

  const getMoviesRequest = async (searchValue) =>{
const url=`http://www.omdbapi.com/?s=${searchValue}&apikey=883b0af1`;
 
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson)
 if(responseJson.Search){
   setMovies(responseJson.Search);
 }
  }
 useEffect(()=>{
   getMoviesRequest(searchValue)
 },[searchValue]);
  return (
   <div className='container-fluid movies-app' >
        <div className='row d-flex align-items-center mt-4 mb-4'>
            <MovieListHeading heading='Movies' />
            <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>

      <div className="row">
            <MovieList 
               movies={movies} 
                hadleFavourite={hadleAddFavourite}
                 AddFavourites={AddFavourites}
             />
      </div>
   
    <div className='row d-flex align-items-center mt-4 mb-4'>
            <MovieListHeading heading='Favourites' />
            
        </div>
        <div className="row">
            <MovieList 
               movies={favourites} 
               hadleFavourite = {hadleRemoveFavourite}
               RemoveFavourites={RemoveFavourites}

            />
      </div> 
  </div>
  );
}

export default App;
