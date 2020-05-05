import React from 'react'

const Photo = ({home, index, photo, clickHandler, photoClickHandler}) => (
  <span className="photo">
    <button className="left button" value={"left " + (index - 1).toString()} onClick={(e) => {clickHandler(e)}}>{"<"}</button>
    <img src={home.photos[photo]} alt={home.title} width="250" onClick={() => photoClickHandler()}/>
    <button className="right button" value={"right " + (index - 1).toString()} onClick={(e) => {clickHandler(e)}}>{">"}</button>
    <span>{`${photo} - ${index}`}</span>
  </span>
)

export default Photo;
