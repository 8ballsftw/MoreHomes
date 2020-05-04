import React from 'react'
import Photo from './photo.jsx'

const MainCarousel = ({homes, photos, homeId, bigClickHandler, littleClickHandler}) => {
  let highlightedHomes = [];
  for (var i = homeId; i < homeId + 3; i++) {
    highlightedHomes.push([homes[i], photos[i]])
  }
  return (
    <div>
      <button value="bigLeft" onClick={(e) => bigClickHandler(e)}>Big Left</button>
        {highlightedHomes.map((home, index) => (
          <Photo
            home={home[0]}
            index={index + homeId + 1}
            key={index}
            photo={home[1]}
            clickHandler={littleClickHandler}/>
        ))}
      <button value="bigRight" onClick={(e) => bigClickHandler(e)}>Big Right</button>
    </div>
  )
}

export default MainCarousel;