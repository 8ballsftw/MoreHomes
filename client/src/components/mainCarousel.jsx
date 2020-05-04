import React from 'react'
import Photo from './photo.jsx'

const MainCarousel = ({home, index, clickHandler}) => {
  let i = 0;
  return (
    <div onClick={()=>{i++}}>
      {index}
      <img src={home.photos[i]} alt="yolo" height="150"/>
      <Photo />
    </div>
  )
}

export default MainCarousel;