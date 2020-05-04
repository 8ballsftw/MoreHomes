import React from 'react'

const Photo = ({home, index, photo, clickHandler}) => (
  <span>
    <button value={"left " + (index - 1).toString()} onClick={(e)=>{clickHandler(e)}}>left</button>
    <img src={home.photos[photo]} alt="yolo" height="150"/>
    <button value={"right " + (index - 1).toString()} onClick={(e)=>{clickHandler(e)}}>right</button>
    <span>{photo}</span>
    <span>{" - " + index}</span>
  </span>
)

export default Photo