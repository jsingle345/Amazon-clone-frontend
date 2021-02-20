import firebase from "firebase"; //npm i react-firebase

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
