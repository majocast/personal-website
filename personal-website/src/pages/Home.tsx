import React, {useEffect} from 'react';
import styled from 'styled-components';
import '../styles/Pages.css';
import '../styles/Home.css';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;


function Home() {
  useEffect(() => {
    const ScrollHandler = () => {
      const scrollPosition = window.scrollY;
      console.log("currentScroll: " + scrollPosition);
      const scrollThreshold = 50;
    
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
      <div className='section'>
        <p>Welcome to home page!</p>
      </div>
      <div className='section'>
        <div id='profile-picture'>

        </div>
      </div>
      <div className='section'>

      </div>
    </Wrapper>
  );
}

export default Home;