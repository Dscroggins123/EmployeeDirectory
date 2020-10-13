import React, { Component } from "react";
import API from "../utils/API";
import Table from "react-bootstrap/Table";
import "../styles/Employees.css";

class Employees extends Component {
  state = {
    employees: [],
    search: "",
    filtered:[],
    input:""
  };

  getUsers = () => {
    API.getEmployees().then(res => this.setState({employees: res.data.results}));
  };
  
  filteremployees = e =>{
    const value = e.target.value
    this.setState({input:value})
    console.log(value)
    let filteredEmployees
    if (value !== "") {
    filteredEmployees = this.state.employees.filter(user => {
      return user.name.first.toLowerCase().includes(value.toLowerCase())
      
    });
    this.setState({filtered: filteredEmployees })
    
   }
   }
   sortemployees = () => {
    const sortedEmployees = this.state.employees.sort((a,b)=>{
      if(a.name.first < b.name.first){
        return -1
      } else if (a.name.first > b.name.first){
        return 1
      }else {
        return 0
      }
    })
    this.setState({employees:sortedEmployees})

   }
   
  
  
  
  componentDidMount() {
    this.getUsers();
  };

  render() {
      console.log(this.state.filtered)
    return (
      <div className="container">
          <input 
          type="text" 
          className="input" 
          placeholder="Search"
          onChange={this.filteremployees}
          
          />
        
        <Table striped bordered hover className="Table">
          <thead>
            <tr>

              <th>Photo</th>
              <th onClick={this.sortemployees}>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
          {this.state.input !== "" ? this.state.filtered.map((femployees)=>
          
            <tr>
             <td><img src={femployees.picture.thumbnail} alt="employee"></img></td>
              <td>{femployees.name.first + " " + femployees.name.last }</td>
              <td><a href={"mailto:" + femployees.email} style={{color: "maroon"}} >{femployees.email}</a></td>
              <td>{femployees.phone}</td>
          <td>{femployees.location.city + ", "+ femployees.location.state}</td>
              
            </tr>) :this.state.employees.map((allemployees)=>
          // filter this.state.employees if there is a input in the inputfield
            <tr>
             <td><img src={allemployees.picture.thumbnail} alt="employee"></img></td>
              <td>{allemployees.name.first + " " + allemployees.name.last }</td>
              <td><a href={"mailto:" + allemployees.email} style={{color: "maroon"}} >{allemployees.email}</a></td>
              <td>{allemployees.phone}</td>
          <td>{allemployees.location.city + ", "+ allemployees.location.state}</td>
              
            </tr>)}
          
            
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Employees;

