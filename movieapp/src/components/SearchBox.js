import React from 'react'

function SearchBox({searchValue,setSearchValue}) {
  return (
    <div className='col col-sm-4'>
        <input 
        className='form-control'
         value={searchValue}
         type='text'
         placeholder='Type to search movies here'
         onChange={(e)=> setSearchValue(e.target.value)}
        />

    </div>
  )
}

export default SearchBox