import React from 'react';
import styled from 'styled-components';
import Dot from './dot.jsx'

const DotWrapper = styled.div`
  margin-top: 85px;
  border: 1px solid red;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PhotoDots = ({ idx, photos }) => {
  let mapLength = 0;
  photos.length > 4
    ? mapLength = 4
    : mapLength = photos.length;

  let end = photos.length - 1;
  let mapStart = Math.max(0, Math.min(end - 4, idx - 2));


  // "selected" rules ->
    // if idx > 1
      // selected = idx - map start
    // else
      // selected = idx


  // "small" rules ->
    // if idx < 2
      // 5 is small
    // else if end - idx < 2
      // 0 is small
    // else
      // 1 && 5 are small


  return (
    <DotWrapper>
      {/* {photos.forEach((urls, index) => (
        (index >= mapStart && index <= end && index < (mapStart)) ?
      ))} */}


      <Dot small={true} selected={false}/>
      <Dot small={false} selected={false}/>
      <Dot small={false} selected={true}/>
      <Dot small={false} selected={false}/>
      <Dot small={true} selected={false}/>
    </DotWrapper>
  );
}

export default PhotoDots;
