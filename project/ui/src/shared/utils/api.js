import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class API {

    constructor(){}
     
//This will fetch the list of Medical Providers
    getDemographics() {
        const url = `${API_URL}/api/demographics/`;
        return axios.get(url).then(response => response.data);
        }

//This will fetch the list of Medical Providers
    getMDResults() {
        const url = `${API_URL}/api/medprovider/`;
        return axios.get(url).then(response => response.data);
    }

//This will fetch the list of CHC Facilities
    getCHCResults() {
        const url = `${API_URL}/api/chcprovider/`;
        return axios.get(url).then(response => response.data);
    }

//This will fetch the list of BH Providers
    getBHResults() {
        const url = `${API_URL}/api/bhprovider/`;
        return axios.get(url).then(response => response.data);
    }

//This will submit the data entered in the Form
    postForm() {
        const url = `${API_URL}/api/formsubmissions/`;
        return axios.post(url).then(response => response.data);
    }
}