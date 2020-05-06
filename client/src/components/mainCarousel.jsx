import React from 'react';
import Photo from './photo.jsx';
import Info from './info.jsx';

const MainCarousel = ({homes, photos, homeId, bigClickHandler, littleClickHandler, photoClickHandler}) => {
  let highlightedHomes = [];
  for (var i = homeId; i < homeId + 3; i++) {
    highlightedHomes.push([homes[i], photos[i]])
  }
  return (
    <div>
      <span className="homes">
      <button value="bigLeft" onClick={(e) => bigClickHandler(e)}>{"<"}</button>
        {highlightedHomes.map((home, index) => (
          <span className="home">
            <Photo
              home={home[0]}
              index={index + homeId + 1}
              key={index}
              photo={home[1]}
              clickHandler={littleClickHandler}
              photoClickHandler={photoClickHandler}
            />
            <Info
              home={home[0]}
              key={index}
              />
          </span>
        ))}
      <button value="bigRight" onClick={(e) => bigClickHandler(e)}>{">"}</button>
      </span>
    </div>
  )
}

export default MainCarousel;
