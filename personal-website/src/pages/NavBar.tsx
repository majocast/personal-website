import React from 'react';
import styled from 'styled-components';
import { Link as ScrollLink, animateScroll } from 'react-scroll';
import '../styles/NavBar.css';

const StyledNav = styled.nav`
    position: fixed;
    width: 100%;
    color: white;
    background-color: black;
    padding-top: 5px;
`;

function NavBar() {
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  }
  return (
    <StyledNav>
      <ul className='nav-contents'>
        <li>
          <ScrollLink to='about' smooth={true}>
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to='home' smooth={true} onClick={scrollToTop}>
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to='projects' smooth={true}>
            Projects
          </ScrollLink>
        </li>
      </ul>
    </StyledNav>
  );
}

export default NavBar;