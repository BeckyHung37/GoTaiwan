import React from 'react';
import close from '../../images/icon_close.png';
import "./index.css";
import Mask from '../Mask'

const TravelExperience = (props) =>{
    return props.open &&(
    <div>
        <div className="AddExperienceBox">
            <div className="imageSection">
                <img className="image" src={props.data.imgUrl} />
            </div>
            {/* <div className="images">
                <div className="imageBox">1</div>
            </div> */}
            <div className="boxTitle">{props.data.title}</div>
            <img src={close} className="icn_close" onClick={props.onCloseTravelExperience}/>  
            <div className="subtitleBox">
                <div className="subtitle">旅遊日期：</div>
                <div className="subtitleContent">{props.data.date}</div>
                <div className="subtitle">地點：</div>
                <div className="subtitle">{props.data.city}</div>
            </div>
            <div className="postContent">
                {props.data.content}
            </div>

        </div>
        <Mask/>
    </div>
    )
}

export default TravelExperience;