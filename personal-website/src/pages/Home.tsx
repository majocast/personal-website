import React, {useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
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
      </div>
    </Wrapper>
  );
}

export default Home;