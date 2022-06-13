
import './App.css';
import { Component } from 'react';
import ComponentA from './components/CompA';
class App extends Component{
 constructor(){
  super();
  this.state={
    name:'saikumar'
  }
 }
 render(){
  return(
    <div className='App'>
    <ComponentA name={this.state.name} />
    </div>
  )
 }
}

export default App;
