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
      <h1>Home</h1>
      <p>Welcome to home page!</p>
      <div id='profile-picture'>
        
      </div>
    </Wrapper>
  );
}

export default Home;