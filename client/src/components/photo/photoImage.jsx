import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PhotoImg = styled.img`
  height: inherit;
  width: inherit;
  object-fit: cover;
`;

const PhotoImage = ({ photo, title, clickHandler }) => (
  <PhotoImg className="homePhoto" src={photo} alt={title} onClick={() => clickHandler()} />
);

PhotoImage.propTypes = {
  photo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default PhotoImage;
