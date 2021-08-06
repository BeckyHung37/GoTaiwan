import React, { Component, useState } from 'react';
import { useHistory } from "react-router-dom"
import close from '../../images/icon_close.png';
import "./index.css";
import Mask from '../Mask'
import { signin } from '../../utils/api'

const localStorage = global.window.localStorage
const token = localStorage.getItem('token')

const SignIn = (props) =>{
    let history = useHistory();
    function handlePush() {
        // if (token){
            history.push("/Mymap")
            location.reload()
        // }else{
            // alert('noooooo')
        // }   
      }
    return props.open &&(
    <div>
        <div className="dialogSignin">
            <div className="dialogTop"></div>
            <h3>登入會員帳號</h3>
            <img src={close} className="icn_close" onClick={props.onCloseSignIn}/>
            <input type="email" placeholder="輸入電子信箱" className="signInInput" id="signInEmail"/>
            <input type="password" placeholder="輸入密碼" className="signInInput" id="signInPwd"/>
            <button type="submit" className="btn_signIn" 
            onClick={() => {signin(props.onCloseSignIn, handlePush)}}
            >登入帳戶</button>
            <p className="btn_singInText" onClick={props.onOpenSignUp}>還沒有帳戶？點此註冊</p>
        </div>
        <Mask/>
    </div>
    )
}

export default SignIn;