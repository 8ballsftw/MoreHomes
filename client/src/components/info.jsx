import React from 'react';
import styled from 'styled-components';

const InfoWrapper = styled.div`
  width: 100%;
`;

const LineOneWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 100%;
  font-weight: 100;
  font-color: darkgrey;
`;

const TypeWrapper = styled.div`
  line-height: 20px;
  max-height: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const LineTwoWrapper = styled.div`
  display: flex
  justify-content: flex-start;
  font-weight: 300;
  font-size: 110%;

  line-height: 20px;
  max-height: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

const LineThreeWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;

  line-height: 20px;
  max-height: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

const Price = styled.div`
  font-weight: 700;
  padding-right: 3px;
`

const Rating = styled.div`
  padding: 3px;
  font-weight: 500;
  font-color: black;
`

const RatingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`


const Info = ({home}) => (
  <InfoWrapper>
    <LineOneWrapper className="lineOne">
      <TypeWrapper>
        {`${home.home_type} · ${home.beds} beds`}
      </TypeWrapper>
      <RatingWrapper className="ratingWrapper">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/252px-Red_star.svg.png" alt="red star" height="13" width="13"/>
        <Rating className="rating">{home.rating}</Rating>
        {` (${home.rating_num})`}
      </RatingWrapper>
    </LineOneWrapper>
    <LineTwoWrapper className="lineTwo">
      <div>{`${home.title}`}</div>
    </LineTwoWrapper>
    <LineThreeWrapper className="lineThree">
      <Price className="price">{`$${home.price} `}</Price>
      <div>{`  / night`}</div>
    </LineThreeWrapper>
  </InfoWrapper>
)

export default Info;