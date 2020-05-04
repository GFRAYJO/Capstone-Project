import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import BackButton from '../../shared/components/backButton';
import API from '../../shared/utils/api';
import "./style.scss";

const api  =  new API();

class MedProvider extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            medprovider: [],
                id: '',
                firstname: '',
                lastname: '',
                specialty: '',
                description: ''
            };
    }

    //This API call fetches a list of results
    componentDidMount() {
        var self = this;
        api.getMDResults().then(function (result) {
            self.setState({firstname: result.data,
                           lastname: result.data,
                           specialty: result.data,
                           description: result.data})
        });
    }

   /*  getMDResults = () => {
        if (md.medprovider) {
            API.getMDResults(md.medprovider)
                .then(res => {
                    this.setState({
                        results: {
                            firstname: res.data[0].firstname,
                            lastname: res.data[0].lastname,
                            specialty: res.data[0].specialty,
                            description: res.data[0].desc,
                            address: res.data[0].address,
                            city: res.data[0].city,
                            state: res.data[0].state,
                            zip: res.data[0].zip,
                            phone: res.data[0].phone,
                            url: res.data[0].url,
                        }
                    })
                    console.log(md)
                })
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
    }; */
    
  render() {
  return (
    <Router>
    <div className="row">
        <div className="col-2 home_button">
            <BackButton />
        </div>   
        <ul className="nav nav-pills med-pills mr-4">
                <li className="nav-item">
                    <a className="nav-link btn btn-light rounded-pill mr-4" 
                    href="/chcs">Search Community Health Centers</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link btn btn-light rounded-pill mr-4" 
                    href="/bh_providers">Search BH/Mental Health Providers</a>
                </li>
        </ul>
    </div>
   <div className="row med_img">
        <img className="col-1" src="MedProvider1.png" role="img" alt="medical provider search" 
        height="70px" width="90px"/>
            <h4 className="mr-5">Medical Providers</h4>
    </div> 
    <div className="row resultstable">
        <div className="container">
        <table className="table table-hover">
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
            {this.state.medprovider.map( md  =>
            <tr>
                <th>{md.lastname.data[0]}</th>
                <th>{md.firstname.data[0]}</th>
                <th>{md.specialty.data[0]}</th>
                <th>{md.description.data[0]}</th>
                <th>{this.state.address}</th>
                <th>{this.state.city}</th>
                <th>{this.state.state}</th>
                <th>{this.state.zip}</th>
                <th>{this.state.phone}</th>
                <th>{this.state.url}</th>
            </tr>)}
        </tbody>
            </table>
        </div>
    </div>
    </Router>
  );
}
}


export default MedProvider;