import React, { Component } from 'react'


class ComponentA extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"SAI KUMAR"
        }
    }
    componentDidMount(){
        setTimeout(()=>{
   this.fnChange()
        },5000)
    }

    //set interval time

    // componentDidMount(){
    //   const interval=setInterval(()=>{
    //   this.setState({
    //     name:'saikumar mounted'
    //   })
    //          },2000)
    // }
    
     fnChange=()=>{
        this.setState({
            name:'KUSUMANAPALLY '
        })
     }
     static getDerivedStateFromProps(state,props){
        console.log(props);
            return {name :props.name}
     }  
     getSnapshotBeforeUpdate(prevState,prevProps){
        document.getElementById('div2').innerHTML="previous props: " + prevProps.name + " previous state: "
        + prevState.name
     }
     componentDidUpdate(){
        document.getElementById('div1').innerHTML="update mounted " + this.state.name;
     }

    componentWillUnmount(){
        alert('unmount')
    // clearInterval( this.fnChange())
    // clearInterval(this.change())
    //  clearInterval(this.interval())
  }
     change=()=>{
        this.setState({
            name:'welcome'
        })
     }
    render(){ 
     
        return(
             
            <div>
                <button onClick={this.change}>change</button>
                <button onClick={this.fnChange}>ChangeName</button>
                <h2>Life Cycle Methods</h2>
                <h3>state value:  {this.state.name}</h3>
                 <h4>props value: {this.props.name}</h4> 
                 <div id='div1'></div>
                 <div id='div2'></div>
              
            </div>
        )
    }
}
export default ComponentA;