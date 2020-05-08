import React from 'react';
import styled from 'styled-components';

const DotStyle = styled.div`
border-radius: 100%;
text-align: center;
background: grey;
height: 8px;
width: 8px;
margin: 2px
`



const Dot = ({ small, selected }) => {
  return (
    <DotStyle style={(selected && small)
                      ? {background: 'lightgrey', height: '6px', width: '6px'}
                      : small
                        ? {height: '6px', width: '6px'}
                        : selected
                          ? {background: 'white'}
                          : {}} />
  );
}

export default Dot;
