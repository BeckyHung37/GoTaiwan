import React, { Component, useState } from 'react';
import close from '../../images/icon_close.png';
import "./index.css";
import Mask from '../Mask'

const AddExperience = (props) =>{
    return props.open &&(
    <div>
        <div className="AddExperienceBox">
            <div className="boxTitle">新增遊記</div>
            
            <img src={close} className="icn_close" onClick={props.onCloseAddExperience}/>  
                <div className="inputBox">
                    <div className="inputTitle">文章標題</div>
                    <input type="text" placeholder="輸入文章標題" className="titleInput"/>
                </div>
                <div className="inputsBox"> 
                    <div className="inputBox">
                        <div className="inputTitle">旅遊日期</div>
                        <input type="date" placeholder="選擇旅遊日期" className="postInput"/>
                    </div>
                    <div className="inputBox">
                        <div className="inputTitle">旅遊縣市</div>
                        <select type="date" placeholder="選擇旅遊縣市" className="postInput">
                            <option>基隆市</option>
                            <option>台北市</option>
                            <option>新北市</option>
                            <option>桃園市</option>
                            <option>新竹市</option>
                            <option>新竹縣</option>
                            <option>苗栗縣</option>
                            <option>台中市</option>
                            <option>彰化縣</option>
                            <option>南投縣</option>
                            <option>雲林縣</option>
                            <option>嘉義市</option>
                            <option>嘉義縣</option>
                            <option>台南市</option>
                            <option>高雄市</option>
                            <option>屏東縣</option>
                            <option>台東縣</option>
                            <option>花蓮縣</option>
                            <option>宜蘭縣</option>
                            <option>澎湖縣</option>
                            <option>金門縣</option>
                            <option>連江縣</option>
                        </select>
                    </div>   
                </div>
            <div className="inputBox">
                    <div className="inputTitle">旅遊記事</div>
                    <input type="text" placeholder="旅行中發生哪些好玩的事呢？" className="diaryInput"/>
            </div>
            <button type="submit" className="btn_upload">上傳圖片</button>
            <div className="saveBox">
                <button type="submit" className="btn_submit">儲存</button>
            </div>
        </div>
        <Mask/>
    </div>
    )
}

export default AddExperience;