import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import BackButton from '../../shared/components/backButton';
import Cities from '../../shared/components/cities';
import Zip from '../../shared/components/zip';
import Specialty from '../../shared/components/specialty';
import Results from '../../shared/components/results';
import "./style.scss";


class Hospital extends Component {
  render() {
  return (
    <Router>
    <div className="row">
        <div className="col-2 home_button">
            <BackButton />
        </div>   
        <ul className="nav nav-pills hosp-pills">
                <li className="nav-item">
                    <a className="nav-link btn btn-light rounded-pill mr-2" href="/medical_providers">Search Medical Providers</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link btn btn-light rounded-pill mr-2" href="/bh_providers">Search BH/Mental Health Providers</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link btn btn-light rounded-pill mr-2" href="/chcs">Search Community Health Centers</a>
                </li>
        </ul>
    </div>
    <div className="row hospital_img">
        <img className="col-1" src="hospital1.png" role="img" alt="hospital search" height="100px" width="200px"/>
            <h4 className="mr-5">Hospitals</h4>
        <div className="col-1 city mr-5">
            <Cities />
        </div>
        <div className="col-1 zip">
            <Zip />
        </div>  
        <div className="col-1 specialty">
            <Specialty />
        </div> 
    </div>
    <div className="row resultstable">
        <div className="container">
            <Results />
        </div>
    </div>
    </Router>
  );
}
}

export default Hospital;