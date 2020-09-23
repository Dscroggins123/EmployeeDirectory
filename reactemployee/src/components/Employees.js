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
  componentDidMount() {
    this.getUsers();
  }
l
  render() {
      console.log(this.state.employees)
      
    return (
      <div className="container">
          <input type="text" className="input" />
        
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
          
            <tr>
             <td><img src={allemployees.picture.thumbnail}></img></td>
              <td>{allemployees.name.first + " " + allemployees.name.last }</td>
              <td><a href={"mailto:" + allemployees.email}>{allemployees.email}</a></td>
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
