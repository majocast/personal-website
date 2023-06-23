import React from 'react';
import { IconButton } from '@mui/material';
import { LinkedIn, GitHub } from '@mui/icons-material';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './pages/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  return (
    <>
    <Router>
        <NavBar />
        <div className='pages'>
          <Home/>
          <About />
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
          width: '100%',
          color: 'black',
          marginRight: '0',
          }}
        />
      </IconButton>
    </div>
    </>
  );
}

export default App;
