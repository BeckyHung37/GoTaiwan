import React, { Component, useState } from 'react';
import close from '../../images/icon_close.png';
import "./index.css";
import Mask from '../Mask'

const SignIn = (props) =>{
    return props.open &&(
    <div>
        <div className="dialogSignin">
            <div className="dialogTop"></div>
            <h3>登入會員帳號</h3>
            <img src={close} className="icn_close" onClick={props.onCloseSignIn}/>
            <input type="text" placeholder="輸入電子信箱" className="signInInput"/>
            <input type="password" placeholder="輸入密碼" className="signInInput"/>
            <button type="submit" className="btn_signIn">登入帳戶</button>
            <p className="btn_singInText" onClick={props.onOpenSignUp}>還沒有帳戶？點此註冊</p>
        </div>
        <Mask/>
    </div>
    )
}

export default SignIn;