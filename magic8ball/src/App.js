import React from 'react';
import './App.css';
import SearchZipcode from './components/form/Form';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Magic <span>8</span> Ball
        </h1>
        <SearchZipcode />
      </header>
    </div>
  );
}

export default App;
