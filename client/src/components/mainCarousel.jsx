import React from 'react';
import Entry from './entry.jsx';
import styled from 'styled-components';
import right from '../../../public/site media/icons8-chevron-right-90-grey.png';
import left from '../../../public/site media/icons8-chevron-left-90-grey.png';

const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: auto;
  height: 320px;
  position: relative;
`;

const EntryWrapper = styled.div`
  display: flex;
  width: inherit;
  flex-direction: row;
  justify-content: flex-start;
  transition: transform 500ms ease;
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
  height: 225px;
  min-width: 30px;
  padding: 10px;
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

const ButtonImg = styled.img`
  height: 35px;
  margin-top: 2px;
`;

const RightButtonImg = styled.img`
  height: 20px;
  margin-top: 3px;
  margin-left: -2px;
`;

const MainCarousel = (props) => (
  <CarouselWrapper>
    <Button className="bigLeft" value={"bigLeft"} onClick={(e) => props.bigClickHandler(e)}>{props.leftButton ? <ButtonImg className="bigLeft" src={left} alt="left" /> : <img/>}</Button>
    <EntryWrapperWrapper>
      <EntryWrapper homeId={props.homeId}>
        {props.homes.map((home, index) => (
          <Entry
            key={index}
            home={home}
            index={index + 1}
            photo={props.photos[index]}
            heart={props.hearts[index]}
            hovered={props.hovered === index + 1 ? true : false}
            arrowClickHandler={props.littleClickHandler}
            photoClickHandler={props.photoClickHandler}
            photoHoverHandler={props.photoHoverHandler}
            heartClickHandler={props.heartClickHandler}
          />
        ))}
      </EntryWrapper>
    </EntryWrapperWrapper>
    <Button className="bigRight" value={"bigRight"} onClick={(e) => props.bigClickHandler(e)}>{props.rightButton ? <ButtonImg className="bigRight" src={right} alt="right" /> : "  "}</Button>
  </CarouselWrapper>
)


export default MainCarousel;
