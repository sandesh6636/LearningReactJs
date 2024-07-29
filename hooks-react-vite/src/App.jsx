import { useState } from "react";

function App() {
  // let counter = 20;
  let [counter, setCounter] = useState(5);
  function addValue() {
    // console.log("Value added", counter);
    if (counter < 20) {
      //I have made am mistake that , <=20 , it leads to  increment the counter up to 21 , it must be '<'
      counter = counter + 1;
      setCounter(counter);
      console.log("Value added", counter);
    } else {
      console.log("counter must be leess or equal to 20");
    }
  }
  const subtractValue = () => {
    if (!(counter <= 0)) {
      counter = counter - 1;
      setCounter(counter);
      console.log("value subtracted", counter);
    } else {
      console.log("Counter cant be zero");
    }
  };
  return (
    <>
      <h1>02 counter project</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add {counter}</button>
      <br />
      <button onClick={subtractValue}>Subtract {counter}</button>
      <br />
      <p>Footerrr :{counter}</p>
    </>
  );
}

export default App;
