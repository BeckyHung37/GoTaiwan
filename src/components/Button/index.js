import React, { Component, useState } from 'react';
import "./index.css";

const Button = ({icon, title, onClick: handleClick}) => {
    return (
        <button className="buttonStyle" onClick={() => handleClick()}>
            <div className="iconImgBox">
                <img src={icon} className="iconImg"/>
            </div>
        {title}
        </button>
    )

}

export default Button;