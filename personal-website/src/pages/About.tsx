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
const originalHTML: string[] = ['about', 'experience']; 

function About() {
  const [clickedDiv, setClickedDiv] = useState<DivId>('about');

  useEffect(() => {
    setClickedDiv('about');
    const spans = document.getElementById('about-nav');
    if(spans) {
      const aboutChild = spans.querySelector(':first-child');
      if(aboutChild) {
        aboutChild.classList.add('active');
      }
    }
  }, []);

  const clickHandler = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>, divId: DivId): void => {
    const currentDiv = document.getElementById(clickedDiv + '-cont');
    const currentSpans = document.getElementsByClassName('active');
    for(let i = 0; i < currentSpans.length; i++) {
      const element = currentSpans[i] as HTMLElement;
      element.classList.remove('active');
    }
    console.log(currentDiv);
    if(clickedDiv !== divId) {
      currentDiv?.classList.remove('display');
    }
    setClickedDiv(divId);
    document.getElementById(clickedDiv + '-cont')?.classList.add('display');
    console.log(document.getElementById(clickedDiv + '-cont'));
    console.log(document.getElementById(clickedDiv + '-cont')?.classList);

    const target = event.target as HTMLElement;
    target.classList.add('active');
  };

  return (
    <Wrapper id='about'>
      <div className='about-container'>
        <div id='about-nav'>
          <span onClick={(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => clickHandler(e, 'about')}>about</span>
          <span onClick={(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => clickHandler(e, 'experience')}>experience</span>
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
