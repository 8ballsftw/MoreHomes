import React from 'react';
import Entry from './entry.jsx';
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

const MainCarousel = (props) => {
  let highlightedHomes = [];
  for (var i = props.homeId; i < props.homeId + 3; i++) {
    highlightedHomes.push([props.homes[i], props.photos[i], props.hearts[i]])
  }
  return (
    <CarouselWrapper value={"Carousel"}>
      <ButtonWrapper>
        <Button value={"bigLeft"} onClick={(e) => props.bigClickHandler(e)}>{props.leftButton ? "<" : ""}</Button>
        <Button value={"bigRight"} onClick={(e) => props.bigClickHandler(e)}>{props.rightButton ? ">" : ""}</Button>
      </ButtonWrapper>
      {highlightedHomes.map((home, index) => (
        <Entry
          key={index}
          home={home[0]}
          index={index + props.homeId + 1}
          photo={home[1]}
          heart={home[2]}
          hovered={props.hovered === index + props.homeId + 1 ? true : false}
          arrowClickHandler={props.littleClickHandler}
          photoClickHandler={props.photoClickHandler}
          photoHoverHandler={props.photoHoverHandler}
          heartClickHandler={props.heartClickHandler}
        />
      ))}
    </CarouselWrapper>
  )
}

export default MainCarousel;
