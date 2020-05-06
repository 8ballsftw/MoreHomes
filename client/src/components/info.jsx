import React from 'react';
import styled from 'styled-components';

const InfoWrapper = styled.div`
  width: 100%;
`

const LineOneWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 100%;
  font-weight: 100;
`



const LineTwoWrapper = styled.div`
  display: flex
  justify-content: flex-start;
  font-weight: 300;
  font-size: 110%;
`

const LineThreeWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
`

const Price = styled.div`
  font-weight: 700;
  padding-right: 3px;
`

const Rating = styled.div`
  padding: 3px;
  font-weight: 500;
`

const RatingBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`


const Info = ({home}) => (
  <InfoWrapper>
    <LineOneWrapper>
      <div>{`${home.home_type} · ${home.beds} beds`}</div>
      <RatingBlock>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/252px-Red_star.svg.png" alt="red star" height="13" width="13"/>
        <Rating>{home.rating}</Rating>
        {` (${home.rating_num})`}
      </RatingBlock>
    </LineOneWrapper>
    <LineTwoWrapper>
      <div>{`${home.title}`}</div>
    </LineTwoWrapper>
    <LineThreeWrapper>
      <Price>{`$${home.price} `}</Price>
      <div>{`  / night`}</div>
    </LineThreeWrapper>
  </InfoWrapper>
)

export default Info;