import axios from 'axios';


export default {
          
    //This will fetch the user's name 
       getCity: function() {
           return axios.get("localhost:5001/City");
       },

       getZip: function() {
        return axios.get("localhost:5001/Zip");
        },

        getSpecialty: function() {
            return axios.get("localhost:5001/Specialty");
        },

        getResults: function() {
            return axios.get("localhost:5001/id")
        },

        postForm: function() {
            return axios.post("localhost:5001/FormId")
        }

    };