import React, { useEffect, useState} from 'react';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import '../styles/NavBar.css';

const StyledNav = styled.nav`
    position: fixed;
    width: 100%;
    color: white;
    background-color: black;
    padding-top: 5px;
`;

function NavBar() {
  useEffect(() => {
    const ScrollHandler = () => {
      const scrollPosition = window.scrollY;
      console.log("currentScroll: " + scrollPosition);
      const scrollThreshold = 50;
    
      const hiddenLIElement = document.querySelector('.hidden-li') as HTMLElement | null;
    
      if(hiddenLIElement && scrollPosition > scrollThreshold) {
        hiddenLIElement?.classList.add('hide');
      } else {
        hiddenLIElement?.classList.remove('hide');
      }
    };

    window.addEventListener('scroll', ScrollHandler);

    return () => {
      window.removeEventListener('scroll', ScrollHandler);
    };
  }, []);

  return (
    <StyledNav>
      <ul className='nav-contents'>
        <li>
          <ScrollLink to='about' smooth={true}>
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink className='hidden-li' to='home' smooth={true}>
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