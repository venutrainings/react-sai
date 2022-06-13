import { Component } from "react";
import A from "./A";


class Users extends Component{
   componentWillUnmount(){
    alert('Deleted users successfully unmounted user data here');
   }
    render(){
  
        return(
            <div>
                <h4>this is component will unmount </h4>
                <h4>USER NAME : SAI KUMAR</h4>
                <h4>E-Mail: saikumar@gmail.com</h4>
            </div>
        )
    }
}
export default Users;