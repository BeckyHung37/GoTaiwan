import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Mymap from "./containers/MymapPage"; //不用寫./pages/Home/index.js，他會自己判斷
import HomePage from "./containers/HomePage";

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
db.collection("todo").add({
    text: "Ada",
    time: Date.now()
})
.then((ref) => {
    console.log("Document ID", ref.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});
// Initialize Firebase


// let app=React.createElement("div",{},"Hello React");
// ReactDOM.render(app, document.getElementById("root"));

ReactDOM.render(
    <React.StrictMode>
        {/* <Mymap /> */}
        <HomePage />
    </React.StrictMode>,
    document.getElementById("root")
);
