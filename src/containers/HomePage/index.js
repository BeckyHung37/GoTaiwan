import React from 'react';
// import Header from "../../components/Header"; 
import HeroImage from '../../images/hero_image.jpg'
import "./index.css";

const HomePage = () => {


    return (
        <div>
            <div className="heroTitle">GoTaiwan台灣地圖旅遊網站</div>
            <div className="heroSubtitle">為你紀錄獨一無二的台灣旅遊回憶，輕鬆分享你的旅行足跡！</div>
            <img src={HeroImage} className="HeroImageBox"/>
        </div>
    )
}

export default HomePage;