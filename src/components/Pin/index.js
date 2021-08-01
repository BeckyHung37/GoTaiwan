import React, { Component, useState } from 'react';
import "./index.css";
import flag from "../../images/flag.svg";

const Pin = () => {
    return(
        <div className="pinBox">
            <img src={flag}/>
        </div>
    )
}

export default Pin;