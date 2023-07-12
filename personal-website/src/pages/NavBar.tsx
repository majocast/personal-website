import { BiLinkExternal } from 'react-icons/bi';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import '../styles/NavBar.css';

const StyledNav = styled.nav`
  display: flex;
  position: sticky;
  top: 0;
  width: 100%;
  gap: 2rem;
  padding: 0 1rem;
  height: 7.5vh;
  color: lightgray;
  background-color: #0d0d0d;
  align-items: center;
  justify-content: space-between;
  z-index: 10;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

function NavBar() {
  return (
    <StyledNav>
      <h1>MARC CASTRO</h1>
      <ul className='nav-contents'>
        <ScrollLink to='home' smooth={true} offset={-50}>
          <li id='home-li'>
            HOME
          </li>
        </ScrollLink>
        <ScrollLink to='about' smooth={true} offset={-75}>
          <li id='about-li'>
            ABOUT
          </li>
        </ScrollLink>
        <ScrollLink to='experience' smooth={true} offset={-75}>
          <li id='experience-li'>
            EXPERIENCE
          </li>
        </ScrollLink>
        <ScrollLink to='projects' smooth={true} offset={-50}>
          <li id='projects-li'>
            PROJECTS
          </li>
        </ScrollLink>
        <li id='resume-li'>
          <a href='https://docs.google.com/document/d/1O_zaQqqFf9zDP4WAGqniTCyJJEU4uBZTjo-c2TxhfDo/edit?usp=sharing'>
            RESUME
            <BiLinkExternal size={17.5} style={{marginLeft: '0.5rem'}}/>
          </a>
        </li>
      </ul>
    </StyledNav>
  );
}

export default NavBar;