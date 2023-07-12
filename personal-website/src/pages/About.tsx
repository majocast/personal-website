import * as React from 'react';
import styled from 'styled-components';
import '../styles/About.css';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  justify-content: center;
  border-top: 2px solid goldenrod;
  border-bottom: 2px solid goldenrod;

  @media screen and (max-width: 767px) {
    display: flex;
    min-height: 100vh;
    width: 99vw;
    justify-content: unset;
    align-items: unset;
  }
`;

function About() {
  return (
    <Wrapper id='about'>
      <div className='textWrapper'>
        <div className='staticTxt'>CALL ME A</div>
        <ul className='dynamicTxts'>
          <li><span>UI/UX DESIGNER</span></li>
          <li><span>DEVELOPER</span></li>
          <li><span>NBA LOVER</span></li>
          <li><span>PHOTOGRAPHER</span></li>
        </ul>
      </div>
      <div className='about-container'>
        <span style={{
          color: 'green',
        }}>
          Majocast@DESKTOP-DD4G7NX
        </span> <span style={{
          color: 'purple',
        }}>
          MINGW64
        </span> <span style={{
          color: 'goldenrod',
        }}>
          ~
        </span>
        <br />
        <span>$ type about.txt<br /></span>
        <p className='about-text'>
          Back at the end of my 2018 Fall Semester of high school, just before submitting college admissions
          applications, I switched my major from Aerospace Engineering to Computer Science minutes before the
          submission deadline. Now in 2023, I have the honor and privelege to declare myself a Bachelor of 
          Science, Computer Science, as well as had the opportunity to work with and learn from
          industry professionals in seminar, team, and individual settings.
          <br/><br/>
          Currently I am focused on finding a position as an application developer or web developer
          and am working on expanding my skills in all aspects of web design and development. I am also 
          working on personal projects and expanding my reach via coding competitions and web developer
          meet ups.
          <br/><br/>
          When not at the computer, I'm usually playing basketball, hanging out with friends, exploring San Francisco 
          weight lifting, dabbling in film photography, or building a Gundam and/or Lego set.
        </p>
        $<span className='cursor'> |</span>
      </div>   
    </Wrapper>
  );
}

export default About;
