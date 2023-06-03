import React from 'react';
import styled from 'styled-components';
import '../styles/About.css';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    border: 2px solid white;
`;

function About() {
  return (
    <Wrapper id='about'>
      <div className='column'></div>
      <div className='column'></div>
    </Wrapper>
  );
}

export default About;