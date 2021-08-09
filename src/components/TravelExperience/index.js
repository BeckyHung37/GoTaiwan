import React from 'react';
import close from '../../images/close.svg';
import Delete from '../../images/delete.svg';
import Edit from '../../images/edit.svg';
import "./index.css";
import Mask from '../Mask'
import Button from '../../components/Button';
import { deleteExperience } from '../../utils/api'

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
            <div className="title_btn">
                <div className="boxTitle">{props.data.title}</div>
                <div className="btnGroup_experience">
                    <Button  icon={Edit} title='編輯' onClick={() => {props.onCloseTravelExperience(), props.onOpenEditExperience()}}/>
                    <Button  icon={Delete} title='刪除' onClick={() => 
                deleteExperience(props.data.id)}></Button>
                </div>
            </div>
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
        <Mask onClick={props.onCloseTravelExperience}/>
    </div>
    )
}

export default TravelExperience;