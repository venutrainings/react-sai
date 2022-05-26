import { Component } from "react";

class Table extends Component{
    constructor(props){
        super(props);
        this.state={
            users:[],
            isLoggedIn:false,
            isError:false
        }
    }
    tableHeader(){
        return Object.keys(this.state.users[0]).map((val,index)=>{
                return <th key={index}>
                    {val.toUpperCase()}
                </th>
        })
    }
    tableBody(){
        return this.state.users.map((user,index)=>{
            return <tr key={index}> 
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                        {`${user.address.street},${user.address.city}`}
                    </td>
                    <td>{user.phone}</td>
                    <td>{user.website}</td>
                    <td>{user.company.name},{user.company.bs}</td>
            </tr>
        })
    }
    async componentDidMount(){
        this.setState({
            isLoggedIn:true
        });
        const response =await fetch('https://jsonplaceholder.typicode.com/users');
           //console.log(response.json())
        if(response.ok){
            const users=await response.json();
            console.log(users);
           this.setState({
                users,
                isLoggedIn:false
            })
        } else{
            this.setState({
                isError:true,
                isLoggedIn:false
            })
        }
    
    }
    render(){
        const {users,isLoggedIn,isError}=this.state;
        if(isLoggedIn){
            return <div>Loading....</div>
        }
        if(isError)
        return <div>Error.....</div>
        return(
            <div>
                <h2 className="header">How to display the user details here</h2>
                {users.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            {this.tableHeader()}
                        </tr>
                    </thead>
                    <tbody>
                        {this.tableBody()}
                    </tbody>
                </table>
                ):
                (<div>No users</div>)
                }
                
            </div>
        );
    }
}
export default Table;