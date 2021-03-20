// mip i axios
// to deploy type into the terminal: 'firebase deploy --only functions

import axios from 'axios' 

const instance = axios.create({
    // THE API {cloud function} URL
    baseURL: "https://us-central1-clone-11c60.cloudfunctions.net/api"
    //'http://localhost:5001/clone-11c60/us-central1/api' , 
}); 

export default instance; 