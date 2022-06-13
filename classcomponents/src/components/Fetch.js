import { Component } from "react";

class Fetch extends Component{
    constructor(props){
        super(props);
        this.state={
            users:[]
        }
    

 }
    componentDidMount(){
        setInterval(()=>{
            fetch('https://jsonplaceholder.typicode.com/users').then((response)=>response.json())
            .then((res)=>{
                this.setState({
                    users:res
                })
            }
            )
        },1000)
    }
 
componentWillUnmount(){
  alert('unmount');
    // console.log('unmount')
}
  

    render(){
        return (
            <div>
                
             <h3>
                {
                    this.props.name
                }
             </h3>
                <h4>fething Api users data</h4>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>USER NAME</th>
                            <th>E-MAIL</th>
                            <th>PHONE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map((user,index)=>{
                                     return <tr key={index}>
                                        <td>{user.name}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                   </tr>
                          })
                        }
                        </tbody>
                  
                </table>
          
            </div>
            
               
               
            </div>
        )
    }
}

export default Fetch;