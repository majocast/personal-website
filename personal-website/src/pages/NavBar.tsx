import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import '../styles/NavBar.css';

const StyledNav = styled.nav`
    position: fixed;
    width: 100%;
    color: white;
    background-color: black;
    padding: 0;
    flex-direction: column;
    align-items: center;
`;

function NavBar() {
  useEffect(() => {
    const ScrollHandler = () => {
      const scrollPosition = window.scrollY;
      console.log("currentScroll: " + scrollPosition);
      const scrollThreshold = 500;
    
      const hiddenHomeLI = document.querySelector('#home-li') as HTMLElement | null;
      const hiddenAboutLI = document.querySelector('#about-li') as HTMLElement | null;
      const hiddenProjectsLI = document.querySelector('#projects-li') as HTMLElement | null;
    
      if(hiddenHomeLI && scrollPosition > scrollThreshold) {
        hiddenHomeLI?.classList.add('show');
      } else {
        hiddenHomeLI?.classList.remove('show');
      }

      //500 - 1000
      if(hiddenAboutLI && (scrollPosition < scrollThreshold * 1.5 || scrollPosition > scrollThreshold * 3)) {
        hiddenAboutLI?.classList.add('show');
      } else {
        hiddenAboutLI?.classList.remove('show');
      }

      // greater than 1000
      if(hiddenProjectsLI && scrollPosition < scrollThreshold * 3) {
        hiddenProjectsLI?.classList.add('show');
      } else {
        hiddenProjectsLI?.classList.remove('show');
      }
    };

    window.addEventListener('scroll', ScrollHandler);

    return () => {
      window.removeEventListener('scroll', ScrollHandler);
    };
  }, []);

  return (
    <StyledNav>
      <div className='container'>
        <ul className='nav-contents'>
          <ScrollLink to='about' smooth={true}>
            <li id='about-li'>
              About
            </li>
          </ScrollLink>
          <ScrollLink to='home' smooth={true}>
            <li id='home-li'>
              Home
            </li>
          </ScrollLink>
          <ScrollLink to='projects' smooth={true}>
            <li id='projects-li'>
              Projects
            </li>
          </ScrollLink>
        </ul>
      </div>
    </StyledNav>
  );
}

export default NavBar;