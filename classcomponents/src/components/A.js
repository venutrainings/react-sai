import { Component } from "react";
import Users from "./B";



class A extends Component{
    constructor(props){
        super(props);
        this.state={
            delete:false
        }
    }
    render(){

        return(
            <div>
                <h2>componentwillunmount  is the method its remove space from DOM elements</h2>
               <button
               onClick={()=> this.setState({
                delete:true
               })}
               
               >Delete Users</button>
               {
                this.state.delete ? null : <Users />
               }
            </div>
        )
    }
}
export default A;