import React, { Component } from 'react';

class Results extends Component {
    constructor(props) {
        super(props);
        var rows = [];
            for (var i = 0; i < rows; i++) {
                this.state = {
                    city: this.props.demoId,
                    location: {
                        demoId: " ",
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

    render() {
    return (
      <div className="row">
      <table className="table table-hover resultstable">
        <thead>
            <tr className="col-list-group list-group-horizontal-lg resultsheader">
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
            <tr className="resultsgrid" For="let i = index; i++">
                <th>{this.props.lastName}</th>
                <th>{this.props.firstName}</th>
                <th>{this.props.specialty}</th>
                <th>{this.props.desc}</th>
                <th>{this.props.address}</th>
                <th>{this.props.city}</th>
                <th>{this.props.state}</th>
                <th>{this.props.zip}</th>
                <th>{this.props.phone}</th>
                <th>{this.props.url}</th>
            </tr>
        </tbody>
      </table>
      </div> 
    );
  }
  }
  
  export default Results;
