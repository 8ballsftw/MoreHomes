import React from 'react';
import Photo from './photo.jsx';
import Info from './info.jsx';
import styled from 'styled-components';

const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: auto;
`

const ButtonWrapper = styled.div`
  background: transparent;
  font-size: 200%;
  display: flex;
  align-items: center;
  padding: 10px;
  height: 195px;
`

const HomeWrapper = styled.div`

`

const MainCarousel = ({homes, photos, homeId, bigClickHandler, littleClickHandler, photoClickHandler}) => {
  let highlightedHomes = [];
  for (var i = homeId; i < homeId + 3; i++) {
    highlightedHomes.push([homes[i], photos[i]])
  }
  return (
    <div>
      <CarouselWrapper>
      <ButtonWrapper value="bigLeft" onClick={(e) => bigClickHandler(e)}>{"<"}</ButtonWrapper>
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
              key={index + 0.5}
              />
          </span>
        ))}
      <ButtonWrapper value="bigRight" onClick={(e) => bigClickHandler(e)}>{">"}</ButtonWrapper>
      </CarouselWrapper>
    </div>
  )
}

export default MainCarousel;
