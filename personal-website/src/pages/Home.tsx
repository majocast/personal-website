import * as React from 'react';
import { IconButton } from '@mui/material';
import { LinkedIn, GitHub } from '@mui/icons-material';
import styled from 'styled-components';
import '../styles/Home.css';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  margin-bottom: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-mask-image: linear-gradient(to top, transparent 1%, black 5%);
  mask-image: linear-gradient(to top, transparent 1%, black 5%);
  animation: fadeUp 2s;

  @media screen and (max-width: 767px) {
    width: 100vw;
    justify-content: unset;
    align-items: unset;
    height: unset;
  }
`;


function Home() {
  return (
    <Wrapper id='home'>
      <div id='photo-container' />
      <div id='mid-text'>
        <h1>MARC CASTRO</h1>
        <h2>UX/UI Designer & Developer</h2>
        <p>Los Angeles born, San Francisco based.</p>
        <div>
          <IconButton
            style={{
              color: 'white',
              backgroundColor: 'white',
              scale: '0.9',
              margin: '5px',
              marginLeft: '0',
              transition: 'color 0.3s, background-color 0.3',
            }}
            onMouseEnter={(e) => {
              const element = e.currentTarget as HTMLButtonElement;
              element.style.color = 'goldenrod';
              element.style.backgroundColor = 'goldenrod';
            }}   
            onMouseLeave={(e) => {
              const element = e.currentTarget as HTMLButtonElement;
              element.style.color = 'white';
              element.style.backgroundColor = 'white';
            }}  
            onClick={() => { window.open('https://www.linkedin.com/in/marcjgcastro/', '_blank', 'noreferrer'); }}
          >
            <LinkedIn style={{
              color: 'black',
              marginRight: '0',
              }}
            />
          </IconButton>
          <IconButton
            style={{
              color: 'white',
              backgroundColor:'white',
              scale: '0.9',
              margin: '5px',
              transition: 'color 0.3s, background-color 0.3s',
            }}
            onMouseEnter={(e) => {
              const element = e.currentTarget as HTMLButtonElement;
              element.style.color = 'goldenrod';
              element.style.backgroundColor = 'goldenrod';
            }}   
            onMouseLeave={(e) => {
              const element = e.currentTarget as HTMLButtonElement;
              element.style.color = 'white';
              element.style.backgroundColor = 'white';
            }}  
            onClick={() => { window.open('https://github.com/majocast', '_blank', 'noreferrer'); }}
          >
            <GitHub style={{
              color: 'black',
              marginRight: '0',
              }}
            />
          </IconButton>
        </div>
      </div>
    </Wrapper>
  );
}

export default Home;