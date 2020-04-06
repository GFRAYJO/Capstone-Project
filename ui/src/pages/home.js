import React, { Component } from 'react';

class Home extends Component {
  render() {
  return (
    <div className="row search_cat offset">
        <h2 briefDesc>What Provider or Services would you like to search today?</h2>
        <a className="mr-5" href="/medical_providers">
            <img src="MedProvider1.png" role="img" alt="medical provider search" height="100px" width="100px"/>
            <p>
                Medical Providers
            </p>
        </a>
        <a className="mr-5" href="/chcs">
            <img src="CHC1.png" role="img" alt="community health center search" height="100px" width="100px"/>
            <p>
                Community Health Centers
            </p>
        </a>
        <a className="mr-4" href="/bh_providers">
            <img src="BHProvider1.png" role="img" alt="bh provider search" height="100px" width="100px"/>
            <p>
                Behavioral/Mental Health Providers
            </p>
        </a>
        <a className="mr-2" href="/hospitals">
            <img src="Hospital1.png" role="img" alt="hospital search" height="100px" width="100px"/>
            <p>
                Hospitals
            </p>
        </a>
    </div>
  );
}
}

export default Home;