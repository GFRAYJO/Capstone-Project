import React, { Component } from 'react';
import API from '../shared/utils/api';
import "./style.scss";

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = [{firstname: ''},
                 {lastname: ''},
                 {email: ''},
                 {phone: ''},
                 {category: ''},
                 {comments: ''}];

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your request has been submitted');
    event.preventDefault();
  }

  //This API call submits a form request
  postForm = () => {
    if (this.state.form) {
        API.postForm(this.state.Id)
            .then(res => {
                this.setState({
                    form: {
                        firstname: res.data[0].firstname,
                        lastname: res.data[0].lastname,
                        email: res.data[0].email,
                        phone: res.data[0].phone,
                        category: res.data[0].category,
                        comments: res.data[0].comments, 
                    }
                })
                console.log(this.state)
            }
            )
            .catch(() =>
                this.setState({
                    city: {},
                    message: "Form submitted"
                })
            );
        }
    else {
        console.log("Empty form fields")
    }
};

  render() {
  return (
    <div className="row">
      <div className="container">
        <form action="/action_page.php" onSubmit={this.handleSubmit} method="post">
          <legend>Contact Us</legend>
          <div className="row">
            <div className="col-2 mr-4">
              <label>First Name:</label>
            </div>
            <div className="col-2">
              <label>Last Name:</label>
            </div>
          </div>
          <div className="row">
            <div className="col-2 mr-4">
              <input type="text" value={this.state.firstname} onChange={this.handleChange}/>
            </div>
            <div className="col-2">
              <input type="text" value={this.state.lastname} onChange={this.handleChange}/>
            </div>
          </div>
          <div className="row">
            <div className="col-2 mr-4">
              <label>Email:</label>
            </div>
            <div className="col-2">
              <label>Phone:</label>
            </div>
          </div>
          <div className="row">
            <div className="col-2 mr-4">
              <input type="text" value={this.state.email} onChange={this.handleChange}/>
            </div>
            <div className="col-2">
              <input type="text" value={this.state.phone} onChange={this.handleChange}/>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label>Choose a Category:</label>
            </div>
          </div>
          <div className="row">
             <div className="col">
                <select value={this.state.value} onChange={this.handleChange}>
                  <option value="Select">Select...</option>
                  <option value="missing_prov">Add a Provider/Facility</option>
                  <option value="questions">Question</option>
                  <option value="remove_prov">Remove Provider/Facility</option>
                  <option value="prov_change">Request a change to Provider/Facility</option>
                  <option value="complaint">Submit a Complaint</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label>Comments: (Provider additions please include the Provider's full name, 
                  specialty, address, city, state, zip code, and phone number)</label>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <textarea name="comment" rows="6" cols="100" value={this.state.comments} onChange={this.handleChange}>
                </textarea>
              </div>
            </div>
          <div className="row">
            <div className="col">
              <button className="rounded-pill" type="submit" formMethod="post">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
}

export default ContactUs;