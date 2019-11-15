import React, { useEffect, useState } from 'react'
import Blob from 'common/blob'
import PropTypes from 'prop-types'

const InteractiveBlob = () => {
  const [coordinates, setCoordinates] = useState([0, 0])

  useEffect(() => {
    const resize = (event) => {
      const x = (event.clientX || event.touches) ? event.clientX || event.touches[0].clientX : 100
      const y = (event.clientY || event.touches) ? event.clientY || event.touches[0].clientY : 100
      const height = window.innerHeight
      const width = window.innerWidth
      const wght = ((x * 800) / width) + 100
      const wdth = ((y * 200) / height)
      setCoordinates([x, y])
      console.log(x, y)
    }

    document.addEventListener('mousemove', resize)
    return () => {
      document.removeEventListener('mousemove', resize)
    }
  }, [])
  return (
    <Blob color="cyan" size={200} yPos={coordinates[1]} xPos={coordinates[0]} />
  )
}

export default InteractiveBlob
