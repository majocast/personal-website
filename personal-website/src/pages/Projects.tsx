import React from 'react';
import styled from 'styled-components';
import '../styles/Projects.css';
import { SiAxios, SiExpress, SiRender } from 'react-icons/si';
import { BiLogoTypescript, 
  BiLogoMongodb,
  BiLogoReact, 
  BiLogoCss3, 
  BiLogoHtml5, 
  BiLogoJavascript,
  BiLogoBootstrap,
  BiLogoAws,
  BiLogoNodejs,
  BiLogoSpotify,
  BiLogoTailwindCss
} from 'react-icons/bi';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-bottom: 20px;
  margin-top: 20px;
  border-top: 2px solid goldenrod;

  @media screen and (max-width: 767px) {
    display: flex;
    align-items: center;
  }
`;

function Projects() {
  return (
    <Wrapper id='projects'>
      <h1>SELECTED PROJECTS</h1>
      <div id='gridContainer'>
        <a className='project' href='https://github.com/majocast/personal-website'>
          <div className='projectImg' id='MP-Background' />
          <div className='projectDesc'>
            <h1>marccastro.netlify.app</h1>
            <div className='skills'>
              <BiLogoReact size={50} title='React'/>
              <BiLogoHtml5 size={50} title='HTML5'/>
              <BiLogoCss3 size={50} title='CSS3'/>
              <BiLogoTypescript size={50} title='TypeScript'/>
              <SiRender size={50} title='Render'/>
            </div>
            <p>Solo developed portfolio written over the span of 1 month as a means of
              learning TypeScript and reinforcing understanding of the React framework.
              Process included sketches, rough drafting, quality assurance and user 
              central design review via having colleagues, recruiters and advisors 
              navigate the website.
            </p>
          </div>
        </a>
        <a className='project' href='https://onthegrind.onrender.com/'>
          <div className='projectDesc'>
            <h1>On The Grind</h1>
            <div className='skills'>
              <BiLogoMongodb size={50} title='MongoDB'/>
              <SiExpress size={50} title='Express'/>
              <BiLogoReact size={50} title='React'/>
              <BiLogoNodejs size={50} title='Node.js' />
              <BiLogoHtml5 size={50} title='HTML5'/>
              <BiLogoJavascript size={50} title='JavaScript'/>
              <BiLogoTailwindCss size={50} title='Tailwind CSS'/>
              <SiAxios size={50} title='Axios'/>
            </div>
            <p>A full stack e-commerce website that allows users to view the products that the company
              known as "On The Grind" have to offer! Users can navigate the page, sign in or create an account,
              add items to their cart, place an order, and so much more. 
            </p>
          </div>
          <div className='projectImg' id='OTG-Background' />
        </a>
        <a className='project' href='https://semiwrapped.onrender.com'>
          <div className='projectImg' id='SW-Background' />
          <div className='projectDesc'>
            <h1>SemiWrapped</h1>
            <div className='skills'>
              <BiLogoReact size={50} title='React'/>
              <BiLogoHtml5 size={50} title='HTML5'/>
              <BiLogoCss3 size={50} title='CSS3'/>
              <BiLogoJavascript size={50} title='JavaScript'/>
              <BiLogoBootstrap size={50} title='Bootstrap' />
              <SiAxios size={50} title='Axios'/>
              <SiExpress size={50} title='Express'/>
              <BiLogoSpotify size={50} title='Spotify'/>
              <SiRender size={50} title='Render'/>
            </div>
            <p>
              A web application made using the Spotify API that allows users to log in
              with their spotify premium account and look through the past 6 months of
              data in a concise and sorted manner. Users shall be able to see their
              genre pool and top artists and songs. It is currently awaiting quota
              extension from Spotify.
            </p>
          </div>
        </a>
        <a className='project' href='https://github.com/CSC-648-SFSU/csc648-02-sp2023-team04'>
          <div className='projectDesc'>
            <h1>Crisis Connect</h1>
            <div className='skills'>
              <BiLogoReact size={50} title='React'/>
              <BiLogoHtml5 size={50} title='HTML5'/>
              <BiLogoCss3 size={50} title='CSS3'/>
              <BiLogoJavascript size={50} title='JavaScript'/>
              <BiLogoAws size={50} title='AWS'/>
            </div>
            <p>A industry-grade, Beta-level launch of a crisis alert web application that 
              shall allow you to see Weather & Fire, Health, and Security updates uploaded 
              directly by county officials. You can view and filter the map for updates across 
              California, register/login to access capabilities to recieve personalized updates, 
              and more.
            </p>
          </div>
          <div className='projectImg' id='CC-Background' />
        </a>
        <a className='project' href='https://majocast.github.io/weather-app-react/'>
          <div className='projectImg' id='WA-Background' />
          <div className='projectDesc'>
            <h1>Weather App</h1>
            <div className='skills'>
              <BiLogoHtml5 size={50} title='HTML5'/>
              <BiLogoCss3 size={50} title='CSS3'/>
              <BiLogoJavascript size={50} title='JavaScript'/>
              <SiAxios size={50} title='Axios'/>
            </div>
            <p>A little weather app that allows for city search using the openweathermap.org Weather API.
              Website displays the current temperature, the cloud coverage, any weather like thunderstorms
              or rain, humidity, and wind speed. It also displays the resulting city from the search.
            </p>
          </div>
        </a>
      </div>
    </Wrapper>
  );
}

export default Projects;