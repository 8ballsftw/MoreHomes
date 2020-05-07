import React from 'react';
import Photo from './photo.jsx';
import Info from './info.jsx';
import styled from 'styled-components';

const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: auto;
  height: 300px;
`;

const ButtonWrapper = styled.div`
  background: transparent;
  width: 78%;
  height: 220px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
`;

const Button = styled.button`
  border: none;
  background: transparent;
  font-size: 200%;
  :focus {
    outline: none;
  }
`;

const HomeWrapper = styled.span`
  display: flex;
  padding: 1%;
  width: 23%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

const MainCarousel = ({homes, photos, homeId, leftButton, rightButton, hovered, bigClickHandler, littleClickHandler, photoClickHandler, photoHoverHandler}) => {

  let highlightedHomes = [];
  for (var i = homeId; i < homeId + 3; i++) {
    highlightedHomes.push([homes[i], photos[i]])
  }
  return (
    <CarouselWrapper value={"Carousel"}>
      <ButtonWrapper>
        <Button value={"bigLeft"} onClick={(e) => bigClickHandler(e)}>{leftButton ? "<" : ""}</Button>
        <Button active={rightButton} value={"bigRight"} onClick={(e) => bigClickHandler(e)}>{rightButton ? ">" : ""}</Button>
      </ButtonWrapper>
      {highlightedHomes.map((home, index) => (
        <HomeWrapper>
          <Photo
            home={home[0]}
            index={index + homeId + 1}
            key={index}
            photo={home[1]}
            hovered={hovered === index + homeId + 1 ? true : false}
            // hovered={true}
            clickHandler={littleClickHandler}
            photoClickHandler={photoClickHandler}
            photoHoverHandler={photoHoverHandler}
          />
          <Info
            home={home[0]}
            key={index + homeId + 100}
            />
            {/* {`${home[1]} - ${index + homeId + 1}`} */}
        </HomeWrapper>
      ))}
    </CarouselWrapper>
  )
}

export default MainCarousel;
