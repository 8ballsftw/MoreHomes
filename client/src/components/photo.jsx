import React from 'react';
import styled from 'styled-components';
import heart from '../../../public/site media/heart.png';



const ArrowWrapper = styled.div`
  background: transparent;
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
`;

const HeartWrapper = styled.div`
  background: transparent;

  width: 95%;
  height: 95%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  position: absolute;
`;

const PhotoWrapper = styled.div`
  position: relative;
  border-radius: 5px;
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  transition-duration: 1s;
  transition-timing-function: ease-out;
`;

const PhotoImg = styled.img`
  border-radius: 6px;
  height: 200px;
  width: 100%;
`;

const HeartImg = styled.img `

`;

const Button = styled.button`
  border-radius: 100%;
  text-align: center;
  background: white;
  height: 28px;
  width: 28px;
  box-shadow: 1px 1px 3px rgba(19, 19, 19, .5);
  :focus {
    outline: none;
  }
  :hover {
    transform: scale(1.05, 1.05)
  }
  :active {
    box-shadow: -1px -1x 3px rgba(19, 19, 19, .5);
  }
`;


const Photo = ({home, index, photo, hovered, clickHandler, photoClickHandler, photoHoverHandler, heartClickHandler}) => (
  <PhotoWrapper
    className="photoWrapper"
    onMouseEnter={() => photoHoverHandler(index, true)}
    onMouseLeave={() => photoHoverHandler(index, false)}
  >
    <HeartWrapper>
    {hovered
      ? <Button id={`heart ${index}`} className="heartButton" value={"heart " + (index - 1).toString()} onClick={(e) => {heartClickHandler(e)}}>
        <img src={heart} alt="heart" height="16px" width="16px" left="16px"/>
        </Button>
      : <div></div>}
    </HeartWrapper>

    <ArrowWrapper className="littleArrowWrapper">
      {hovered
        ? <Button className="leftButton" value={"left " + (index - 1).toString()} onClick={(e) => clickHandler(e)}>{"<"}</Button>
        : <div></div>}
      {hovered
        ? <Button className="rightButton" value={"right " + (index - 1).toString()} onClick={(e) => {clickHandler(e)}}>{">"}</Button>
        : <div></div>}
    </ArrowWrapper>

    <PhotoImg className="homePhoto" src={home.photos[photo]} alt={home.title} onClick={() => photoClickHandler()}/>

    {/* <code>{`${photo} - ${index}`}</code> */}
  </PhotoWrapper>
)

export default Photo;
