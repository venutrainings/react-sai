import React from 'react'

function MovieList({movies}) {
  return (
    <div>
        <>
        {
            movies.map((movie,index)=>{
                return <div key={index}>
                    <h4>{movie.Title}</h4>
                    <img src={movie.Poster} />
                </div>
            })
        }
        </>
    </div>
  )
}

export default MovieList