import React from 'react';
import './App.css';
import CountDownTimer from './components/CountDownTimer';
import CountDownTimer2 from './components/CountDownTimer2';
import CountDownTimer3 from './components/CountDownTimer3';
import DataFetching from './components/DataFetching';
import DataFetching2 from './components/Datafetching2';
import Example2 from './components/Example2';
import Example3 from './components/Example3';
import LoginForm1 from './components/LoginForm1';
import LoginForm2 from './components/LoginForm2';

function App() {
  return(
    <div className='App'>
      <CountDownTimer />
       <CountDownTimer2 /> 
    <CountDownTimer3 />
    <Example3 /><br></br>
      <hr></hr>
      <Example2 /><br></br> 
     <hr></hr>
      <LoginForm1 /><br></br>
      <hr></hr>
      <LoginForm2 />
      <hr></hr>
      <DataFetching />
      <DataFetching2 />
    </div>
  );
}

export default App;
