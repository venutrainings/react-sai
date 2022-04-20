import React from 'react';
import './registration.css'

class Registration extends React.Component{
    constructor(){
        super();
        this.state={
            "regData":{}
        }
        this.fnReg=this.fnReg;
        this.fnChange=this.fnChange;
      }
       fnReg=()=>{
        alert('Done')
        console.log(this.state.regData);
      }
      fnChange=(e)=>{
          e.preventDefault();
          this.setState({
              "regData":{
                ...this.state.regData,
              [e.target.id]:e.target.type=="checkbox" ? e.target.checked:e.target.value
              }
          })
         
      }

    render(){
        return(
            <div className='container'>
                <h2 className="header">Registration Form</h2>
                <form className="form">
                <div>
                    <label>Username:<input type="text" id="username" onChange={this.fnChange}  /></label>
                </div>
                <div>
                    Email:<br></br><input type="email" id="email" onChange={this.fnChange} />
                </div>
                <div>
                    Password:<input type="password" id="password" onChange={this.fnChange} />
                </div>
                <div id="isgender">
                   <label className="gender">
                        Gender:<input type="radio" id="isgenMale" value="M" name="gender" onChange={this.fnChange} />Male<input type="radio" id="isgenFemale" value="F" name="gender" onChange={this.fnChange} />Female
                   </label>
                </div>
                <div className="hob">
                    Hobbies:<input type="checkbox" id="isCricket" onChange={this.fnChange} />Cricket<input type="checkbox" id="isHoc" onChange={this.fnChange} />Hockey
                </div>
                <div className="cou">
                    Countries:
                    <select id="country" onChange={this.fnChange} >
                        <option value="1">India</option>
                        <option value="2">Pakistan</option>
                        <option value="3">USA</option>
                        </select>
                </div>
                <div>
                    Address:<textarea id="address" onChange={this.fnChange}></textarea>
                </div>
                <div>
                    Upload:<input id="photo" type="file" onChange={this.fnChange} />
                </div>
            </form>
            <div id="btn">
                <input type="button" value="Submit" onClick={this.fnReg} />
            </div>
            </div>
        )
    }
}

export default Registration