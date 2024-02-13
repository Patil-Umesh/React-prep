import { useState } from "react";

function App() {
  // let counter = 0;

  const [counter, setCounter] = useState(0);
  const increaseCount = () => {
    if (counter < 20) {
      setCounter(counter + 1);
      //To increase counter multiple times on single click
      // setCounter((prevCounter) => prevCounter + 1);
      // setCounter((prevCounter) => prevCounter + 1);
      // setCounter((prevCounter) => prevCounter + 1);
      // setCounter((prevCounter) => prevCounter + 1);
    }
  };
  const decreaseCount = () => {
    if (!counter < 0) {
      setCounter(counter - 1);
    }
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>Increase/Decrease Counter</h1>
      <h1>Counter: {counter} </h1>
      <button onClick={increaseCount}>Increase</button>
      <br></br>
      <br></br>
      <button onClick={decreaseCount}>Decrease</button>
    </>
  );
}

export default App;
