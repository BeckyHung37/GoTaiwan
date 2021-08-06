import React, { Component, useState } from 'react';
import "./index.css";
import ListTitle from './ListTitle';
import ListItem from './ListItem';
import TravelExperience from '../TravelExperience'


const List = (props) => {
    const [openExperience, setOpenExperience] = useState(false)
    const [selectedExperience, setSelectedExperience] = useState({})
    const handleOpenExperience = (data) => {
      setOpenExperience(true)
      setSelectedExperience(data)
    }
  
    const handleCloseExperience = () => {
      setOpenExperience(false)
      setSelectedExperience({})
    }
    return (
        <div className='listBlock'>
        <h2>我的台灣旅遊清單</h2>
        {
          props.cities.map((city) => {
            const belongExperiences = props.experiences.filter((experience) => {
              return experience.city === city
            })
            return (
              <div key={city}>
                <ListTitle title={city} />
                <div className='listItem'>
                  <ul>
                    {
                      belongExperiences.map((experience) => <ListItem key={experience.id} onOpen={handleOpenExperience} data={experience} />)
                    }
                  </ul>
                </div>
                <TravelExperience open={openExperience} data={selectedExperience} onCloseTravelExperience={handleCloseExperience} />
              </div>
            )
          })
        }
      </div>
    // <div>
    //     <div className="listBlock">
    //         <h2>我的台灣旅遊清單</h2>
    //         <ListTitle/>
    //         <ListItem/>
    //     </div>
    // </div>
    )
}

export default List;