// import firebase from "firebase/app";
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCerOcfOq-W_5aSGsZyDeh111uvz0kamc0",
    authDomain: "gotaiwan-travelmap.firebaseapp.com",
    projectId: "gotaiwan-travelmap",
    storageBucket: "gotaiwan-travelmap.appspot.com",
    messagingSenderId: "609280565263",
    appId: "1:609280565263:web:522dad66ede45dd1a3037a",
    measurementId: "G-BQ08VEL7Q1"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;