import React from 'react';
import styled from 'styled-components';

const DotStyle = styled.div`
border-radius: 100%;
text-align: center;
background: ${props => props.selected ? "white" : "grey"};
min-height: ${props => props.small ? "6px" : "8px"};
min-width: ${props => props.small ? "6px" : "8px"};
max-height: ${props => props.small ? "6px" : "8px"};
max-width: ${props => props.small ? "6px" : "8px"};
margin: ${props => props.small ? "3px" : "2px"};
opacity: 0.65;
`

const Dot = ({ small, selected }) => {
  return (
    <DotStyle small={small} selected={selected} />
  );
}

export default Dot;
