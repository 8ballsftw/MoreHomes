import React from 'react';
import styled from 'styled-components';

const DotStyle = styled.div`
border-radius: ${props => props.small ? "6px" : "8px"};
text-align: center;
background: ${props => props.selected ? "white" : "grey"};
min-height: ${props => props.small ? "6px" : "8px"};
min-width: ${props => props.small ? "6px" : "8px"};
max-height: ${props => props.small ? "6px" : "8px"};
max-width: ${props => props.small ? "6px" : "8px"};
margin: ${props => props.small ? "3px" : "2px"};
opacity: 0.75;
`

const Dot = ({ small, selected }) => (
  <DotStyle small={small} selected={selected} />
);

export default Dot;
