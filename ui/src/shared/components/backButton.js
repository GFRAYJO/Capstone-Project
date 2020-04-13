import React, { Component } from 'react';


class BackButton extends Component {
  render() {
  return (
    <div className="row">
        <div className="col-2 home_button">
            <a href="/">
                <img src="back_home.png" role="img" alt="back to home" height="30px" width="80px"/>        
            </a>
        </div>   
    </div>
  );
}
}

export default BackButton;