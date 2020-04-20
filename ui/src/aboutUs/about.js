import React, { Component } from 'react';
import "./style.scss"

class AboutUs extends Component {
  render() {
  return (
    <div className="row mission">
        <div className="col">
        <h3>
          Mission Statement
        </h3>
        <p>
          Our mission is to provide the community with a one-stop shop to locate all their healthcare needs.
        </p>
        <h3>
          Vision Statement
        </h3>
        <p>
          Our vision is to provide our community with the ease and access to quality healthcare for those of all walks of life.
        </p>
    </div>
    <div className="row about_us">
        <div className="col offset-1">
        <h3>
          About Us and Our Services
        </h3>
        <p>
          Our goal is to assist the community with finding the ideal match to their healthcare needs even through their most difficult times.  
          Not knowing where to start or where to look can be the most challenging part of today's healthcare.  The Healthcare Resource Finder
          was developed to help you navigate the system to help you locate all services for all of your various needs.  Our site is intended
          to help ease the burden of having to search multiple websites to find the right fit for your physical, mental, and emotional needs.   
        </p>
        <p>
          <ul className="serviceslist">
            <li>
              Primary Care Services - (Family Medicine, Internal Medicine, Pediatrics)
            </li>
            <li>
              Specialty Services - (Cardiology, Gastroenterology, Neurology, and more...)
            </li>
            <li>
              Community Health Centers - (Family Medicine, Internal Medicine, Pediatrics, BH Services, Lab, Radidology, and more...)
            </li>
            <li>
              Behavioral/Mental Health Services - (Case Management, Psychology, Psychiatry, Group therapy, and more...)
            </li>
            <li>
              and Hospitals 
            </li>
          </ul>
        </p>
        </div>
        <div className="col">
          <img src="hrc_serv.png" role="img" alt="healthcare providers" height="375" width="500px"/>
        </div>
    </div>
    </div>
  );
}
}

export default AboutUs;