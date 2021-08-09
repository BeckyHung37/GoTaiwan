import React, { Component, useState } from 'react';
import "./index.css";
// import flag from "../../images/flag.svg";

const Pin = (props) => {
    return(
        // <div className="pinBox">
            <svg {...props} className="pinBox">
                <polygon className="flagTriangle" points="52,23.5 10,40 10,22 10,4 "/>
                <path className="flagStick" d="M9,0C8.448,0,8,0.447,8,1v3v55c0,0.553,0.448,1,1,1s1-0.447,1-1V4V1C10,0.447,9.552,0,9,0z"/>
                <text className="pinNumber" width="20px" height="20px">{props.count}</text>
            </svg>
        // </div>
    )
}

export default Pin;