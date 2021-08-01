import React, { Component, useState } from 'react';
import close from '../../images/icon_close.png';
import "./index.css";
import Mask from '../Mask'

const AddExperience = (props) =>{
    return props.open &&(
    <div>
        <div className="AddExperienceBox">
            <h3>新增遊記</h3>
            <img src={close} className="icn_close" onClick={props.onCloseAddExperience}/>
            <input type="text" placeholder="輸入文章標題" className="signInInput"/>
            <input type="date" placeholder="選擇旅遊日期" className="signInInput"/>
            <input type="text" placeholder="旅行中發生哪些好玩的事呢？" className="signInInput"/>
            <button type="submit" className="btn_upload">上傳圖片</button>
            <button type="submit" className="btn_submit">儲存</button>
        </div>
        <Mask/>
    </div>
    )
}

export default AddExperience;