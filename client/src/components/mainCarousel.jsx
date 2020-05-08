import React from 'react';
import Entry from './entry.jsx';
import styled from 'styled-components';

const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: auto;
  height: 300px;
  position: relative;
`;

const EntryWrapper = styled.div`
  display: flex;
  width: inherit;
  flex-direction: row;
  justify-content: flex-start;
  transition: transform 1s ease;
  transform: translateX(-${props => props.homeId * 46.2}%);
`;

const EntryWrapperWrapper = styled.div`
  height: inherit;
  width: 72%;
  overflow: hidden;
`;

const ButtonWrapper = styled.div`
  background: transparent;
  width: 78%;
  height: 225px;
  padding-top: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: -1;
`;

const Button = styled.button`
  border: none;
  background: transparent;
  font-size: 200%;
  :focus {
    outline: none;
  }
  display: flex;
  align-items: center;
  :hover {
    cursor: pointer;
  }
  position: relative;
  z-index: 1;
`;

const MainCarousel = (props) => {
  console.log(props.homeId)
  let highlightedHomes = [];
  // for (var i = props.homeId; i < props.homeId + 3; i++) {
    for (var i = 0; i < props.homes.length; i++) {
    highlightedHomes.push([props.homes[i], props.photos[i], props.hearts[i]])
  }
  return (
    <CarouselWrapper value={"Carousel"}>
        <Button value={"bigLeft"} onClick={(e) => props.bigClickHandler(e)}>{props.leftButton ? "<" : " "}</Button>
      <EntryWrapperWrapper>
      <EntryWrapper homeId={props.homeId}>
        {highlightedHomes.map((home, index) => (
          <Entry
            key={index}
            home={home[0]}
            index={index + 1}
            photo={home[1]}
            heart={home[2]}
            hovered={props.hovered === index + 1 ? true : false}
            arrowClickHandler={props.littleClickHandler}
            photoClickHandler={props.photoClickHandler}
            photoHoverHandler={props.photoHoverHandler}
            heartClickHandler={props.heartClickHandler}
          />
        ))}
      </EntryWrapper>
      </EntryWrapperWrapper>
      {/* <ButtonWrapper> */}
        <Button value={"bigRight"} onClick={(e) => props.bigClickHandler(e)}>{props.rightButton ? ">" : " "}</Button>
      {/* </ButtonWrapper> */}
    </CarouselWrapper>
  )
}

export default MainCarousel;
