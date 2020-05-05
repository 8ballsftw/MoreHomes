import React from 'react';

const Info = ({home}) => (
  <span className="info">
    <span>{`${home.home_type} - ${home.beds} beds`}</span>
    <span className="rating">{`${home.rating} (${home.rating_num})`}</span>
    <div>{`${home.title}`}</div>
    <div>{`$${home.price} / night`}</div>
  </span>
)

export default Info;
