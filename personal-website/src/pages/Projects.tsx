import React from 'react';
import styled from 'styled-components';
import '../styles/Projects.css';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  border-top: 2px solid white;
`;

function Projects() {
  return (
    <Wrapper id='projects'>
      <div id='projects-header'>
        <h1>Projects</h1>
      </div>
      <div id='projects-container'>
        <div className='column'>
          <div className='project'>
            <div className='project-cover'></div>
            <div className='project-back'></div>
          </div>
          <div className='project'></div>
          <div className='project'></div>
        </div>
        <div className='column'>
          <div className='project'></div>
          <div className='project'></div>
          <div className='project'></div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Projects;