import React from "react";
import "./index.css";
import { useState } from 'react'; //useState是一個function
import Header from "../../components/Header"; 
import Map from "../../components/Map"; 
import List from "../../components/List";

const Mymap = () => {
    return <div className="bodyStyle">
        <Header/>
        <div className="content">
            <List/>
            <Map/>
        </div>
    </div>
}

export default Mymap;