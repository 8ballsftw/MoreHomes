import React from 'react';
import styled from 'styled-components';
import Heart from './heart.jsx';
import LittleArrows from './littleArrows.jsx';
import PhotoDots from './photoDots.jsx';
import PhotoImage from './photoImage.jsx';

const PhotoWrapper = styled.div`
  position: relative;
  border-radius: 5px;
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const PhotoImageWrapper = styled.div`
  display: flex;
  justify-contents: flex-start;
  border-radius: 6px;
  height: 225px;
  width: 100%;
  transition: transform 500ms ease;
  transform: translateX(-${props => props.photo * 100}%);
`;


const Photo = ({ home, index, photo, heart, hovered, arrowClickHandler, photoClickHandler, photoHoverHandler, heartClickHandler }) => (
  <PhotoWrapper
    className="photoWrapper"
    onMouseEnter={() => photoHoverHandler(index, true)}
    onMouseLeave={() => photoHoverHandler(index, false)}
  >
    <Heart heart={heart} index={index} hovered={hovered} clickHandler={heartClickHandler}/>
    <LittleArrows index={index} hovered={hovered} clickHandler={arrowClickHandler} />

    <PhotoDots idx={photo} length={home.photos ? home.photos.length : 0} />

    <PhotoImageWrapper photo={photo}>
      {home.photos.map((photo, index) => (
        <PhotoImage photo={photo} key={index} title={home.title} clickHandler={photoClickHandler}/>
      ))}
    </PhotoImageWrapper>

    {/* <PhotoImg className="homePhoto" src={home.photos[photo]} alt={home.title} onClick={() => photoClickHandler()}/> */}

    {/* <code>{`${photo} - ${index}`}</code> */}
  </PhotoWrapper>
)

export default Photo;
