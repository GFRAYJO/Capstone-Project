import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import BackButton from '../../shared/components/backButton';
import Cities from '../../shared/components/cities';
import Zip from '../../shared/components/zip';
import Specialty from '../../shared/components/specialty';
import Results from '../../shared/components/results';
import "./style.scss";

class MedProvider extends Component {
  render() {
  return (
    <Router>
    <div className="row">
        <div className="col-2 home_button">
            <BackButton />
        </div>   
        <ul className="nav nav-pills med-pills">
                <li className="nav-item">
                    <a className="nav-link btn btn-light rounded-pill mr-2" href="/chcs">Search Community Health Centers</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link btn btn-light rounded-pill mr-2" href="/bh_providers">Search BH/Mental Health Providers</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link btn btn-light rounded-pill mr-2" href="/hospitals">Search Hospitals</a>
                </li>
        </ul>
    </div>
    <div className="row med_img">
        <img className="col-1" src="MedProvider1.png" role="img" alt="medical provider search" height="70px" width="90px"/>
            <h4 className="mr-5">Medical Providers</h4>
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

export default MedProvider;