import React from 'react';
import styled from 'styled-components';
import '../styles/Projects.css';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

function Projects() {
  return (
    <Wrapper id='projects'>
      <div id='projects-header'>
        <h1>PROJECTS</h1>
      </div>
      <div id='projects-container'>
        <div className='column'>
          <a className='project' href='https://github.com/majocast/personal-website'>
            <div className='project-cover'>My Portfolio</div>
            <div className='project-back'>
              <div id='MP-Background'/>
            </div>
          </a>
          <a className='project' href='https://github.com/CSC-648-SFSU/csc648-02-sp2023-team04'>
            <div className='project-cover'><span>Crisis Connect</span></div>
            <div className='project-back'>
              <div id='CC-Background'/>
            </div>
          </a>
          <a className='project' href='https://github.com/majocast/OnTheGrind/tree/main'>
            <div className='project-cover'><span>On The Grind</span></div>
            <div className='project-back'>
              <div id='OTG-Background'/>
            </div>
          </a>
        </div>
        <div className='column'>
          <a className='project' href='https://github.com/majocast/Sorting-Visualizer'>
            <div className='project-cover'>Sorting Visualizer</div>
            <div className='project-back'>
              <div id='SV-Background'/>
            </div>
          </a>
          <a className='project' href='https://github.com/majocast/8-Bit-Shooter'>
            <div className='project-cover'>8-Bit Shooter</div>
            <div className='project-back'>
              <div id='EBS-Background'/>
            </div>
          </a>
          <a className='project' href='https://github.com/csc-667-spring-2023-roberts/term-project-leeroyjenkins'>
            <div className='project-cover'><span>Poker WebApp</span></div>
            <div className='project-back'>
              <div id='PWA-Background'/>
            </div>
          </a>
        </div>
      </div>
    </Wrapper>
  );
}

export default Projects;