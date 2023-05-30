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
  border: 5px solid black;

  @media screen and (max-width: 800px) {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 5px solid black;
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
        <div id='mid-text'>

        </div>
        <div id='profile-picture'>
    
        </div>
    </Wrapper>
  );
}

export default Home;