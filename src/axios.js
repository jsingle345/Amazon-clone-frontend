// mip i axios
// to deploy type into the terminal: 'firebase deploy --only functions

import axios from 'axios' 

const instance = axios.create({
    // THE API {cloud function} URL
    baseURL: 'http://localhost:5001/clone-11c60/us-central1/api' 
}); 

export default instance; 