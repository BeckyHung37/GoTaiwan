import React, { Component, useState, useEffect} from 'react';
// import Header from "../../components/Header"; 
import Map from "../../components/Map"; 
import List from "../../components/List";
import Button from '../../components/Button';
import ShareIcon from '../../images/share.svg'
import AddIcon from '../../images/plus.svg'
import AddExperience, { cities } from '../../components/AddExperience';
import TravelExperience from '../../components/TravelExperience'
import EditExperience from '../../components/EditExperience';
// import EditExperience from '../EditExperience';
import "./index.css";

import { getExperiences } from '../../utils/api'
import { editExperience } from '../../utils/api'

const Mymap = () => {
    const [openAddExperience,setOpenAddExperience] = useState(false)
    const [openExperience, setOpenExperience] = useState(false)
    const [openEditExperience,setOpenEditExperience] = useState(false)
    //傳到新的editExperience
    const [selectedExperience, setSelectedExperience] = useState({})
    const [experiences, setExperiences] = useState([])
    const [selectedCities, setSelectedCities] = useState([])


    useEffect(() => {
        getExperiences(setExperiences)
    }, [])
    
    useEffect(() => {
        getExperiences(setExperiences)
    }, [openAddExperience])

  //   useEffect(() => {
  //     editExperiences(setExperiences)
  // }, [])
  
  // useEffect(() => {
  //     editExperiences(setExperiences)
  // }, [openAddExperience])


    
    useEffect(() => {
      if (experiences.length > 0) {
        const titles = experiences.map((experience) => experience.city)
        const uniqueTitles = [...new Set(titles)]
        const uniqueTitlesWithOrder = cities.filter((city) => {
          return uniqueTitles.some((title) => {
            return title === city.name
          })
        })
        const sortedCitieNames = uniqueTitlesWithOrder.sort((a, b) => {
          return a.order - b.order
        }).map((city) => city.name)
        setSelectedCities(sortedCitieNames)
      }
    }, [experiences])

    const handleOpenAddExperience = () => {
      setOpenAddExperience(true)
    }
    const handleCloseAddExperience = () => {
        setOpenAddExperience(false)
    }

    const handleOpenExperience = (data) => {
      setOpenExperience(true)
      setSelectedExperience(data)
    }
  
    const handleCloseExperience = () => {
      setOpenExperience(false)
      setSelectedExperience({})
    }

    const handleOpenEditExperience = () => {
      setOpenEditExperience(true)
      // setSelectedExperience(data)
    }
  
    const handleCloseEditExperience = () => {
      setOpenEditExperience(false)
      // setSelectedExperience({})
    }


    return (
    <div className="bodyStyle">
        <div className="content">
            <List cities={selectedCities} experiences={experiences} onOpenTravelExperience={handleOpenExperience}/>
            <div className="btnGroup">
                <Button icon={ShareIcon} title='分享' />
                <Button icon={AddIcon} title='新增' onClick={() => handleOpenAddExperience()}/>
            </div>
            <Map cities={selectedCities} experiences={experiences} />
            <AddExperience
                open={openAddExperience}
                onCloseAddExperience={handleCloseAddExperience}
            />
            <TravelExperience open={openExperience} data={selectedExperience} onCloseTravelExperience={handleCloseExperience} onOpenEditExperience={handleOpenEditExperience}/>
            <EditExperience open={openEditExperience} data={selectedExperience} onCloseEditExperience={handleCloseEditExperience} />
        </div>
    </div>
    )
}

export default Mymap;