import React, { Component } from 'react';
import API from '../utils/api'

class Specialty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            specialty: this.props.demoId,
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
    }

    handleChange(event) {
        this.setState({location: event.target.specialty});
      }

    componentDidMount() {
        this.getSpecialty();
    };

   //This API call fetches the user's name
    getSpecialty = () => {
        if (this.state.specialty) {
            API.getSpecialty(this.state.demoId)
                .then(res => {
                    this.setState({
                        specialty: {
                            demoId: res.data[0].profileId,
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
                        specialty: {},
                        message: "List of Providers by Specialty"
                    })
                );
            }
        else {
            console.log("No Data found")
        }
    }; 

    render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <label className="col specialtylabel">Specialty</label>
            <select className="zip" value={this.state.value} onChange={this.handleChange}>
                <option value="Select">Select...</option>
                <option value="Spec1">Cardiology</option>
                <option value="Spec2">Dermatology</option>
                <option value="Spec3">Endocrinology</option>
                <option value="Spec4">Family Medicine</option>
                <option value="Spec5">Gastroenterology</option>
                <option value="Spec6">General Surgery</option>
                <option value="Spec7">Internal Medicine</option>
                <option value="Spec8">Neurology</option>
                <option value="Spec9">Obstetrics-Gynecology</option>
                <option value="Spec10">Opthalmology</option>
                <option value="Spec11">Orthopedic Surgery</option>
                <option value="Spec12">Pediatrics</option>
                <option value="Spec13">Physical Therapy</option>
                <option value="Spec14">Pulmonary Medicine</option>
                <option value="Spec15">Urology</option>
            </select>
        </form>
        );
    }
}

export default Specialty;