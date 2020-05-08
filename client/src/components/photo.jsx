import React from 'react';
import styled from 'styled-components';
import Heart from './heart.jsx'
import LittleArrows from './littleArrows.jsx'
import PhotoDots from './photoDots.jsx'

const PhotoWrapper = styled.div`
  position: relative;
  border-radius: 5px;
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  // margin-bottom: 10px;
  transition-duration: 1s;
  transition-timing-function: ease-out;
  &&:hover {
    cursor: pointer;
  }
`;

const PhotoImg = styled.img`
  border-radius: 6px;
  height: 225px;
  width: 100%;
  object-fit: cover;
`;

const Photo = ({ home, index, photo, heart, hovered, arrowClickHandler, photoClickHandler, photoHoverHandler, heartClickHandler }) => (
  <PhotoWrapper
    className="photoWrapper"
    onMouseEnter={() => photoHoverHandler(index, true)}
    onMouseLeave={() => photoHoverHandler(index, false)}
  >
    <Heart heart={heart} index={index} hovered={hovered} clickHandler={heartClickHandler}/>
    <LittleArrows index={index} hovered={hovered} clickHandler={arrowClickHandler} />

    <PhotoDots idx={photo} photos={home.photos} />

    <PhotoImg className="homePhoto" src={home.photos[photo]} alt={home.title} onClick={() => photoClickHandler()}/>

    {/* <code>{`${photo} - ${index}`}</code> */}
  </PhotoWrapper>
)

export default Photo;
