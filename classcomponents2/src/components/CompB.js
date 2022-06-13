import React, { Component } from 'react';
import ComponentA from './CompA';

class ComponentB extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:'PUSAM'
        }
    }
 
  
    render(){
        return(
            <div>
                <h4>{this.state.name}</h4>
                <ComponentA name = {this.state.name} />
            </div>
        )
    }
}
export default ComponentB;