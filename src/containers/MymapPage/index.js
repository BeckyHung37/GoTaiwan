import React, { Component, useState } from 'react';
import Header from "../../components/Header"; 
import Map from "../../components/Map"; 
import List from "../../components/List";
import Button from '../../components/Button';
import ShareIcon from '../../images/share.svg'
import AddIcon from '../../images/plus.svg'
import SignIn from '../../components/SignIn'
import "./index.css";

const Mymap = () => {
    return <div className="bodyStyle">
        <Header/>
        <div className="content">
            <List/>
            <div className="btnGroup">
                {/* <Button icon={<ShareIcon />} title='分享' onClick={onClick}/>
                <Button icon={<AddIcon />} title='新增' onClick={onClick}/> */}
            </div>
            <Map/>
        </div>
    </div>
}

export default Mymap;