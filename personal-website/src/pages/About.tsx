import { useEffect, useState } from 'react';
import styled from 'styled-components';
import '../styles/Pages.css';
import '../styles/About.css';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  font-family: 'Lexend Deca', sans-serif;
  font-weight: 400;
`;

type DivId = 'about' | 'experience' | '';

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
          {(clickedDiv === 'about' || clickedDiv === '') && <div id='about-cont'>
            Back at the end of the 2018 Fall Semester, just before submitting college admissions
            applications, I switched my major from Aerospace Engineering to Computer Science. Now
            in 2023, I have the honor and privelege to declare myself a Bachelor of 
            Science, Computer Science, as well as had the opportunity to work with and learn from
            industry professionals in seminar, team, and individual settings.
            <br/><br/>
            When not at the computer, I'm usually playing basketball, hanging out with friends, weight
            lifting, dabbling in film photography, or building a Gundam.
          </div>}
          {clickedDiv === 'experience' && <div id='experience-cont'>
            <div>
              one
            </div>
            <div>
              two
            </div>
            <div>
              three
            </div>
          </div>}
        </div>
      </div>
    </Wrapper>
  );
}

export default About;
