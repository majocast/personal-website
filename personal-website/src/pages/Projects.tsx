import React, { useState } from 'react';
import styled from 'styled-components';
import '../styles/Projects.css';
import { SiWebpack, SiNetlify } from 'react-icons/si';
import { BiLogoTypescript, 
  BiLogoReact, 
  BiLogoCss3, 
  BiLogoHtml5, 
  BiLogoJavascript,
  BiLogoPhp,
  BiLogoAws,
  BiLogoPostgresql
} from 'react-icons/bi';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-bottom: 20px;

  @media screen and (max-width: 767px) {
    justify-content: unset;
    height: 200vh;
    display: flex;
    position: relative;
  }
`;

function Projects() {
  return (
    <Wrapper id='projects'>
      <h1>SELECTED PROJECTS</h1>
      <div id='gridContainer'>
        <a className='project' href='https://github.com/majocast/personal-website'>
          <div className='projectImg' id='MP-Background' />
          <div className='projectDesc'>
            <h1>marccastro.netlify.app</h1>
            <div className='skills'>
              <BiLogoReact size={50} title='React'/>
              <BiLogoHtml5 size={50} title='HTML5'/>
              <BiLogoCss3 size={50} title='CSS3'/>
              <BiLogoTypescript size={50} title='TypeScript'/>
              <SiNetlify size={50} title='Netlify'/>
            </div>
            <p>Solo developed portfolio written over the span of 1 month as a means of
              learning TypeScript and reinforcing understanding of the React framework.
              Process included sketches, rough drafting, quality assurance and user 
              central design review via having colleagues, recruiters and advisors 
              navigate the website.
            </p>
          </div>
        </a>
        <a className='project' href='https://github.com/CSC-648-SFSU/csc648-02-sp2023-team04'>
          <div className='projectDesc'>
            <h1>Crisis Connect</h1>
            <div className='skills'>
              <BiLogoReact size={50} title='React'/>
              <BiLogoHtml5 size={50} title='HTML5'/>
              <BiLogoCss3 size={50} title='CSS3'/>
              <BiLogoJavascript size={50} title='JavaScript'/>
              <BiLogoAws size={50} title='AWS'/>
            </div>
            <p>A industry-grade, Beta-level launch of a crisis alert web application that 
              shall allow you to see Weather & Fire, Health, and Security updates uploaded 
              directly by county officials. You can view and filter the map for updates across 
              California, register/login to access capabilities to recieve personalized updates, 
              and more.
            </p>
          </div>
          <div className='projectImg' id='CC-Background' />
        </a>
        <a className='project' href='https://github.com/csc-667-spring-2023-roberts/term-project-leeroyjenkins'>
          <div className='projectImg' id='PWA-Background' />
          <div className='projectDesc'>
            <h1>Poker Web App</h1>
            <div className='skills'>
              <BiLogoHtml5 size={50} title='HTML5'/>
              <BiLogoCss3 size={50} title='CSS3'/>
              <BiLogoJavascript size={50} title='JavaScript'/>
              <SiWebpack size={50} title='WebPack'/>
              <BiLogoPostgresql size={50} title='PostgreSQL'/>
            </div>
            <p>Online Poker realm where users can create and join lobbies to play with friends or strangers in a
              couple games of Texas Hold'em Poker! Once logged in or registered, users shall be able to join a game and 
              see who is still in the game, the board in its entirety, and a text chat to communicate with others.
            </p>
          </div>
        </a>
        <a className='project' href='https://github.com/majocast/OnTheGrind/tree/main'>
          <div className='projectDesc'>
            <h1>On The Grind</h1>
            <div className='skills'>
              <BiLogoHtml5 size={50} title='HTML5'/>
              <BiLogoCss3 size={50} title='CSS3'/>
              <BiLogoJavascript size={50} title='JavaScript'/>
              <BiLogoPhp size={50} title='PHP'/>
            </div>
            <p>An e-commerce web application for coffee! You can shop around our home page, go about 
              looking at our full product listing, view the team in the about page. If you have any 
              questions, view our FAQ page to see if others had similar questions, view your cart, and more.
            </p>
          </div>
          <div className='projectImg' id='OTG-Background' />
        </a>
        <a className='project' href='https://github.com/majocast/Sorting-Visualizer'>
          <div className='projectImg' id='SV-Background' />
          <div className='projectDesc'>
            <h1>Sorting Visualizer</h1>
            <div className='skills'>
              <BiLogoHtml5 size={50} title='HTML5'/>
              <BiLogoCss3 size={50} title='CSS3'/>
              <BiLogoJavascript size={50} title='JavaScript'/>
            </div>
            <p>Sorting visualizer to display different sorting algorithms. Sorting Algorithms include 
              bubble sort, quick sort, insertion sort, and heap sort, all of which are tasked to sort a
              randomly generated array of a user given size. Color coordination of changing
              values applies to elements to help display the algorithm in action.
            </p>
          </div>
        </a>
        <a className='project' href='https://github.com/majocast/8-Bit-Shooter'>
          <div className='projectDesc'>
            <h1>8-Bit Shooter</h1>
            <div className='skills'>
              <BiLogoHtml5 size={50} title='HTML5'/>
              <BiLogoCss3 size={50} title='CSS3'/>
              <BiLogoJavascript size={50} title='JavaScript'/>
            </div>
            <p>A little web mini game where enemies will spawn from two doors, and you will have to fight them
              off in order to survive for as long as you can! The controls are simple, WASD, with clicking being
              the shooting mechanic. Written primarily in JavaScript. 
            </p>
          </div>
          <div className='projectImg' id='EBS-Background' />
        </a>
      </div>
    </Wrapper>
  );
}

export default Projects;

/*<span>CrisisConnect</span>
            <span>React</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>AWS</span>
            <p>A industry-grade, Beta-level launch of a crisis alert web application that shall allow you 
              to see Weather & Fire, Health, and Security updates uploaded directly by county officials. 
              You can view and filter the map for updates across California, 
              register/login to access capabilities to recieve personalized updates, and more.
            </p>*/