import React, { useState } from 'react';
import magic8ball from '../images/magic8ball.png';
import axios from 'axios';



function SearchZipcode() {
  const [data, setData] = useState({});
  const [zipcode, setZipcode] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=6172f7a25d3cc3973f5d38afbf0cb5d4`;

  const [isAnimating, setIsAnimating] = useState(false);
  const handleSetZipcode = (event) => {
    event.preventDefault();
    setIsAnimating(true);
    if (event.target.zipcode.value === 'submit') {
      axios.get(url).then((response) => {
          setData(response.data);
          console.log(response.data);
  })
}
  }
  return (
    <div>
      <form id="Form" onSubmit={handleSetZipcode}>
        <img className={isAnimating ? 'animated-image' : ''} src={magic8ball} alt="magic8ball" />
        <p>Enter your zipcode</p>
        <input 
        value={zipcode}
        onChange={event => setZipcode(event.target.value)}
        name="zipcode" 
        placeholder="90210" 
        type="text" 
        minLength={5} 
        maxLength={5} 
        required />
        <br />
        <button type="submit" onSubmit={event => setZipcode(event.target.value)} >What should I wear?</button>
      </form>
    </div>
  )
}

export default SearchZipcode;