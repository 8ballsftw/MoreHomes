import React from 'react';
import Photo from './photo.jsx';
import Info from './info.jsx';
import styled from 'styled-components';

const HomeWrapper = styled.span`
  display: flex;
  padding: 0.5%;
  // width: 300%;
  min-width: 45.2%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Entry = (props) => {
  return (
    <HomeWrapper id="homeWrapper">
      <Photo
        home={props.home}
        index={props.index}
        photo={props.photo}
        heart={props.heart}
        hovered={props.hovered}
        arrowClickHandler={props.arrowClickHandler}
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