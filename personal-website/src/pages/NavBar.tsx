
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
        <ScrollLink to='about' smooth={true}>
          <li id='about-li'>
            ABOUT
          </li>
        </ScrollLink>
        <ScrollLink to='home' smooth={true}>
          <li id='home-li'>
            HOME
          </li>
        </ScrollLink>
        <ScrollLink to='projects' smooth={true}>
          <li id='projects-li'>
            PROJECTS
          </li>
        </ScrollLink>
      </ul>
    </StyledNav>
  );
}

export default NavBar;