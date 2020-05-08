import React from 'react';
import styled from 'styled-components';
import star from '../../../public/site media/Red_star.svg';
import plus from '../../../public/site media/plus.png'
import plusStar from '../../../public/site media/Plus_star.svg';


const InfoWrapper = styled.div`
  line-height: 20px;
  width: 100%;
  :hover {
    cursor: pointer;
  }
`;

const LineOneWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 100%;
  font-weight: 300;
  font-size: 14px;
  color: #707070;
`;

const TypeWrapper = styled.div`
  padding-left: 0px;
  margin-left: 0px;
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
  padding-top: 2%;
  line-height: 20px;
  max-height: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

const Price = styled.div`
  font-weight: 600;
  padding-right: 3px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

const Rating = styled.div`
  padding: 3px;
  font-weight: 500;
  color: black;
`

const RatingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

`

const Plus = styled.img`
  height: 17px;
  padding-right: -10px;
`;


const Info = ({home}) => (
  <InfoWrapper>
    <LineOneWrapper className="lineOne">
      {home.is_plus ? <Plus src={plus} alt="plus" /> : null}
      <TypeWrapper>
        {`${home.home_type} · ${home.beds} beds`}
      </TypeWrapper>
      <RatingWrapper className="ratingWrapper">
        <img src={home.is_plus ? plusStar : star} alt="star" height="13" width="13"/>
        <Rating className="rating">{home.rating}</Rating>
        {` (${home.rating_num})`}
      </RatingWrapper>
    </LineOneWrapper>
    <LineTwoWrapper className="lineTwo">
      {`${home.title}`}
    </LineTwoWrapper>
    <LineThreeWrapper className="lineThree">
      <Price className="price">{`$${home.price} `}</Price>
      {`  / night`}
    </LineThreeWrapper>
  </InfoWrapper>
)

export default Info;