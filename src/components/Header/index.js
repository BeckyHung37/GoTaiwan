import React, { Component, useState } from 'react';
import "./index.css";
import logo from "../../images/gotaiwan_logo.svg";
import { Link, NavLink, useHistory } from "react-router-dom";
import SignIn from '../../components/SignIn'
import SignUp from '../../components/SignUp'

//用來存取
const localStorage = global.window.localStorage
const token = localStorage.getItem('token')

const Header = () => {
    let history = useHistory();
    function handlePush() {
        history.push("/");
    }
    const [openSignUp, setOpenSignUp] = useState(false)
    const handleOpenSignUp = () => {
        setOpenSignUp(true)
    }
    const handleCloseSignUp = () => {
        setOpenSignUp(false)
    }

    const [openSignIn, setOpenSignIn] = useState(false)
    const handleOpenSignIn = () => {
        setOpenSignIn(true)
    }
    const handleCloseSignIn = () => {
        setOpenSignIn(false)
    }

    // method 1
    // let title
    // if (token) {
    //     title = '登出'
    // } else {
    //     title = '登入 / 註冊'
    // }

    return (
        <div className="header">
            <div className="containerHeader">
                <NavLink to='/'><img className="img" src={logo} /></NavLink>
                <ul className="menu">
                    <li><a>使用介紹</a></li>
                    <li>
                        <a
                            onClick={() => {
                                console.log(token)
                                if (token) {
                                    localStorage.removeItem('token')
                                    handlePush()
                                    location.reload()
                                    {token ? '登入/註冊' : '登出'}
                                } else {
                                    handleOpenSignUp()
                                }
                            }
                        }>
                        {token ? '登出' : '登入/註冊'}
                        {/* {title} */}
                        {/* method 2 */}
                        {/* {token ? '登出' : '登入 / 註冊'} */}
                        </a>
                    </li>
                </ul>
            </div>
            <SignIn
                open={openSignIn} openSignUp={openSignUp}
                onCloseSignIn={handleCloseSignIn}
                onOpenSignUp={() => {
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