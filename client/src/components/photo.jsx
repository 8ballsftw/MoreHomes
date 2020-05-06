import React from 'react';
import styled from 'styled-components'

const PhotoImg = styled.img`
  border-radius: 6px;
  height: 200px;
  width: 100%;
`

const PhotoButton = styled.button`
  border-radius: 100%;
  text-align: center;
  background: white;
  height: 30px;
  width: 30px;
  box-shadow: 1px 1px 1px darkgrey;
`

const ButtonWrapper = styled.div`
  background: transparent;
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
`

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
`

const Photo = ({home, index, photo, clickHandler, photoClickHandler}) => (
  <PhotoWrapper>

    <ButtonWrapper>
      <PhotoButton value={"left " + (index - 1).toString()} onClick={(e) => clickHandler(e)}>{"<"}</PhotoButton>
      <PhotoButton value={"right " + (index - 1).toString()} onClick={(e) => {clickHandler(e)}}>{">"}</PhotoButton>
    </ButtonWrapper>

    <PhotoImg src={home.photos[photo]} alt={home.title} onClick={() => photoClickHandler()}/>

    {/* <code>{`${photo} - ${index}`}</code> */}
  </PhotoWrapper>
)

export default Photo;
