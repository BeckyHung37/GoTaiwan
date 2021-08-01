import React, { Component, useState } from 'react';
// import Header from "../../components/Header"; 
import Map from "../../components/Map"; 
import List from "../../components/List";
import Button from '../../components/Button';
import ShareIcon from '../../images/share.svg'
import AddIcon from '../../images/plus.svg'
import Pin from '../../components/Pin'
import AddExperience from '../../components/AddExperience';
import "./index.css";

const Mymap = () => {
    const [openAddExperience,setOpenAddExperience] = useState(false)
    const handleOpenAddExperience = () => {
        setOpenAddExperience(true)
    }
    const handleCloseAddExperience = () => {
        setOpenAddExperience(false)
    }
    console.log(openAddExperience)

    return (
        <div className="bodyStyle">
        {/* <Header/> */}
        <div className="content">
            <List/>
            <div className="btnGroup">
                <Button icon={ShareIcon} title='分享' />
                <Button icon={AddIcon} title='新增' onClick={() => handleOpenAddExperience()}/>
            </div>
            <Map/>
            <Pin/>
            <AddExperience
                open={openAddExperience}
                onCloseAddExperience={handleCloseAddExperience}
            />
        </div>
    </div>
    )
}

export default Mymap;