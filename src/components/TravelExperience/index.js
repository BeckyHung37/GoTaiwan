import React, { Component, useState } from 'react';
import close from '../../images/icon_close.png';
import "./index.css";
import Mask from '../Mask'

const TravelExperience = (props) =>{
    return props.open &&(
    <div>
        <div className="AddExperienceBox">
            <div className="imageSection">image</div>
            <div className="images">
                <div className="imageBox">1</div>
                <div className="imageBox">1</div>
                <div className="imageBox">1</div>
                <div className="imageBox">1</div>
                <div className="imageBox">1</div>
                <div className="imageBox">1</div>
                <div className="imageBox">1</div>
                <div className="imageBox">1</div>

            </div>
            <div className="boxTitle">台北最經典101一日遊</div>
            <img src={close} className="icn_close" onClick={props.onCloseTravelExperience}/>  
            <div className="inputBox">
                <div>旅遊日期：</div>
                <div className="subtitle">2021-08-01</div>
                <div>地點：</div>
                <div className="subtitle">台北市</div>
            </div>
            <div className="postContent">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>

        </div>
        <Mask/>
    </div>
    )
}

export default TravelExperience;