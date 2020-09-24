import React, { Component } from "react";
import API from "../utils/API";
import Table from "react-bootstrap/Table";
import "../styles/Employees.css";

class Employees extends Component {
  state = {
    employees: [],
    search: "",
  };

  getUsers = () => {
    API.getEmployees().then(res => this.setState({employees: res.data.results}));
  };
  filteremployees = e =>{
    const value = e.target.value
    const filteredEmployees = this.state.employees.filter(user => {
      return user.name.first.includes(value)
      
    });
    console.log(filteredEmployees)
    return filteredEmployees

  }
  
  
  
  componentDidMount() {
    this.getUsers();
  };

  render() {
      console.log(this.state.employees)
      
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
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
          {this.state.employees.map((allemployees)=>
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
// {
  /* <h1>Search By Breed!</h1> */
// }
//       <form>
//       <div className="form-group">
//         <label htmlFor="search">Breed Name:</label>
//         <input
//           value={this.state.search}
//           name="search"
//           type="text"
//           onChange={this.handleInputChange}
//           className="form-control"
//           placeholder="Search for a Breed"
//           id="search"
//           list= "breedsList"

//         />
//         <datalist id="breedsList">
//           {this.state.breedsList.map((names)=>
//           <option value={names} key={names}/>)}

//         </datalist>
//         <button onClick={this.dogSearch} type="submit" className="btn btn-light mt-3">
//           Search
//         </button>
//         <div className="col-md-12" >{this.state.results.map((dogs)=>(
//           <ul style={{listStyle: "none"}}>
//           <li><img src={dogs} alt="" height="400px" width="400px"/> </li>
//           </ul>
//         ))}
//         </div>

//       </div>
//     </form>
