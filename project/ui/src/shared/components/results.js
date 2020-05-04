import React, { Component } from 'react';
import API from '../utils/api';

class Results extends Component {
    constructor(props) {
        super(props);
        var rows = [];
            for (let i = 0; i < rows; i++) {
                this.state = {
                    results: {
                        facilityname: " ",
                        firstname: " ",
                        lastname: " ",
                        specialty: " ",
                        desc: " ",
                        address: " ", 
                        city: " ",
                        state: " ",
                        zip: " ",
                        phone: " ",
                        url: " "
                    }
                };
            rows.push(<Results key={i} />);
        }
    }

    handleChange(event) {
        this.setState({location: event.target.results});
      }

    componentDidMount() {
        this.getMDResults();
    };

   //This API call fetches a list of results
    getMDResults = () => {
        if (this.state.results) {
            API.getMDResults(this.state.results)
                .then(res => {
                    this.setState({
                        results: {
                            facilityname: res.data[0].facilityname,
                            firstname: res.data[0].firstname,
                            lastname: res.data[0].lastname,
                            specialty: res.data[0].specialty,
                            desc: res.data[0].desc,
                            address: res.data[0].address,
                            city: res.data[0].city,
                            state: res.data[0].state,
                            zip: res.data[0].zip,
                            phone: res.data[0].phone,
                            url: res.data[0].url,
                        }
                    })
                    console.log(this.state)
                }
                )
                .catch(() =>
                    this.setState({
                        results: {},
                        message: "Results found"
                    })
                );
            }
        else {
            console.log("No Match found")
        }
    }; 

    render() {
    return (
      <div className="row">
      <table className="table table-hover resultstable">
        <thead>
            <tr className="col-list-group list-group-horizontal-lg resultsheader">
                <th scope="col" id="facilityname">Facility Name</th>
                <th scope="col" id="lastname">Last Name</th>
                <th scope="col" id="firstname">First Name</th>
                <th scope="col" id="spec">Specialty</th>
                <th scope="col" id="desc">Description</th>
                <th scope="col" id="address">Address</th>
                <th scope="col" id="city">City</th>
                <th scope="col" id="state">State</th>
                <th scope="col" id="zip">Zip</th>
                <th scope="col" id="phone">Phone</th>
                <th scope="col" id="url">Url</th>
            </tr>
        </thead>
        <tbody>
            <tr className="resultsgrid" For="let i = 0; i < rows; i++">
                <th>{this.state.facilityname}</th>
                <th>{this.state.lastname}</th>
                <th>{this.state.firstame}</th>
                <th>{this.state.specialty}</th>
                <th>{this.state.desc}</th>
                <th>{this.state.address}</th>
                <th>{this.state.city}</th>
                <th>{this.state.state}</th>
                <th>{this.state.zip}</th>
                <th>{this.state.phone}</th>
                <th>{this.state.url}</th>
            </tr>
        </tbody>
      </table>
      </div> 
    );
  }
  }
  
  export default Results;
