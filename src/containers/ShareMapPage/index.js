import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Map from '../../components/Map'
import List from '../../components/List'
import './index.css'

import { getShareExperiences } from '../../utils/api'

const ShareMap = (props) => {
  const { id } = useParams()
  const [experiences, setExperiences] = useState([])
  const [selectedCities, setSelectedCities] = useState([])

  useEffect(() => {
    getShareExperiences(id, setExperiences)
  }, [])

  useEffect(() => {
    if (experiences.length > 0) {
      const titles = experiences.map((experience) => experience.city)
      setSelectedCities([...new Set(titles)])
    }
  }, [experiences])

  return (
    <div className='bodyStyle'>
      <div className='content'>
        <List cities={selectedCities} experiences={experiences} />
        <Map cities={selectedCities} />
      </div>
    </div>
  )
}

export default ShareMap