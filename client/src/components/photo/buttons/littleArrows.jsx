import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import left from '../../../../../public/site media/icons8-chevron-left-60.png';
import right from '../../../../../public/site media/icons8-chevron-right-60.png';

const ArrowWrapper = styled.div`
  background: transparent;
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 1;
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
    transform: scale(1.05, 1.05);
    cursor: pointer;
  }
  :active {
    box-shadow: -1px -1x 3px rgba(19, 19, 19, .5);
  }
`;

const LeftButtonImg = styled.img`
  height: 12px;
  margin-top: 4px;
  margin-left: -1px;
`;

const RightButtonImg = styled.img`
  height: 12px;
  margin-top: 4px;
  margin-left: 1px;
`;

const LittleArrows = ({ hovered, index, clickHandler }) => (
  <ArrowWrapper className="littleArrowWrapper">
    {hovered
      ? <Button className={`left ${(index - 1).toString()}`} onClick={(e) => clickHandler(e)}><LeftButtonImg className={`left ${(index - 1).toString()}`} src={left} alt="left" /></Button>
      : <div />}
    {hovered
      ? <Button className={`right ${(index - 1).toString()}`} onClick={(e) => clickHandler(e)}><RightButtonImg className={`right ${(index - 1).toString()}`} src={right} alt="right" /></Button>
      : <div />}
  </ArrowWrapper>
);

LittleArrows.propTypes = {
  hovered: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default LittleArrows;
