import React, { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      
      
    </>
  );
}

export default App;

