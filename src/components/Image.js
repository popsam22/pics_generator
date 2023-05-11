import React from 'react'
import './Image.css'

const Image = ({image}) => {
  return (
    <div>
      <img src={image.urls.small} alt={image.alt_description}/>
    </div>
  )
}

export default Image