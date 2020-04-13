import axios from 'axios';


export default {
          
    //This will fetch the user's name 
       getCity: function() {
           return axios.get("localhost:5001/City");
       }

    };