import { useEffect, useState } from 'react';
import styled from 'styled-components';
import '../styles/Pages.css';
import '../styles/About.css';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

type DivId = 'about' | 'experience' | '';

function About() {
  const [clickedDiv, setClickedDiv] = useState<DivId>('about');

  useEffect(() => {
    setClickedDiv('about');
  }, []);

  const clickHandler = (divId: DivId): void => {
    setClickedDiv(divId);
  };

  return (
    <Wrapper id='about'>
      <div className='about-container'>
        <div id='about-nav'>
          <div onClick={() => clickHandler('about')}>about</div>
          <div onClick={() => clickHandler('experience')}>experience</div>
        </div>
        <div id='about-content'>
          <div className='display-cont'>
            {(clickedDiv === 'about' || clickedDiv === '') && <div id='about-cont'>About Content</div>}
            {clickedDiv === 'experience' && <div id='experience-cont'>Experience Content</div>}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default About;
