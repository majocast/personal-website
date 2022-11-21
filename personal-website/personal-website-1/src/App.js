import React, { useState } from 'react';
import './App.css';
import {Button} from '@mui/material';

function clickAlert() {
  alert("you clicked the other button!");
}

function App() {
  return (
    <>
      <div className="App">
        <h1> Hello World :D</h1>
        <Button variant="outlined" 
          onClick={() => {
            alert('you clicked me!');
          }}
        >
          click me
        </Button>
      </div>
      <div>
        <Button variant="contained" onClick={clickAlert}>
          click me too!
        </Button>
      </div>
    </>
  );
}

export default App;

