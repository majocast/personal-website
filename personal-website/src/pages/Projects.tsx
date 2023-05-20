import React from 'react';
import styled from 'styled-components';
import '../styles/Projects.css';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

function Projects() {
  return (
    <Wrapper id='projects'>
      <h1>Projects</h1>
      <p>Welcome to projects page!</p>
    </Wrapper>
  );
}

export default Projects;