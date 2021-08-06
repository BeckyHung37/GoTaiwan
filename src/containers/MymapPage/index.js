import React, { Component, useState, useEffect} from 'react';
// import Header from "../../components/Header"; 
import Map from "../../components/Map"; 
import List from "../../components/List";
import Button from '../../components/Button';
import ShareIcon from '../../images/share.svg'
import AddIcon from '../../images/plus.svg'
import AddExperience from '../../components/AddExperience';
import "./index.css";

import { getExperiences } from '../../utils/api'

const Mymap = () => {
    const [openAddExperience,setOpenAddExperience] = useState(false)
    const [experiences, setExperiences] = useState([])
    const [selectedCities, setSelectedCities] = useState([])

    useEffect(() => {
        getExperiences(setExperiences)
      }, [])
    
      useEffect(() => {
        getExperiences(setExperiences)
      }, [])
    
      useEffect(() => {
        if (experiences.length > 0) {
          const titles = experiences.map((experience) => experience.city)
          setSelectedCities([...new Set(titles)])
        }
      }, [experiences])

      const handleOpenAddExperience = () => {
        setOpenAddExperience(true)
    }
    const handleCloseAddExperience = () => {
        setOpenAddExperience(false)
    }


    return (
    <div className="bodyStyle">
        <div className="content">
            <List cities={selectedCities} experiences={experiences} />
            <div className="btnGroup">
                <Button icon={ShareIcon} title='分享' />
                <Button icon={AddIcon} title='新增' onClick={() => handleOpenAddExperience()}/>
            </div>
            <Map cities={selectedCities} />
            <AddExperience
                open={openAddExperience}
                onCloseAddExperience={handleCloseAddExperience}
            />
        </div>
    </div>
    )
}

export default Mymap;