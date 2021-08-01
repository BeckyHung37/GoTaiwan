import React, { Component, useState } from 'react';
import Header from "../../components/Header"; 
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';
import HeroImage from '../../images/hero_image.jpg'
import "./index.css";

const HomePage = () => {
    const [open,setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true)
    }
    const handelClose = () => {
        setOpen(false)
    }
    return (
        <div>
            <Header open={open} onSignup={handleOpen} onSignin={handleOpen}/>
            <SignIn open={open} onClose={handelClose} onSignin={handleOpen}/>
            <SignUp open={open} onClose={handelClose}/>
            <img src={HeroImage} className="HeroImageBox"/>
        </div>
    )
}

export default HomePage;