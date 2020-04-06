import React, { Component } from 'react';

class Cities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: this.props.demoId,
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

    componentDidMount() {
        this.getListByCity();
    };

   //This API call fetches the user's name
    getListByCity = () => {
        if (this.state.city) {
            API.getListByCity(this.state.demoId)
                .then(res => {
                    this.setState({
                        city: {
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
                        city: {},
                        message: "List of Providers by City found"
                    })
                );
            }
        else {
            console.log("No Data found")
        }
    };

    render() {
    return (
        <div className="row">
            <label className="col">City</label>
            <select className="cities">
                <option value="Casa Grande">Casa Grande</option>
                <option value="Chandler">Chandler</option>
                <option value="Flagstaff">Flagstaff</option>
                <option value="Glendale">Glendale</option>
                <option value="Green Valley">Green Valley</option>
                <option value="Mesa">Mesa</option>
                <option value="Nogales">Nogales</option>
                <option value="Phoenix">Phoenix</option>
                <option value="Scottsdale">Scottsdale</option>
                <option value="Sierra Vista">Sierra Vista</option>
                <option value="Tucson">Tucson</option>
                <option value="Yuma">Yuma</option>
            </select>
        </div>
  );
}
}

export default Cities;