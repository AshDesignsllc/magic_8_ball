import React, { Component } from 'react';
import magic8ball from './components/images/magic8ball.png';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Shake } from 'reshake'

// class App extends Component {
//   render () {
//     return (
//       <Shake 
//         h={74}
//         v={5}
//         r={3}
//         dur={30}
//         int={10}
//         max={100}
//         fixed={true}
//         fixedStop={false}
//         freez={false}>
//         <h1>&lt;Shake /&gt;</h1>
//       </Shake>
//     )
//   }
// }


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Magic <span>8</span> Ball
        </h1>
        <img className="ball" src={magic8ball} alt="magic8ball"/>
        <p>Type the temperature below:</p>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control type="number" placeholder="75" />
          <br />
          <Button as="input" type="submit" value="Guess my outfit" />{' '}
        </Form.Group>
      </header>
    </div>
  );
}

export default App;
