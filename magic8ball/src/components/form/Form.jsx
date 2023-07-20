function CurrentTemp() {
  function handleCurrentTemp(event) {
    event.preventDefault();
    console.log(event.target.elements.currentTemp.value);
  }
  return (
    <form onSubmit={handleCurrentTemp}>
      <input placeholder="75" type="number" />
      <br />
      <button type="submit">Guess my outfit</button>
    </form>
  )
}

export default CurrentTemp;