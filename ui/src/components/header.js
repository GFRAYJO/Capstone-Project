import React, { Component } from 'react';

class Header extends Component {
  render() {
  return (
    <nav className="header d-flex justify-content-between">
            <a href="/">
            <img src="Logo1.png" role="img" alt="logo" height="100px" width="100px"/>        
            </a>
    <div className="col hrc"><h2>Healthcare Resource Finder</h2></div>
        <ul className="nav nav-pills">
            <li className="nav-item">
                <a className="nav-link btn btn-light rounded-pill mr-2" href="about">About Us</a>
            </li>
            <li className="nav-item">
                <a className="nav-link btn btn-light rounded-pill mr-2" href="/">Home</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle btn btn-light rounded-pill mr-2" data-toggle="dropdown" href="#" role="button" aria-haspopup="menu" 
                   aria-pressed="false" aria-expanded="false">Search</a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="medical_providers" aria-pressed="false">Medical Providers</a>
                    <a className="dropdown-item" href="chcs" aria-pressed="false">Community Health Centers</a>
                    <a className="dropdown-item" href="bh_providers" aria-pressed="false">Behavioral/Mental Health Providers</a>
                    <a className="dropdown-item" href="hospitals" aria-pressed="false">Hospitals</a>
                </div>
          </li>
            <li className="nav-item">
                <a className="nav-link btn btn-light rounded-pill mr-2" href="contact">Contact Us</a>
            </li>
        </ul>
    </nav>
  );
}
}

export default Header;