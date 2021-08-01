// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Link, Route} from "react-router-dom"; //Router為指定名稱
import AppFrame from "./containers/AppFrame";
import Mymap from "./containers/MymapPage"; //不用寫./pages/Home/index.js，他會自己判斷
import HomePage from "./containers/HomePage";
import db from './utils/db'


// db.collection("todo").add({
//     text: "Ada",
//     time: Date.now()
// })
// .then((ref) => {
//     console.log("Document ID", ref.id);
// })
// .catch((error) => {
//     console.error("Error adding document: ", error);
// });
// Initialize Firebase


// let app=React.createElement("div",{},"Hello React");
// ReactDOM.render(app, document.getElementById("root"));



ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
            <AppFrame path='/Mymap' component={Mymap}/>
            <AppFrame path='/' component={HomePage}/>

                {/* <Route path="/Mymap">
                    <Mymap />
                </Route>
                <Route path="/">
                    <HomePage />
                </Route> */}
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);
