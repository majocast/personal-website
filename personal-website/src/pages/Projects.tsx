import React from 'react';
import styled from 'styled-components';
import '../styles/Projects.css';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
`;

function Projects() {
  return (
    <Wrapper id='projects'>
      <div id='projects-header'>
        <h1>SELECTED PROJECTS</h1>
      </div>
      <div id='projects-container'>
        <div className='column'>
          <a className='project' href='https://github.com/majocast/personal-website'>
            <div className='project-cover'>
              <span>My Portfolio</span>
              <span>React</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>TypeScript</span>
              <p>Solo developed portfolio written over the span of 1 month as a means of
                learning TypeScript and reinforcing understanding of the React framework.
                Process included sketches, rough drafting, quality assurance and user 
                central design review via having colleagues, recruiters and advisors 
                navigate the website.  
              </p>
            </div>
            <div className='project-back'>
              <div id='MP-Background'/>
            </div>
          </a>
          <a className='project' href='https://github.com/CSC-648-SFSU/csc648-02-sp2023-team04'>
            <div className='project-cover'>
              <span>CrisisConnect</span>
              <span>React</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>AWS</span>
              <p>A industry-grade, Beta-level launch of a crisis alert web application that shall allow you 
                to see Weather & Fire, Health, and Security updates uploaded directly by county officials. 
                You can view and filter the map for updates across California, 
                register/login to access capabilities to recieve personalized updates, and more.
              </p>
            </div>
            <div className='project-back'>
              <div id='CC-Background'/>
            </div>
          </a>
          <a className='project' href='https://github.com/majocast/OnTheGrind/tree/main'>
            <div className='project-cover'>
              <span>On The Grind</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>PHP</span>
              <p>An e-commerce web application for coffee! You can shop around our home page, go about 
                looking at our full product listing, view the team in the about page. If you have any 
                questions, view our FAQ page to see if others had similar questions, view your cart, and more.
              </p>
            </div>
            <div className='project-back'>
              <div id='OTG-Background'/>
            </div>
          </a>
        </div>
        <div className='column'>
          <a className='project' href='https://github.com/majocast/Sorting-Visualizer'>
            <div className='project-cover'>
              <span>Sorting Visualizer</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <p>Sorting visualizer to display different sorting algorithms. Sorting Algorithms include 
                bubble sort, quick sort, insertion sort, and heap sort, all of which are tasked to sort a
                randomly generated array of a user given size. Color coordination of changing
                values applies to elements to help display the algorithm in action.
              </p>
            </div>
            <div className='project-back'>
              <div id='SV-Background'/>
            </div>
          </a>
          <a className='project' href='https://github.com/majocast/8-Bit-Shooter'>
            <div className='project-cover'>
              <span>8-Bit Shooter</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <p>A little web mini game where enemies will spawn from two doors, and you will have to fight them
                off in order to survive for as long as you can! The controls are simple, WASD, with clicking being
                the shooting mechanic. Written primarily in JavaScript. 
              </p>
            </div>
            <div className='project-back'>
              <div id='EBS-Background'/>
            </div>
          </a>
          <a className='project' href='https://github.com/csc-667-spring-2023-roberts/term-project-leeroyjenkins'>
            <div className='project-cover'>
              <span>Poker Web App</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <p>Online Poker realm where users can create and join lobbies to play with friends or strangers in a
                couple games of Texas Hold'em Poker! Once logged in or registered, users shall be able to join a game and 
                see who is still in the game, the board in its entirety, and a text chat to communicate with others.
              </p>
            </div>
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