import React from 'react';
import Photo from './photo.jsx';
import Info from './info.jsx';
import styled from 'styled-components';

const HomeWrapper = styled.span`
  display: flex;
  padding: 1%;
  width: 23%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Entry = (props) => {
  return (
    <HomeWrapper>
      <Photo
        home={props.home}
        index={props.index}
        // key={index}
        photo={props.photo}
        hovered={props.hovered}
        clickHandler={props.clickHandler}
        photoClickHandler={props.photoClickHandler}
        photoHoverHandler={props.photoHoverHandler}
        heartClickHandler={props.heartClickHandler}
      />
      <Info
        home={props.home}
      />
        {/* {`${home[1]} - ${index + homeId + 1}`} */}
    </HomeWrapper>
  )
}

export default Entry;