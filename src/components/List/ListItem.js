import React, { Component, useState } from 'react';
import "./index.css";
import TravelExperience from '../TravelExperience';

const ListItem = (props) => {
    // const [openTravelExperience,setOpenTravelExperience] = useState(false)
    // const handleOpenTravelExperience = () => {
    //     setOpenTravelExperience(true)
    // }
    // const handleCloseTravelExperience = () => {
    //     setOpenTravelExperience(false)
    // }
    const { data } = props

    return (
        <li>
        <a
          onClick={() => {
            // open experience dialog with data
          }}
        >
          {data.title}
        </a>
      </li>
        // <div>
        // <div className="listItem">
        //     <ul>
        //         <li><a href="#" onClick={() => handleOpenTravelExperience()}>台北最經典101一日遊</a></li>
        //         <li><a href="#">松山文創＆中正紀念堂一日遊</a></li>
        //         <li><a href="#">北投溫泉一日遊</a></li>
        //     </ul>
        // </div>
        // <TravelExperience
        //     open={openTravelExperience}
        //     onCloseTravelExperience={handleCloseTravelExperience}
        // />
        // </div>
        )
} 

export default ListItem;