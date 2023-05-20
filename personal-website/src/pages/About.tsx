import React from 'react';
import styled from 'styled-components';
import '../styles/About.css';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

function About() {
  return (
    <Wrapper id='about'>
      <h1>About</h1>
      <p>Welcome to about page!</p>
    </Wrapper>
  );
}

export default About;