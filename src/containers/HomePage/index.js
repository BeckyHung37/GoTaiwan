import React, { Component, useState } from 'react';
// import Header from "../../components/Header"; 
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';
import HeroImage from '../../images/hero_image.jpg'
import "./index.css";

const HomePage = () => {
    // const [openSignUp,setOpenSignUp] = useState(false)
    // const handleOpenSignUp = () => {
    //     setOpenSignUp(true)
    // }
    // const handelCloseSignUp = () => {
    //     setOpenSignUp(false)
    // }

    // const [openSignIn,setOpenSignIn] = useState(false)
    // const handleOpenSignIn = () => {
    //     setOpenSignIn(true)
    // }
    // const handelCloseSignIn = () => {
    //     setOpenSignIn(false)
    // }

    return (
        <div>
            {/* <Header openSignUp={openSignUp} onSignup={handleOpenSignUp}/>
            <SignIn open={open} onClose={handelClose} onSignin={handleOpen}/>
            <SignUp 
                openSignUp={openSignUp} openSignIn={openSignIn} 
                onCloseSignUp={handelCloseSignUp} onOpenSignIn={handleOpenSignIn}
            /> */}
            <img src={HeroImage} className="HeroImageBox"/>
        </div>
    )
}

export default HomePage;