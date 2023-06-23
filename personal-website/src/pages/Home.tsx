import React, {useEffect} from 'react';
import { Avatar, IconButton } from '@mui/material';
import { ArrowBackIosNew, LinkedIn, GitHub } from '@mui/icons-material';
import styled from 'styled-components';
import '../styles/Pages.css';
import '../styles/Home.css';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-mask-image: linear-gradient(to top, transparent 1%, black 5%);
  mask-image: linear-gradient(to top, transparent 1%, black 5%);

  @media screen and (max-width: 800px) {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;


function Home() {
  useEffect(() => {
    const ScrollHandler = () => {
      const scrollPosition = window.scrollY;
      console.log("currentScroll: " + scrollPosition);
      const scrollThreshold = 400;
    
      const hiddenLIElement = document.querySelector('#profile-picture') as HTMLElement | null;
    
      if(hiddenLIElement && scrollPosition > scrollThreshold) {
        hiddenLIElement?.classList.add('expand');
      } else {
        hiddenLIElement?.classList.remove('expand');
      }
    };

    window.addEventListener('scroll', ScrollHandler);

    return () => {
      window.removeEventListener('scroll', ScrollHandler);
    };
  }, []);
  return (
    <Wrapper id='home'>
      <div id='profile-picture'>
        <div id='photo-container'></div>
      </div>
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
            }}
            onClick={() => { window.open('https://www.linkedin.com/in/marcjgcastro/', '_blank', 'noreferrer'); }}
          >
            <GitHub style={{
              width: '100%',
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