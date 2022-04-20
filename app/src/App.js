import React, { useState } from 'react';
import Box2 from './components/box2/Box2';
import './App.css';
import Registration from './components/registration/Registration';


const App=()=>{
 
  return(
    <div>
      {/*<Box2 />  */} 
       <Registration />
    </div>
    
  )
}
export default App;
/*
class App extends React.Component{
  constructor(){
    super();
    this.state={
      "name1":"Sachin",
      "name2":"Dhoni"
    }
  }
  render(){
    return(
      <div>
        <h1>Share data from parent to child</h1>
        <Box name={this.state.name1} />
        <Box name={this.state.name2} />
      </div>
    )
  }
 
}
*/

