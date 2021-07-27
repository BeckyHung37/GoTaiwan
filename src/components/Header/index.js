import React, { Component, useState } from 'react';
import "./index.css";
import logo from "../../images/gotaiwan_logo.svg";

const Header = () => {
    return <div>
        <div className="header">
            <div className="containerHeader">
                <img src={logo}/>
                <ul className="menu">
                    <li><a>使用介紹</a></li>
                    <li><a>登出</a></li>
                </ul>
            </div>
        </div>
    </div>
}
export default Header;