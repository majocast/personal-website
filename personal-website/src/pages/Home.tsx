import React, {useEffect} from 'react';
import { IconButton } from '@mui/material';
import { LinkedIn, GitHub } from '@mui/icons-material';
import styled from 'styled-components';
import '../styles/Home.css';

const Wrapper = styled.div`
  height: 90vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-mask-image: linear-gradient(to top, transparent 1%, black 5%);
  mask-image: linear-gradient(to top, transparent 1%, black 5%);

  @media screen and (max-width: 767px) {
    width: 100vw;
    height: 60vh;
    display: flex;
    position: relative;
    flex-direction: column;
    -webkit-mask-image: unset;
    mask-image: unset;
  }
`;


function Home() {
  useEffect(() => {
    const ScrollHandler = () => {
      const scrollPosition = window.scrollY;
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