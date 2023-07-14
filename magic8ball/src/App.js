import React from 'react';
import magic8ball from './components/images/magic8ball.png';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Magic <span>8</span> Ball
        </h1>
        <img className="ball" src={magic8ball} alt="magic8ball"/>
        <p>Enter the temperature to get suggestions on what to wear</p>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control type="email" />
          <br />
          <Button as="input" type="submit" value="Guess my outfit" />{' '}
        </Form.Group>
      </header>
    </div>
  );
}

export default App;
