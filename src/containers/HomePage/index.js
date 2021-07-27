import React, { Component, useState } from 'react';
import Header from "../../components/Header"; 
import SignIn from '../../components/SignIn'
import SignUp from '../../components/SignUp';
import HeroImage from '../../images/hero_image.jpg'
import "./index.css";

const HomePage = () => {
    return <div>
            <Header/>
            {/* <SignIn/> */}
            <SignUp/>
            <img src={HeroImage} className="HeroImageBox"/>
        </div>
}

export default HomePage;