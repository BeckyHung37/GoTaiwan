import React from 'react';
// import Header from "../../components/Header"; 
import HeroImage from '../../images/hero_image.jpg'
import "./index.css";

const HomePage = () => {


    return (
        <div>
            <img src={HeroImage} className="HeroImageBox"/>
        </div>
    )
}

export default HomePage;