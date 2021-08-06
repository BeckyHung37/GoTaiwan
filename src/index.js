// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Link, Route} from "react-router-dom"; //Router為指定名稱
import AppFrame from "./containers/AppFrame";
import Mymap from "./containers/MymapPage"; //不用寫./pages/Home/index.js，他會自己判斷
import ShareMap from './containers/ShareMapPage';
import HomePage from "./containers/HomePage";
import db from './utils/db'



ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <AppFrame path='/Sharemap/:id' component={ShareMap} />
                <AppFrame path='/Mymap' component={Mymap} />
                <AppFrame path='/' component={HomePage} />
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);
