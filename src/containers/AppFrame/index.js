import React, { Component, useState } from 'react';
import Header from "../../components/Header"; 
import "./index.css";
// import SignIn from '../../components/SignIn'
// import SignUp from '../../components/SignUp'
import { Route } from 'react-router-dom';

const AppFrame = ({ component: Component, ...rest }) => {
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
            <Header />
            <Route {...rest} render={routeProps => (<Component {...routeProps}></Component>)}></Route>
            {/* <SignIn 
                openSignIn={openSignIn} 
                onCloseSignIn={handelCloseSignIn} onOpenSignUp={handleOpenSignUp}
            />
            <SignUp 
                openSignUp={openSignUp} openSignIn={openSignIn} 
                onCloseSignUp={handelCloseSignUp} onOpenSignIn={handleOpenSignIn}
            /> */}
            {/* {children} */}
        </div>
    )
}


export default AppFrame;