import React, { Component, useState } from 'react';
import "./index.css";

const Button = ({icon, title}) => {
    return (
        <button className="buttonStyle">
            <div className="imgBox">
                <img src={props.icon}/>
            </div>
        {props.title}
        </button>
    )

}

export default Button;