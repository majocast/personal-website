import { useEffect, useState } from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import styled from 'styled-components';
import '../styles/About.css';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Lexend Deca', sans-serif;
  font-weight: 400;

  @media screen and (max-width: 767px) {
    display: flex;
    height: 250vh;
    width: 99vw;
    align-items: center;
  }
`;

type DivId = 'about' | 'experience' | '';

function About() {
  const [clickedDiv, setClickedDiv] = useState<DivId>('about');

  useEffect(() => {
    setClickedDiv('about');
    const currentSpans = document.getElementsByClassName('active');
    for(let i = 0; i < currentSpans.length; i++) {
      const element = currentSpans[i] as HTMLElement;
      element.classList.remove('active');
    }
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

    const target = event.target as HTMLElement;
    target.classList.add('active');
  };

  function openResume() {
    const pdfURL = 'https://docs.google.com/document/d/1O_zaQqqFf9zDP4WAGqniTCyJJEU4uBZTjo-c2TxhfDo/edit?usp=sharing';
    window.open(pdfURL, '_blank');
  }

  return (
    <Wrapper id='about'>
      <div className='about-container'>
        <div id='about-nav'>
          <span onClick={(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => clickHandler(e, 'about')}>about</span>
          <span onClick={(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => clickHandler(e, 'experience')}>experience</span>
          <span onClick={openResume}>
            resume
            <BiLinkExternal style={{width: '1.75rem'}}/>
          </span>
        </div>
        <div id='about-content'>
          {(clickedDiv === 'about' || clickedDiv === '') && <div id='about-cont'>
            <h2>ABOUT</h2>
            Back at the end of the 2018 Fall Semester, just before submitting college admissions
            applications, I switched my major from Aerospace Engineering to Computer Science. Now
            in 2023, I have the honor and privelege to declare myself a Bachelor of 
            Science, Computer Science, as well as had the opportunity to work with and learn from
            industry professionals in seminar, team, and individual settings.
            <br/><br/>
            Currently I am focused on finding a position as an application developer or web developer
            and am working on expanding my skills in all aspects of web design and development. I am also 
            working on personal projects and expanding my reach via coding competitions and web developer
            meet ups.
            <br/><br/>
            When not at the computer, I'm usually playing basketball, hanging out with friends, weight
            lifting, dabbling in film photography, or building a Gundam and/or Lego set.
          </div>}
          {clickedDiv === 'experience' && <div id='experience-cont'>
            <a className='exper-indiv' href='https://github.com/CSC-648-SFSU/csc648-02-sp2023-team04'>
              <h5>JANUARY 2023 - MAY 2023</h5>
              <h5>CSC 648 Term Project Frontend Developer - San Francisco State University</h5>
              <p>Computer Science course offered by SFSU that teaches about application design and 
                development in an emulation of a professional setting, having our professor, Henry Villar, acting as CEO.  
                Working in teams of 6-7 students, tasked to make an industry-grade Beta-level launch of 
                a crisis alert web application that would allow users to see Weather & Fire, Health,  
                and Security updates uploaded directly by county officials. Built using React, JavaScript, CSS, HTML and AWS.
              </p>                    
            </a>
            <a className='exper-indiv' href='https://docs.google.com/presentation/d/1wRMCkmz_hJRPeN2Y8goS941paV1aijaXyvsadcjWf9M/edit#slide=id.g13fada9bf12_3_86'>
              <h5>AUGUST 2022 - DECEMBER 2022</h5>
              <h5>Mentor/Grader - San Francisco State University, CoSE</h5>
              <p>Paid position, appointed by a cohort of professors who's aim is to aid students struggling to pass CSC 210,
                a class notoriously known for failing many students across many universities in the United States. Working in teams
                of 4, 3 of which were the Discussion Leaders and the final member being the professor, we would work to plan discussions
                and assist a group of 15 students per mentor in their journey through the class as tutors and graders. Class and discussions were taught in Java.
              </p>                    
            </a>
            <a className='exper-indiv' href='https://www.sfusd.edu/school/everett-middle-school'>
              <h5>JANUARY 2022 - MAY 2022</h5>
              <h5>Everett Middle School Teacher/TA - SFSU CSC 699 Learning By Teaching</h5>
              <p>Computer Science course and paid position offered by SFSU where students assist San Francisco Unified School District middle/high school teachers and 
                students in their classrooms to hone computing skills, improve soft skills, and aid younger students in their journey in learning how to code. Placed 
                at Everett Middle School in Downtown San Francisco, worked with Mr. Luis Reynoso to help a class of roughly 30 students learn about HTML, CSS, and JavaScript.
              </p>                    
            </a>
            <a className='exper-indiv' href='https://buildyourfuture.withgoogle.com/programs/computer-science-summer-institute#!overview'>
              <h5>JULY 2023 - AUGUST 2023</h5>
              <h5>Google Computer Science Summer Institute CSSI - Google @ CSU San Marcos</h5>
              <p>3-week long opportunity provided by Google to kickstart incoming freshmen via rapidly teaching HTML, CSS, JavaScript, and Google's Cloud
                 Service at California State University, San Marcos under the supervision of industry professionals, Google representatives, and upper 
                 division Computer Science students. Program concludes with the production and launching of a web application designed by teams of 4 students.
              </p>                    
            </a>
          </div>}
          <div id='experience-cont-mobile'>
            <h2>EXPERIENCE</h2>
            <a className='exper-indiv' href='https://github.com/CSC-648-SFSU/csc648-02-sp2023-team04'>
              <h5>JANUARY 2023 - MAY 2023</h5>
              <div className='inner-desc'>
                <h5>CSC 648 Term Project Frontend Developer - San Francisco State University</h5>
                <p>Computer Science course offered by SFSU that teaches about application design and 
                  development in an emulation of a professional setting, having our professor, Henry Villar, acting as CEO.  
                  Working in teams of 6-7 students, tasked to make an industry-grade Beta-level launch of 
                  a crisis alert web application that would allow users to see Weather & Fire, Health,  
                  and Security updates uploaded directly by county officials. Built using React, JavaScript, CSS, HTML and AWS.
                </p>                    
              </div>
            </a>
            <a className='exper-indiv' href='https://docs.google.com/presentation/d/1wRMCkmz_hJRPeN2Y8goS941paV1aijaXyvsadcjWf9M/edit#slide=id.g13fada9bf12_3_86'>
              <h5>AUGUST 2022 - DECEMBER 2022</h5>
              <div className='inner-desc'>
                <h5>Mentor/Grader - San Francisco State University, CoSE</h5>
                <p>Paid position, appointed by a cohort of professors who's aim is to aid students struggling to pass CSC 210,
                  a class notoriously known for failing many students across many universities in the United States. Working in teams
                  of 4, 3 of which were the Discussion Leaders and the final member being the professor, we would work to plan discussions
                  and assist a group of 15 students per mentor in their journey through the class as tutors and graders. Class and discussions were taught in Java.
                </p>                    
              </div>
            </a>
            <a className='exper-indiv' href='https://www.sfusd.edu/school/everett-middle-school'>
              <h5>JANUARY 2022 - MAY 2022</h5>
              <div className='inner-desc'>
                <h5>Everett Middle School Teacher/TA - SFSU CSC 699 Learning By Teaching</h5>
                <p>Computer Science course and paid position offered by SFSU where students assist San Francisco Unified School District middle/high school teachers and 
                  students in their classrooms to hone computing skills, improve soft skills, and aid younger students in their journey in learning how to code. Placed 
                  at Everett Middle School in Downtown San Francisco, worked with Mr. Luis Reynoso to help a class of roughly 30 students learn about HTML, CSS, and JavaScript.
                </p>                    
              </div>
            </a>
            <a className='exper-indiv' href='https://buildyourfuture.withgoogle.com/programs/computer-science-summer-institute#!overview'>
              <h5>JULY 2023 - AUGUST 2023</h5>
              <div className='inner-desc'>
                <h5>Google Computer Science Summer Institute CSSI - Google @ CSU San Marcos</h5>
                <p>3-week long opportunity provided by Google to kickstart incoming freshmen via rapidly teaching HTML, CSS, JavaScript, and Google's Cloud
                   Service at California State University, San Marcos under the supervision of industry professionals, Google representatives, and upper 
                   division Computer Science students. Program concludes with the production and launching of a web application designed by teams of 4 students.
                </p>                    
              </div>
            </a>
            <span onClick={openResume}>
            resume
            <BiLinkExternal style={{width: '1.75rem'}}/>
            </span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default About;
