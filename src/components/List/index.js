import React, { Component, useState } from 'react';
import "./index.css";
import ListTitle from './ListTitle';
import ListItem from './ListItem';


const List = (props) => {
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
                      belongExperiences.map((experience) => 
                      <ListItem key={experience.id} onOpen={() => props.onOpenTravelExperience(experience)} data={experience} />)
                    }
                  </ul>
                </div>
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