/*
version: 1.
*/

import React from 'react';
import { useEffect } from 'react';
import { IconButton } from '@mui/material';
import { LinkedIn, GitHub } from '@mui/icons-material';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './pages/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';

function App() {
  useEffect(() => {
    document.title = 'Marc Castro';
  }, []);
  return (
    <>
    <Router>
      <NavBar />
        <div className='pages'>
          <Home />
          <About />
          <Experience />
          <Projects />
        </div>
      </Router>
      <div className='icons'>
      <IconButton
        style={{
          color: 'white',
          backgroundColor: 'white',
          scale: '0.9',
          margin: '5px',
        }}
        onClick={() => { window.open('https://www.linkedin.com/in/marcjgcastro/', '_blank', 'noreferrer'); }}
      >
        <LinkedIn style={{
          color: 'black',
          marginRight: '0',
          }}
        />
      </IconButton>
      <IconButton
        style={{
          color: 'white',
          backgroundColor:'white',
          scale: '0.9',
          margin: '5px',
        }}
        onClick={() => { window.open('https://www.linkedin.com/in/marcjgcastro/', '_blank', 'noreferrer'); }}
      >
        <GitHub style={{
          color: 'black',
          marginRight: '0',
          }}
        />
      </IconButton>
    </div>
    <div className='project-footer'>
      <p>Loosely designed via hand drawing and coded in Visual Studio Code by myself! Built with Node.js, the React framework,
      JavaScript, and HTML & CSS.
      </p>
    </div>
    </>
  );
}

export default App;
