import firebase from "firebase"; 

const firebaseConfig = {
    apiKey: "AIzaSyBChIfGkC1J7LXO9-cxnb7SzMukrmabZbQ",
    authDomain: "clone-11c60.firebaseapp.com",
    projectId: "clone-11c60",
    storageBucket: "clone-11c60.appspot.com",
    messagingSenderId: "556167498604",
    appId: "1:556167498604:web:462bca44d421a863e38149",
    measurementId: "G-G7S5G8X7L8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore(); 
  const auth = firebase.auth(); 

  export { db, auth }; 

  
//npm i react-firebase
// Need this to access firebase, can get this from the firebase console
// Need to export 'auth' for user sign in, in Login component
// Need to export 'db' for payment orders in the Payment component