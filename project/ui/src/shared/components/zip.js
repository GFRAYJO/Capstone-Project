import React, { Component } from 'react';
import API from '../utils/api'

class Zip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zip: this.props.demoId,
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
        this.setState({location: event.target.zip});
      }

    componentDidMount() {
        this.getZip();
    };

   //This API call fetches the user's name
    getZip = () => {
        if (this.state.zip) {
            API.getZip(this.state.demoId)
                .then(res => {
                    this.setState({
                        zip: {
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
                        zip: {},
                        message: "List of Providers by Zip found"
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
            <label className="col ziplabel">Zip</label>
            <select className="zip" value={this.state.value} onChange={this.handleChange}>
                <option value="Select">Select...</option>
                <option value="Phx1">85004</option>
                <option value="Phx2">85008</option>
                <option value="Phx3">85012</option>
                <option value="Phx4">85016</option>
                <option value="Mesa1">85202</option>
                <option value="Mesa2">85206</option>
                <option value="Mesa3">85210</option>
                <option value="Scottsdale1">85250</option>
                <option value="Scottsdale2">85255</option>
                <option value="Scottsdale3">85260</option>
                <option value="Glendale1">85301</option>
                <option value="Glendale2">85305</option>
                <option value="Glendale3">85310</option>
                <option value="Chandler1">85225</option>
                <option value="Chandler2">85248</option>
                <option value="Tempe1">85282</option>
                <option value="Tempe2">85284</option>
                <option value="Casa Grande1">85122</option>
                <option value="Casa Grande2">85194</option>
                <option value="Tucson1">85704</option>
                <option value="Tucson2">85710</option>
                <option value="Tucson3">85712</option>
                <option value="Tucson4">85730</option>
                <option value="Tucson5">85745</option>
                <option value="Tucson6">85746</option>
            </select>
        </form>
        );
    }
}

export default Zip;