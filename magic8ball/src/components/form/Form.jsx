import BallShake from "../ball/BallShake";
import { ShakeHard } from "reshake";

function CurrentTemp() {
  function handleCurrentTemp(event) {
    event.preventDefault();
    console.log(event.target.elements.temperature.value);
  }
  return (
    
    <form onSubmit={handleCurrentTemp}>
      <input name="temperature" placeholder="75" type="number" required />
      <br />
      <button type="submit">What should I wear?</button>
    </form>
  )
}

export default CurrentTemp;