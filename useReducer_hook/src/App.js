import React from 'react';
import './App.css';
import DataFetching from './components/DataFetching';
import DataFetching2 from './components/Datafetching2';
import Example2 from './components/Example2';
import Example3 from './components/Example3';

function App() {
  return(
    <div className='App'>
      {/* <Example3 /><br></br>
      <hr></hr>
      <Example2 /><br></br> */}
      <DataFetching />
      <DataFetching2 />
    </div>
  );
}

export default App;
