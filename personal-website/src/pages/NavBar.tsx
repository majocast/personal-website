import React, { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
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
    z-index: 10;
`;

function NavBar() {
  useEffect(() => {
    const ScrollHandler = () => {
      const scrollPosition = window.scrollY;
      console.log("currentScroll: " + scrollPosition);
      const scrollThreshold = 400;
    
      const hiddenHomeLI = document.querySelector('#home-li') as HTMLElement | null;
          
      if(hiddenHomeLI && scrollPosition > scrollThreshold) {
        hiddenHomeLI?.classList.add('show');
      } else {
        hiddenHomeLI?.classList.remove('show');
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