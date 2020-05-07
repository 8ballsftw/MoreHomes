import React from 'react';
import styled from 'styled-components';
import heartImg from '../../../public/site media/heart.png';
import filledHeartImg from '../../../public/site media/filled_heart.png';

const HeartWrapper = styled.div`
  background: transparent;
  width: 95%;
  height: 75%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  position: absolute;
`;

const HeartImg = styled.img `
  background: transparent;
  height: 16px;
  width: 16px;
  margin-left: -2px;
  margin-top: 2px;
  display: flex;
  justify-content: flex-start;
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

const Heart = ({ heart, hovered, index, clickHandler }) => (
<HeartWrapper className="heartWrapper">
  {heart
    ? <Button className={`heartButton ${(index - 1).toString()}`} onClick={(e) => clickHandler(e)}>
      <HeartImg className={`heartButton ${(index - 1).toString()}`} src={filledHeartImg} alt="heart"/>
      </Button>
    : hovered
      ? <Button className={`heartButton ${(index - 1).toString()}`} onClick={(e) => clickHandler(e)}>
        <HeartImg className={`heartButton ${(index - 1).toString()}`} src={heartImg} alt="heart"/>
        </Button>
      : <div></div>}
</HeartWrapper>
)

export default Heart