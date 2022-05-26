import React, { lazy, Suspense } from 'react';
import {useNavigate} from 'react-router-dom';
 import Table from './tableapidata/Table';
// const Table = lazy(()=>import('./tableapidata/Table'))

function Home() {
  const navigate=useNavigate();
  return (
    <div className="home">
       <h1>HOME </h1>
       <h2>Now your are in Home Page</h2>
        <h4>Let's start learning About React router </h4>
        <p>React is a JavaScript-based UI development library. Facebook and an open-source developer community run it. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web developmen</p>
    <div>
    <button className='btn-back' onClick={()=>{
            navigate(-1)
    }}>Back</button>
       <button className='btn-next' onClick={()=>{
         navigate(+1)
    }}>Next</button> 
    </div>
    <div>
      <Suspense fallback={<h1>loading</h1>}>
        <Table></Table>
      </Suspense>
    </div>
    </div>
  )
}

export default Home