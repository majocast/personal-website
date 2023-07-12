import * as React from 'react';
import styled from 'styled-components';
import '../styles/Experience.css';

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  animation: fadeIn 1s;

  @media screen and (max-width: 767px) {
    display: flex;
    min-height: 100vh;
    width: 99vw;
    justify-content: unset;
    align-items: unset;
  }
`;

const Experience = () => {
  return (
    <Wrapper id='experience'>
      <h1>EXPERIENCE</h1>
      <div className='exper-container'>
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
      </div>
    </Wrapper>
  )
}

export default Experience;