import React, { Component } from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import BallShake from './components/ball/BallShake';
import CurrentTemp from './components/form/Form';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Magic <span>8</span> Ball
        </h1>
        <BallShake />
        <p>Type the temperature below:</p>
        <CurrentTemp form-control />
      </header>
    </div>
  );
}

export default App;
