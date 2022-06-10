import React from 'react';


function MovieList({movies, hadleFavourite,AddFavourites,RemoveFavourites,}) {
  return (
    
        <>
        {
            movies.map((movie,index)=>{
                return <div className='image-container d-flex justify-content-start m-3' key={index}>
                        <img src={movie.Poster} alt='movieposter' />

                        <div 
                            className='overlay d-flex align-items-center justify-content-center'
                            onClick={()=>hadleFavourite(movie)}>
                             <AddFavourites />
                             {/* <RemoveFavourites />  */}
                        </div>
                        
                </div>
            })
        }
        </>
    
  )
}

export default MovieList