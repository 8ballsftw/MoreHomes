import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heart from './buttons/heart.jsx';
import PhotoImage from './photoImage.jsx';
import PhotoDots from './dots/photoDots.jsx';
import LittleArrows from './buttons/littleArrows.jsx';

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
  transform: translateX(-${(props) => props.photo * 100}%);
`;


const Photo = ({
  home,
  index,
  photo,
  heart,
  hovered,
  arrowClickHandler,
  photoClickHandler,
  photoHoverHandler,
  heartClickHandler,
}) => (
  <PhotoWrapper
    className="photoWrapper"
    onMouseEnter={() => photoHoverHandler(index, true)}
    onMouseLeave={() => photoHoverHandler(index, false)}
  >
    <Heart
      heart={heart}
      index={index}
      hovered={hovered}
      clickHandler={heartClickHandler}
    />
    <LittleArrows
      index={index}
      hovered={hovered}
      clickHandler={arrowClickHandler}
    />
    <PhotoDots
      idx={photo}
      length={home.photos ? home.photos.length : 0}
    />
    <PhotoImageWrapper photo={photo}>
      {home.photos.map((photo, key) => (
        <PhotoImage
          photo={photo}
          key={key}
          title={home.title}
          clickHandler={photoClickHandler}
        />
      ))}
    </PhotoImageWrapper>
  </PhotoWrapper>
);

Photo.propTypes = {
  home: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  photo: PropTypes.number.isRequired,
  heart: PropTypes.bool.isRequired,
  hovered: PropTypes.bool.isRequired,
  arrowClickHandler: PropTypes.func.isRequired,
  photoClickHandler: PropTypes.func.isRequired,
  photoHoverHandler: PropTypes.func.isRequired,
  heartClickHandler: PropTypes.func.isRequired,
};

export default Photo;
