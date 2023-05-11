import React from 'react'
import Image from './Image'
import './ResultDisplay.css'

const ResultDisplay = ({images}) => {
  const renderedImages = images.map((image) => {
    return <Image image={image} key={image.id}/>
  })
  return (
    <div className='result'>
      <h2>{renderedImages}</h2>
    </div>
  )
}

export default ResultDisplay