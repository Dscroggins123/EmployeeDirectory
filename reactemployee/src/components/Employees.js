import React, { Component } from "react";
import API from "../utils/API";
import Table from "react-bootstrap/Table";

class Employees extends Component {
  state = {
    employees: [],
    search: "",
  };

  getUsers = () => {
    API.getEmployees().then(res => this.setState({employees: res.data.results}));
  };
  componentDidMount() {
    this.getUsers();
  }
l
  render() {
      console.log(this.state.employees)
      
    return (
      <div className="container">
        <Table striped bordered hover>
          <thead>
            <tr>

             
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
          {this.state.employees.map((allemployees)=>
          
            <tr>
             
              <td>{allemployees.name.first}</td>
              <td>{allemployees.name.last}</td>
              <td>{allemployees.email}</td>
              <td>{allemployees.phone}</td>
              
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
