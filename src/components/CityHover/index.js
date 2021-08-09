import React, { Component, useState } from 'react';
import "./index.css";

const CityHover = (props) => {
    return (
        <div className="cityHoverBox">
            <ul className="cityName">
                {props.city}
                {/* <li>
                    <a>台南井仔腳鹽田～</a>
                </li> */}
            </ul>
        </div>
    )
}

export default CityHover;