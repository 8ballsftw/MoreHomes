import React from 'react'
import styled from 'styled-components'

const ArrowWrapper = styled.div`
  background: transparent;
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
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

const LittleArrows = ({ hovered, index, clickHandler }) => (
  <ArrowWrapper className="littleArrowWrapper">
    {hovered
      ? <Button className="leftButton" value={"left " + (index - 1).toString()} onClick={(e) => clickHandler(e)}>{"<"}</Button>
      : <div></div>}

    {hovered
      ? <Button className="rightButton" value={"right " + (index - 1).toString()} onClick={(e) => {clickHandler(e)}}>{">"}</Button>
      : <div></div>}
  </ArrowWrapper>
)

export default LittleArrows;

{/* <ArrowWrapper className="littleArrowWrapper">
{hovered
  ? <Button className="leftButton" value={"left " + (index - 1).toString()} onClick={(e) => clickHandler(e)}>{"<"}</Button>
  : <div></div>}

{hovered
  ? <Button className="rightButton" value={"right " + (index - 1).toString()} onClick={(e) => {clickHandler(e)}}>{">"}</Button>
  : <div></div>}
</ArrowWrapper> */}