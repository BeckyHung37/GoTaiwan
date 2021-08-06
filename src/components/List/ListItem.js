import React, { Component, useState } from 'react';
import "./index.css";
import TravelExperience from '../TravelExperience';

const ListItem = (props) => {
    const {
      data,
      onOpen: handleOpen
    } = props
    return (
      <li>
        <a
          onClick={() => handleOpen(data)}
        >
          {data.title}
        </a>
      </li>
    )
  }
  
  export default ListItem