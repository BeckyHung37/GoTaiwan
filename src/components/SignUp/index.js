import React, { Component, useState } from 'react';
import close from '../../images/icon_close.png';
import "./index.css";
import Mask from '../Mask'

const SignUp = () =>{
    return <div>
        <div className="dialogSignup">
            <div className="dialogTop"></div>
                <h3>註冊會員帳號</h3>
                <img src={close} className="icn_close"/>
                <input type="text" placeholder="輸入姓名" className="signInInput"/>
                <input type="text" placeholder="輸入電子信箱" className="signInInput"/>
                <input type="password" placeholder="輸入密碼" className="signInInput"/>
                <button type="submit" className="btn_signIn">註冊新帳戶</button>
                <p className="btn_singInText">已經有帳戶了？點此登入</p>
            </div>
        <Mask/>
    </div>
}

export default SignUp;