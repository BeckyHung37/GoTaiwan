import React, { Component, useState } from 'react';
import "./index.css";
import logo from "../../images/gotaiwan_logo.svg";
import { Link, NavLink } from "react-router-dom";
import SignIn from '../../components/SignIn'
import SignUp from '../../components/SignUp'


const Header = () => {
    const [openSignUp,setOpenSignUp] = useState(false)
    const handleOpenSignUp = () => {
        setOpenSignUp(true)
    }
    const handleCloseSignUp = () => {
        setOpenSignUp(false)
    }

    const [openSignIn,setOpenSignIn] = useState(false)
    const handleOpenSignIn = () => {
        setOpenSignIn(true)
    }
    const handleCloseSignIn = () => {
        setOpenSignIn(false)
    }

    return (
        <div className="header">
            <div className="containerHeader">
                <NavLink to='/'><img className="img" src={logo}/></NavLink>
                <ul className="menu">
                    <li><Link to="/Mymap">使用介紹</Link></li>
                    <li><a onClick={() => handleOpenSignUp()}>登入/註冊</a></li>
                </ul>
            </div>
            <SignIn 
                open={openSignIn} openSignUp={openSignUp}
                onCloseSignIn={handleCloseSignIn} 
                onOpenSignUp={ () => {
                    handleOpenSignUp()
                    handleCloseSignIn()
                }}
            />
            <SignUp 
                open={openSignUp} openSignIn={openSignIn} 
                onCloseSignUp={handleCloseSignUp} 
                onOpenSignIn={() => {
                    handleOpenSignIn()
                    handleCloseSignUp()
                }}
            />
        </div>
    )
}
export default Header;