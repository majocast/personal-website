import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './pages/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  return (
      <Router>
        <NavBar />

        <div className='pages'>
          <Home/>
          <About />
          <Projects />
        </div>
      </Router>
  );
}

export default App;
