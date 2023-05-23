import React from 'react';
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