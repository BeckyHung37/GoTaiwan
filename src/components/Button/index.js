import React, { Component, useState } from 'react';
import "./index.css";

const Button = ({icon, title}) => {
    return (
        <button className="buttonStyle">
            <div className="imgBox">
                <img src={icon}/>
            </div>
        {title}
        </button>
    )

}

export default Button;