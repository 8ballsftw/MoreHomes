import React from 'react';
import styled from 'styled-components';

const PhotoImg = styled.img`
  height: inherit;
  width: inherit;
  object-fit: cover;
`;

const PhotoImage = ({ photo, title, clickHandler }) => (
      <PhotoImg className="homePhoto" src={photo} alt={title} onClick={() => clickHandler()}/>
)


export default PhotoImage;