import React, { useState } from 'react';
import magic8ball from '../images/magic8ball.png';

function CurrentTemp() {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCurrentTemp = (event) => {
    event.preventDefault();
    console.log(event.target.elements.temperature.value);
    setIsAnimating(true);
  }
  return (
    <div>
       
    <form onSubmit={handleCurrentTemp}>
    <img className={isAnimating ? 'animated-image' : ''} src={magic8ball} alt="magic8ball" />
    <p>Enter your zipcode</p>
      <input name="temperature" placeholder="90210" type="text" minLength={5} maxLength={5} required />
      <br />
      <button type="submit">What should I wear?</button>
    </form>
    </div>
  )
}

export default CurrentTemp;