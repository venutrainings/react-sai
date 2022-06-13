import A from './components/A';
import './App.css';
import B from './components/B.js'
import { Component } from 'react';
import Fetch from './components/Fetch';

class App extends Component{
  render(){
    return(
      <div className="App">
      <h1>Life Cycle Methods</h1>
     <Fetch />
     <A />
    </div>
    )
   
  }
}



export default App;
